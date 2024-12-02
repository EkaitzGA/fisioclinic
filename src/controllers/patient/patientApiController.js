import patientController from "./patientController.js";

async function getAllPatients(req, res) {
    try{
    const patients = await patientController.getAllPatients();
    res.json(patients);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

async function getPatientByEmail(req, res) {
    try{
    const { email } = req.params;
    const newPatient = await patientController.getPatientByEmail(email);
    res.json(newPatient);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}   

async function getPatientById(req, res) {
    try{const { patient_id } = req.params;
    const newPatient = await patientController.getPatientById(patient_id);
    res.json(newPatient);
}catch(error){
    console.error(error);
    res.status(error.status).json({message: error.message});
}
}   

async function createPatient(req, res) {
    try{const patientData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email,
        medical_history: req.body.medical_history
    }
    const patient = await patientController.createPatient(patientData);
    res.json(patient);
}catch(error){
    console.error(error);
    res.status(error.status).json({message: error.message});
}
}

async function updatePatient(req, res) {
    try{const  patient_id = parseInt(req.params.id);
    const {first_name, last_name, phone, email, medical_history} = req.body;   
    const patient = await patientController.updatePatient(patient_id, first_name, last_name, phone, email, medical_history);   
    res.json(patient);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

async function deletePatient(req, res) {
    try{const  patient_id = parseInt(req.params.id);
    const patient = await patientController.deletePatient(patient_id);   
    res.json(patient);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

export const functions = {
    getAllPatients,
    getPatientByEmail,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
}

export default functions