import sessionModel from "../../models/sessionModel.js";
import error from "../../helpers/errors.js";

async function getAllSessions() {
        const sessions = await sessionModel.findAll();
        if (!sessions) {
            throw new error.SESSION_NOT_FOUND();
        }
        return sessions;
 
}

async function getSessionByPatientId(patient_id) {
        const session = await sessionModel.findAll({
            where: { patient_id }
        });
        if (!session) {
            throw new error.SESSION_NOT_FOUND();
        }
        return session;
  
}
async function getSessionByTreatmentId(treatment_id) {
    if (treatment_id === null || treatment_id === undefined) {
        throw new error.INVALID_ID();
    }
    const session = await sessionModel.findAll({
        where: { treatment_id }
    });
    if (!session) {
        throw new error.SESSION_NOT_FOUND();
    }
    return session;
}
async function getSessionByWorkerId(worker_id) {
    if (worker_id === null || worker_id === undefined) {
        throw new error.INVALID_ID();
    }
    const session = await sessionModel.findAll({
        where: { worker_id }
    })
    if (!session) {
        throw new error.SESSION_NOT_FOUND();
    }
    return session;
}

async function getSessionByStatus(status) {
    const session = await sessionModel.findAll({
        where: { status }
    });
    if (!session) {
        throw new error.SESSION_NOT_FOUND();
    }
    return session;
}

async function createSession(sessionData){
    const session = await sessionModel.create(sessionData);
    if(!session){
        throw new error.CREATE_DOESNT_WORK();
    }
    return session; 
}

async function updateSession(session_id, treatment_id, patient_id, schedule_id, worker_id,date, status, reason) {
    const session = await sessionModel.findByPk(session_id);
    if (!session) {
        throw new error.SESSION_NOT_FOUND();
    }
    session.treatment_id = treatment_id;
    session.patient_id = patient_id;
    session.schedule_id = schedule_id;
    session.worker_id = worker_id;
    session.date = date
    session.status = status;
    session.reason = reason;
    await session.save();
    return session;
}

async function deleteSession(session_id) {
    const session = await sessionModel.findByPk(session_id);
    if (!session) {
        throw new error.SESSION_NOT_FOUND();
    }
    await session.destroy();
    return session;
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

export default functions