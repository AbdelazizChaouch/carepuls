# 🏥 CarePulse Healthcare App - Demo Instructions

## 📊 Static Data Overview

Your app now includes realistic static data to demonstrate full functionality:

### 👥 **5 Static Patients**
- **Sarah Johnson** (user_001) - Software Engineer, SF
- **Robert Chen** (user_002) - Marketing Director, LA  
- **Maria Rodriguez** (user_003) - Teacher, Austin
- **James Wilson** (user_004) - Retired Police Officer, Seattle
- **Emily Davis** (user_005) - Graphic Designer, Denver

### 📅 **8 Static Appointments**
- **4 Scheduled** appointments
- **3 Pending** appointments  
- **1 Cancelled** appointment

## 🧪 How to Test the Static Data

### **Option 1: Use Existing Patient Email**
1. Go to http://localhost:3000
2. Enter one of these emails in the patient form:
   - `sarah.johnson@email.com`
   - `robert.chen@email.com`
   - `maria.rodriguez@email.com`
   - `james.wilson@email.com`
   - `emily.davis@email.com`
3. Fill name and phone to match the patient
4. Submit - you'll see that patient already exists and can book appointments

### **Option 2: Create New Demo Patient**
1. Use any new email/name combination
2. App will create a demo user and guide through registration

### **Option 3: View Admin Dashboard with Real Data**
1. Go to http://localhost:3000/?admin=true
2. Enter passkey: `111111`
3. See actual appointment statistics:
   - **4 Scheduled** appointments
   - **3 Pending** appointments
   - **1 Cancelled** appointment
4. View realistic appointment data in the table

## 🎯 Features You Can Test

✅ **Patient Registration** - Complete workflow with validation
✅ **Appointment Booking** - Schedule with real doctor names
✅ **Admin Dashboard** - View all appointments and statistics
✅ **Appointment Management** - Schedule/Cancel appointments
✅ **Realistic Data** - Proper medical histories, allergies, medications
✅ **Multiple Patient Scenarios** - Different ages, conditions, insurance

## 📋 Available Doctors

The app includes 9 doctors you can book appointments with:
- Dr. John Green
- Dr. Leila Cameron  
- Dr. David Livingston
- Dr. Evan Peter
- Dr. Jane Powell
- Dr. Alex Ramirez
- Dr. Jasmine Lee
- Dr. Alyana Cruz
- Dr. Hardik Sharma

## 🔐 Admin Access

**URL:** http://localhost:3000/?admin=true
**Passkey:** `111111`

## 🚀 Quick Demo Flow

1. **Homepage** → Enter `sarah.johnson@email.com`
2. **Registration** → Patient exists, go to appointments
3. **Book Appointment** → Choose doctor, date, reason
4. **Success** → Appointment created
5. **Admin Panel** → View all appointments and stats

Your app now feels like a real healthcare management system! 🏥✨ 