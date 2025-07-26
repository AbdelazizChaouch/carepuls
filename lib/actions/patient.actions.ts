"use server";

import { ID, InputFile, Query } from "node-appwrite";

import { 
  STATIC_PATIENTS, 
  getPatientByUserId
} from "../../constants/staticData";
import {
  API_KEY,
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  // Check if Appwrite is configured
  if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
    console.warn('⚠️ Appwrite not configured - creating demo user with realistic data');
    
    // Check if user email matches any static patient
    const existingPatient = STATIC_PATIENTS.find(p => p.email === user.email);
    if (existingPatient) {
      return {
        $id: existingPatient.userId,
        name: existingPatient.name,
        email: existingPatient.email,
        phone: existingPatient.phone,
      };
    }
    
    // Create new demo user
    return {
      $id: 'demo_user_' + Date.now(),
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  }

  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

// GET USER
export const getUser = async (userId: string) => {
  // Check if Appwrite is configured
  if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
    console.warn('⚠️ Appwrite not configured - checking static user data');
    const staticPatient = getPatientByUserId(userId);
    
    if (staticPatient) {
      return {
        $id: userId,
        name: staticPatient.name,
        email: staticPatient.email,
        phone: staticPatient.phone,
      };
    }
    
    // Return demo user if not found in static data
    return {
      $id: userId,
      name: 'Demo User',
      email: 'demo@example.com',
      phone: '+1234567890',
    };
  }

  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

// REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  // Check if Appwrite is configured
  if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
    console.warn('⚠️ Appwrite not configured - returning demo patient registration');
    return {
      $id: 'demo_patient_' + Date.now(),
      ...patient,
      identificationDocumentId: null,
      identificationDocumentUrl: null,
    };
  }

  try {
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    let file;
    if (identificationDocument) {
      const inputFile =
        identificationDocument &&
        InputFile.fromBlob(
          identificationDocument?.get("blobFile") as Blob,
          identificationDocument?.get("fileName") as string
        );

      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }

    // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id ? file.$id : null,
        identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
          : null,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};

// GET PATIENT
export const getPatient = async (userId: string) => {
  // Check if Appwrite is configured
  if (!ENDPOINT || !PROJECT_ID || !API_KEY) {
    console.warn('⚠️ Appwrite not configured - checking static patient data');
    return getPatientByUserId(userId);
  }

  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};
