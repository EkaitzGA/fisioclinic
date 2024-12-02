import sessionController from "./sessionController.js";

async function getAllSessions(req, res) {
    try{const sessions = await sessionController.getAllSessions();
    res.json(sessions);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

async function getSessionByPatientId(req, res) {
    try{const { patient_id } = req.params;
    const session = await sessionController.getSessionByPatientId(patient_id);
    res.json(session);
}catch(error){
    console.error(error);
    res.status(error.status).json({message: error.message});
}
}

async function getSessionByTreatmentId(req, res) {
    try{const { treatment_id } = req.params;
    const session = await sessionController.getSessionByTreatmentId(treatment_id);
    res.json(session);
}catch(error){
    console.error(error);
    res.status(error.status).json({message: error.message});
}
}

async function getSessionByWorkerId(req, res) {
    try{const { worker_id } = req.params;
    const session = await sessionController.getSessionByWorkerId(worker_id);
    res.json(session);
}catch(error){
    console.error(error);
    res.status(error.status).json({message: error.message});
}
}

async function getSessionByStatus(req, res) {
    try{const { status } = req.params;
    const session = await sessionController.getSessionByStatus(status);
    res.json(session);
}catch(error){
    console.error(error);
    res.status(error.status).json({message: error.message});
}
}

async function createSession(req, res) {
    try{const sessionData = {
        treatment_id: req.body.treatment_id,
        patient_id: req.body.patient_id,
        schedule_id: req.body.schedule_id,
        worker_id: req.body.worker_id,
        date: req.body.date,
        status: req.body.status,
        reason: req.body.reason
    }
    const session = await sessionController.createSession(sessionData);
    res.json(session);
}catch(error){
    console.error(error);
    res.status(error.status).json({message: error.message});
}
}

async function updateSession(req, res) {
    try{const session_id = parseInt(req.params.id);
    const {treatment_id, patient_id, schedule_id, worker_id, date, status, reason} = req.body;   
    const session = await sessionController.updateSession(session_id, treatment_id, patient_id, schedule_id, worker_id, date, status, reason);   
    res.json(session);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

async function deleteSession(req, res) {
    try{const session_id = parseInt(req.params.id);
    const session = await sessionController.deleteSession(session_id);   
    res.json(session);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

export const functions = {
    getAllSessions,
    getSessionByPatientId,
    getSessionByTreatmentId,
    getSessionByWorkerId,
    getSessionByStatus,
    createSession,
    updateSession,
    deleteSession
}

export default functions;