"use server";

import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";

import { Appointment } from "@/types/appwrite.types";

import { 
  STATIC_APPOINTMENT_STATS, 
  createDemoAppointment,
  STATIC_APPOINTMENTS 
} from "../../constants/staticData";
import {
  API_KEY,
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  ENDPOINT,
  PROJECT_ID,
  databases,
  messaging,
} from "../appwrite.config";
import { formatDateTime, parseStringify } from "../utils";

//  CREATE APPOINTMENT
export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  // Check if Appwrite is configured
  if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
    console.warn('⚠️ Appwrite not configured - creating demo appointment with static data');
    return createDemoAppointment(appointment);
  }

  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );

    revalidatePath("/admin");
    return parseStringify(newAppointment);
  } catch (error) {
    console.error("An error occurred while creating a new appointment:", error);
  }
};

//  GET RECENT APPOINTMENTS
export const getRecentAppointmentList = async () => {
  // Check if Appwrite is configured
  if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
    console.warn('⚠️ Appwrite not configured - returning static appointment data');
    return STATIC_APPOINTMENT_STATS;
  }

  try {
    const appointments = await databases.listDocuments(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      [Query.orderDesc("$createdAt")]
    );

    // const scheduledAppointments = (
    //   appointments.documents as Appointment[]
    // ).filter((appointment) => appointment.status === "scheduled");

    // const pendingAppointments = (
    //   appointments.documents as Appointment[]
    // ).filter((appointment) => appointment.status === "pending");

    // const cancelledAppointments = (
    //   appointments.documents as Appointment[]
    // ).filter((appointment) => appointment.status === "cancelled");

    // const data = {
    //   totalCount: appointments.total,
    //   scheduledCount: scheduledAppointments.length,
    //   pendingCount: pendingAppointments.length,
    //   cancelledCount: cancelledAppointments.length,
    //   documents: appointments.documents,
    // };

    const initialCounts = {
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
    };

    const counts = (appointments.documents as Appointment[]).reduce(
      (acc, appointment) => {
        switch (appointment.status) {
          case "scheduled":
            acc.scheduledCount++;
            break;
          case "pending":
            acc.pendingCount++;
            break;
          case "cancelled":
            acc.cancelledCount++;
            break;
        }
        return acc;
      },
      initialCounts
    );

    const data = {
      totalCount: appointments.total,
      ...counts,
      documents: appointments.documents,
    };

    return parseStringify(data);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the recent appointments:",
      error
    );
  }
};

//  SEND SMS NOTIFICATION
export const sendSMSNotification = async (userId: string, content: string) => {
  // Check if Appwrite is configured
  if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
    console.warn('⚠️ Appwrite not configured - SMS notification skipped in demo mode');
    return {
      $id: 'demo_sms_' + Date.now(),
      content,
      status: 'demo_sent',
    };
  }

  try {
    // https://appwrite.io/docs/references/1.5.x/server-nodejs/messaging#createSms
    const message = await messaging.createSms(
      ID.unique(),
      content,
      [],
      [userId]
    );
    return parseStringify(message);
  } catch (error) {
    console.error("An error occurred while sending sms:", error);
  }
};

//  UPDATE APPOINTMENT
export const updateAppointment = async ({
  appointmentId,
  userId,
  timeZone,
  appointment,
  type,
}: UpdateAppointmentParams) => {
  // Check if Appwrite is configured
  if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
    console.warn('⚠️ Appwrite not configured - returning demo appointment update');
    const demoAppointment = {
      $id: appointmentId,
      ...appointment,
      status: type === 'schedule' ? 'scheduled' : 'cancelled',
      $updatedAt: new Date().toISOString(),
    };
    
    // Still send demo SMS
    await sendSMSNotification(userId, `Demo: Appointment ${type}d successfully`);
    return demoAppointment;
  }

  try {
    // Update appointment to scheduled -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#updateDocument
    const updatedAppointment = await databases.updateDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId,
      appointment
    );

    if (!updatedAppointment) throw Error;

    const smsMessage = `Greetings from CarePulse. ${type === "schedule" ? `Your appointment is confirmed for ${formatDateTime(appointment.schedule!, timeZone).dateTime} with Dr. ${appointment.primaryPhysician}` : `We regret to inform that your appointment for ${formatDateTime(appointment.schedule!, timeZone).dateTime} is cancelled. Reason:  ${appointment.cancellationReason}`}.`;
    await sendSMSNotification(userId, smsMessage);

    revalidatePath("/admin");
    return parseStringify(updatedAppointment);
  } catch (error) {
    console.error("An error occurred while scheduling an appointment:", error);
  }
};

// GET APPOINTMENT
export const getAppointment = async (appointmentId: string) => {
  // Check if Appwrite is configured
  if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
    console.warn('⚠️ Appwrite not configured - looking for static appointment data');
    const staticAppointment = STATIC_APPOINTMENTS.find(apt => apt.$id === appointmentId);
    
    if (staticAppointment) {
      return staticAppointment;
    }
    
    // Return demo appointment if not found in static data
    return {
      $id: appointmentId,
      patient: { name: 'Demo Patient' },
      primaryPhysician: 'Dr. Demo',
      schedule: new Date().toISOString(),
      status: 'scheduled',
      reason: 'Demo appointment',
    };
  }

  try {
    const appointment = await databases.getDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId
    );

    return parseStringify(appointment);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the existing patient:",
      error
    );
  }
};
