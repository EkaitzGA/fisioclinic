import patientModel from "../../models/patientModel.js";
import error from "../../helpers/errors.js";


async function getAllPatients() {
        const patients = await patientModel.findAll();
        if (patients === null) {
            throw new error.FINDALL_EMPTY();
        }
        return patients;
    }


async function getPatientByEmail(email) {
        const patient = await patientModel.findOne({
            where: { email }
        });
        if (!patient) {
            throw new error.PATIENT_NOT_FOUND();
        }
        return patient;
   
}

async function getPatientById(patient_id) {
        const patient = await patientModel.findByPk(patient_id);
        if (!patient) {
            throw new error.PATIENT_NOT_FOUND();
        }
        return patient;
   
}


async function createPatient(patientData) {
        const newPatient = await patientModel.create(patientData);
        if (!newPatient) {
            throw new error.CREATE_DOESNT_WORK();
        }
        return newPatient;
    
}
async function updatePatient(patient_id, first_name, last_name, phone, email,medical_history) {
   const patient = await patientModel.findByPk(patient_id);
   if (!patient) {
       throw new error.PATIENT_NOT_FOUND();
   }
   patient.first_name = first_name;
   patient.last_name = last_name;
   patient.phone = phone;
   patient.email = email;
   patient.medical_history = medical_history;
   await patient.save();
   return patient;
}

async function deletePatient(patient_id) {
    const patient = await patientModel.findByPk(patient_id);
    if (!patient) {
        throw new error.PATIENT_NOT_FOUND();
    }
    await patient.destroy();
    return patient;
}
export const functions = {
  getPatientByEmail,
  getPatientById,
  getAllPatients,
  createPatient,
  updatePatient,
  deletePatient
}
export default functions