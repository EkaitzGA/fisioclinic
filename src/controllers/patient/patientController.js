import patientModel from "../../models/patientModel.js";
import error from "../../helpers/errors.js";


async function getAllPatients() {
        const patients = await patientModel.findAll();
        if (patients === null) {
            throw new error.FINDALL_EMPTY();
        }
        return patients;
    }


    /**
     * Searches for a patient with the given email and returns it.
     * @param {string} email - The email to search for.
     * @returns {Promise<Object>} The searched patient.
     * @throws {error.PATIENT_NOT_FOUND} If the patient is not found.
     */
async function getPatientByEmail(email) {
    console.log(email, "email");
        const patient = await patientModel.findOne({
            where: { email }
        });
        if (!patient) {
            throw new error.PATIENT_NOT_FOUND();
        }
        return patient;
   
}

    /**
     * Searches for a patient with the given ID and returns it.
     * @param {number} patient_id - The ID to search for.
     * @returns {Promise<Object>} The searched patient.
     * @throws {error.PATIENT_NOT_FOUND} If the patient is not found.
     */
async function getPatientById(patient_id) {
        const patient = await patientModel.findByPk(patient_id);
        if (!patient) {
            throw new error.PATIENT_NOT_FOUND();
        }
        return patient;
   
}



    /**
     * Creates a new patient in the database.
     * @param {Object} patientData - The data to create the patient with.
     * @param {string} patientData.first_name - The first name of the patient.
     * @param {string} patientData.last_name - The last name of the patient.
     * @param {string} patientData.phone - The phone of the patient.
     * @param {string} patientData.email - The email of the patient.
     * @param {string} patientData.medical_history - The medical history of the patient.
     * @returns {Promise<Object>} The created patient.
     * @throws {error.CREATE_DOESNT_WORK} If the creation fails.
     */
async function createPatient(patientData) {
        const newPatient = await patientModel.create(patientData);
        if (!newPatient) {
            throw new error.CREATE_DOESNT_WORK();
        }
        return newPatient;
    
}
    /**
     * Updates a patient in the database.
     * @param {number} patient_id - The ID of the patient to update.
     * @param {string} first_name - The new first name of the patient.
     * @param {string} last_name - The new last name of the patient.
     * @param {string} phone - The new phone of the patient.
     * @param {string} email - The new email of the patient.
     * @param {string} medical_history - The new medical history of the patient.
     * @returns {Promise<Object>} The updated patient.
     * @throws {error.PATIENT_NOT_FOUND} If the patient is not found.
     */
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

    /**
     * Deletes a patient from the database.
     * @param {number} patient_id - The ID of the patient to delete.
     * @returns {Promise<Object>} The deleted patient.
     * @throws {error.PATIENT_NOT_FOUND} If the patient is not found.
     */
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