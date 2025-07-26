export const STATIC_PATIENTS = [
  {
    $id: "patient_001",
    userId: "user_001",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    birthDate: new Date("1985-03-15"),
    gender: "Female" as const,
    address: "123 Oak Street, San Francisco, CA 94102",
    occupation: "Software Engineer",
    emergencyContactName: "Michael Johnson",
    emergencyContactNumber: "+1 (555) 123-4568",
    primaryPhysician: "John Green",
    insuranceProvider: "Blue Cross Blue Shield",
    insurancePolicyNumber: "BC123456789",
    allergies: "Penicillin, Shellfish",
    currentMedication: "Lisinopril 10mg daily",
    familyMedicalHistory: "Diabetes (maternal), Hypertension (paternal)",
    pastMedicalHistory: "Appendectomy (2015), Mild asthma",
    identificationType: "Driver's License",
    identificationNumber: "D1234567",
    identificationDocument: null,
    privacyConsent: true,
    $createdAt: "2024-01-15T08:30:00Z",
    $updatedAt: "2024-01-15T08:30:00Z"
  },
  {
    $id: "patient_002",
    userId: "user_002",
    name: "Robert Chen",
    email: "robert.chen@email.com",
    phone: "+1 (555) 234-5678",
    birthDate: new Date("1978-07-22"),
    gender: "Male" as const,
    address: "456 Pine Avenue, Los Angeles, CA 90210",
    occupation: "Marketing Director",
    emergencyContactName: "Lisa Chen",
    emergencyContactNumber: "+1 (555) 234-5679",
    primaryPhysician: "Leila Cameron",
    insuranceProvider: "Aetna",
    insurancePolicyNumber: "AE987654321",
    allergies: "None known",
    currentMedication: "Multivitamin",
    familyMedicalHistory: "Heart disease (paternal)",
    pastMedicalHistory: "Broken arm (2010)",
    identificationType: "Passport",
    identificationNumber: "P9876543",
    identificationDocument: null,
    privacyConsent: true,
    $createdAt: "2024-01-20T14:15:00Z",
    $updatedAt: "2024-01-20T14:15:00Z"
  },
  {
    $id: "patient_003",
    userId: "user_003",
    name: "Maria Rodriguez",
    email: "maria.rodriguez@email.com",
    phone: "+1 (555) 345-6789",
    birthDate: new Date("1992-11-08"),
    gender: "Female" as const,
    address: "789 Elm Drive, Austin, TX 73301",
    occupation: "Teacher",
    emergencyContactName: "Carlos Rodriguez",
    emergencyContactNumber: "+1 (555) 345-6790",
    primaryPhysician: "David Livingston",
    insuranceProvider: "UnitedHealthcare",
    insurancePolicyNumber: "UH555666777",
    allergies: "Latex",
    currentMedication: "Birth control pills",
    familyMedicalHistory: "Breast cancer (maternal grandmother)",
    pastMedicalHistory: "Migraine headaches",
    identificationType: "State ID Card",
    identificationNumber: "TX12345678",
    identificationDocument: null,
    privacyConsent: true,
    $createdAt: "2024-02-01T10:45:00Z",
    $updatedAt: "2024-02-01T10:45:00Z"
  },
  {
    $id: "patient_004",
    userId: "user_004",
    name: "James Wilson",
    email: "james.wilson@email.com",
    phone: "+1 (555) 456-7890",
    birthDate: new Date("1965-04-30"),
    gender: "Male" as const,
    address: "321 Maple Street, Seattle, WA 98101",
    occupation: "Retired Police Officer",
    emergencyContactName: "Dorothy Wilson",
    emergencyContactNumber: "+1 (555) 456-7891",
    primaryPhysician: "Evan Peter",
    insuranceProvider: "Medicare",
    insurancePolicyNumber: "MC999888777",
    allergies: "Aspirin",
    currentMedication: "Metformin 500mg, Atorvastatin 20mg",
    familyMedicalHistory: "Diabetes, High cholesterol",
    pastMedicalHistory: "Type 2 diabetes (2018), Knee replacement (2020)",
    identificationType: "Military ID Card",
    identificationNumber: "MIL987654",
    identificationDocument: null,
    privacyConsent: true,
    $createdAt: "2024-02-05T16:20:00Z",
    $updatedAt: "2024-02-05T16:20:00Z"
  },
  {
    $id: "patient_005",
    userId: "user_005",
    name: "Emily Davis",
    email: "emily.davis@email.com",
    phone: "+1 (555) 567-8901",
    birthDate: new Date("1988-09-12"),
    gender: "Female" as const,
    address: "654 Cedar Lane, Denver, CO 80202",
    occupation: "Graphic Designer",
    emergencyContactName: "Thomas Davis",
    emergencyContactNumber: "+1 (555) 567-8902",
    primaryPhysician: "Jane Powell",
    insuranceProvider: "Cigna",
    insurancePolicyNumber: "CG444333222",
    allergies: "Peanuts, Tree nuts",
    currentMedication: "EpiPen, Claritin 10mg",
    familyMedicalHistory: "Allergies (family history)",
    pastMedicalHistory: "Severe food allergies since childhood",
    identificationType: "Driver's License",
    identificationNumber: "CO5678901",
    identificationDocument: null,
    privacyConsent: true,
    $createdAt: "2024-02-10T09:30:00Z",
    $updatedAt: "2024-02-10T09:30:00Z"
  }
];

export const STATIC_APPOINTMENTS = [
  {
    $id: "appointment_001",
    patient: STATIC_PATIENTS[0],
    schedule: new Date("2024-07-30T10:00:00Z"),
    status: "scheduled" as const,
    primaryPhysician: "John Green",
    reason: "Annual physical examination",
    note: "Patient reports feeling well, routine checkup",
    userId: "user_001",
    cancellationReason: null,
    $createdAt: "2024-07-26T14:30:00Z",
    $updatedAt: "2024-07-26T14:30:00Z"
  },
  {
    $id: "appointment_002",
    patient: STATIC_PATIENTS[1],
    schedule: new Date("2024-07-31T14:30:00Z"),
    status: "scheduled" as const,
    primaryPhysician: "Leila Cameron",
    reason: "Follow-up consultation",
    note: "Blood pressure check and medication review",
    userId: "user_002",
    cancellationReason: null,
    $createdAt: "2024-07-25T11:15:00Z",
    $updatedAt: "2024-07-25T11:15:00Z"
  },
  {
    $id: "appointment_003",
    patient: STATIC_PATIENTS[2],
    schedule: new Date("2024-08-01T09:15:00Z"),
    status: "pending" as const,
    primaryPhysician: "David Livingston",
    reason: "Migraine consultation",
    note: "Patient experiencing increased frequency of headaches",
    userId: "user_003",
    cancellationReason: null,
    $createdAt: "2024-07-27T16:45:00Z",
    $updatedAt: "2024-07-27T16:45:00Z"
  },
  {
    $id: "appointment_004",
    patient: STATIC_PATIENTS[3],
    schedule: new Date("2024-08-02T11:00:00Z"),
    status: "scheduled" as const,
    primaryPhysician: "Evan Peter",
    reason: "Diabetes management",
    note: "Quarterly diabetes check and A1C review",
    userId: "user_004",
    cancellationReason: null,
    $createdAt: "2024-07-24T13:20:00Z",
    $updatedAt: "2024-07-24T13:20:00Z"
  },
  {
    $id: "appointment_005",
    patient: STATIC_PATIENTS[4],
    schedule: new Date("2024-08-05T15:45:00Z"),
    status: "pending" as const,
    primaryPhysician: "Jane Powell",
    reason: "Allergy consultation",
    note: "New environmental allergies, seeking treatment options",
    userId: "user_005",
    cancellationReason: null,
    $createdAt: "2024-07-28T10:10:00Z",
    $updatedAt: "2024-07-28T10:10:00Z"
  },
  {
    $id: "appointment_006",
    patient: STATIC_PATIENTS[0],
    schedule: new Date("2024-07-15T13:30:00Z"),
    status: "cancelled" as const,
    primaryPhysician: "John Green",
    reason: "Blood work review",
    note: "Review recent lab results",
    userId: "user_001",
    cancellationReason: "Patient had a scheduling conflict",
    $createdAt: "2024-07-10T09:00:00Z",
    $updatedAt: "2024-07-14T16:30:00Z"
  },
  {
    $id: "appointment_007",
    patient: STATIC_PATIENTS[1],
    schedule: new Date("2024-08-07T08:30:00Z"),
    status: "scheduled" as const,
    primaryPhysician: "Alex Ramirez",
    reason: "Cardiology consultation",
    note: "Family history of heart disease, preventive consultation",
    userId: "user_002",
    cancellationReason: null,
    $createdAt: "2024-07-29T12:45:00Z",
    $updatedAt: "2024-07-29T12:45:00Z"
  },
  {
    $id: "appointment_008",
    patient: STATIC_PATIENTS[2],
    schedule: new Date("2024-08-08T16:00:00Z"),
    status: "pending" as const,
    primaryPhysician: "Jasmine Lee",
    reason: "Women's health checkup",
    note: "Annual gynecological examination",
    userId: "user_003",
    cancellationReason: null,
    $createdAt: "2024-07-30T14:20:00Z",
    $updatedAt: "2024-07-30T14:20:00Z"
  }
];

export const STATIC_APPOINTMENT_STATS = {
  documents: STATIC_APPOINTMENTS,
  scheduledCount: STATIC_APPOINTMENTS.filter(apt => apt.status === "scheduled").length,
  pendingCount: STATIC_APPOINTMENTS.filter(apt => apt.status === "pending").length,
  cancelledCount: STATIC_APPOINTMENTS.filter(apt => apt.status === "cancelled").length,
  total: STATIC_APPOINTMENTS.length
};

// Helper function to get a random patient
export const getRandomPatient = () => {
  return STATIC_PATIENTS[Math.floor(Math.random() * STATIC_PATIENTS.length)];
};

// Helper function to get patient by userId
export const getPatientByUserId = (userId: string) => {
  return STATIC_PATIENTS.find(patient => patient.userId === userId) || null;
};

// Helper function to get appointments for a specific patient
export const getAppointmentsByUserId = (userId: string) => {
  return STATIC_APPOINTMENTS.filter(appointment => appointment.userId === userId);
};

// Helper function to create a new demo appointment
export const createDemoAppointment = (appointmentData: any) => {
  const newAppointment = {
    $id: 'demo_appointment_' + Date.now(),
    patient: getPatientByUserId(appointmentData.userId) || getRandomPatient(),
    schedule: new Date(appointmentData.schedule),
    status: appointmentData.status || "scheduled" as const,
    primaryPhysician: appointmentData.primaryPhysician,
    reason: appointmentData.reason,
    note: appointmentData.note || "",
    userId: appointmentData.userId,
    cancellationReason: null,
    $createdAt: new Date().toISOString(),
    $updatedAt: new Date().toISOString()
  };
  
  // Add to static appointments array for demo purposes
  STATIC_APPOINTMENTS.push(newAppointment);
  
  return newAppointment;
}; 