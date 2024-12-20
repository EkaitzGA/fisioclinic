import sessionModel from "../../models/sessionModel.js";
import treatmentModel from "../../models/treatmentModel.js";
import patientModel from "../../models/patientModel.js";
import workerModel from "../../models/workerModel.js";
import scheduleModel from "../../models/scheduleModel.js";
import historyModel from "../../models/historyModel.js";
import error from "../../helpers/errors.js";
import { Op } from "sequelize";


const includeOptions = [
    {
        model: treatmentModel,
        attributes: ['name']
    },
    {
        model: patientModel,
        attributes: ['first_name', 'last_name']
    },
    {
        model: scheduleModel,
        attributes: ['hours']
    },
    {
        model: workerModel,
        attributes: ['first_name', 'last_name']
    }
];
/**
 * Gets all sessions ordered by date in descending order and by hours in ascending order.
 * @returns {Promise<Array<Session>>} List of sessions.
 * @throws {SESSION_NOT_FOUND} If there are no sessions.
 */
async function getAllSessions() {
        const sessions = await sessionModel.findAll({
            include: includeOptions,
            order:[
                ['date', 'DESC'],
                [scheduleModel, 'hours', 'ASC']
            ]
        });
     
        if (!sessions) {
            throw new error.SESSION_NOT_FOUND();
        }
        return sessions;
 
}
/**
 * Gets all sessions that are in the given date range, ordered by date in ascending order and by hours in ascending order.
 * @param {Date|string} startDate - The start date. Can be a Date object or a string in the format 'yyyy-mm-dd'.
 * @param {Date|string} endDate - The end date. Can be a Date object or a string in the format 'yyyy-mm-dd'.
 * @returns {Promise<Array<Session>>} List of sessions.
 * @throws {INVALID_DATE} If the given dates are invalid.
 * @throws {SESSION_NOT_FOUND} If there are no sessions in the given date range.
 */
async function getSessionsByDateRange(startDate, endDate) {
    if (startDate === null || startDate === undefined || endDate === null || endDate === undefined) {
        throw new error.INVALID_DATE();
    }
    const sessions = await sessionModel.findAll({
        attributes: ['date', 'status', 'reason'],
        where: { date: { [Op.between]: [startDate, endDate] } },
        include: includeOptions,
        order: [
            ['date', 'ASC'],
            [scheduleModel, 'hours', 'ASC']
        ]
    });
    if (!sessions) {
        throw new error.SESSION_NOT_FOUND();
    }
    return sessions;        
}

/**
 * Gets all available slots within the specified date range.
 * It considers schedules and existing session bookings to determine availability.
 * 
 * @param {Date|string} startDate - The start date of the range. Can be a Date object or a string in the format 'yyyy-mm-dd'.
 * @param {Date|string} endDate - The end date of the range. Can be a Date object or a string in the format 'yyyy-mm-dd'.
 * @returns {Promise<Array<Object>>} List of available slots, each containing date, schedule_id, and hours.
 * @throws {SLOTS_NOT_FOUND} If no available slots are found within the specified date range.
 */
async function getAvailableSessions(startDate, endDate) {
    const schedules = await scheduleModel.findAll({
        attributes: ['schedule_id', 'hours']
    });

  
    const createdSessions = await sessionModel.findAll({
        where: {
            date: {
                [Op.between]: [startDate, endDate]
            }
        },
        attributes: ['date', 'schedule_id']
    });

   
    const occupiedMap = new Set(
        createdSessions.map(session => `${session.date}-${session.schedule_id}`)
    );

    const availableSlots = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);

   
    while (currentDate <= end) {
        const dateString = currentDate.toISOString().split('T')[0]; 

        schedules.forEach(schedule => {
            const key = `${dateString}-${schedule.schedule_id}`;
            if (!occupiedMap.has(key)) {
                availableSlots.push({
                    date: dateString,
                    schedule_id: schedule.schedule_id,
                    hours: schedule.hours
                });
            }
        });

      
        currentDate.setDate(currentDate.getDate() + 1);
    }

    if (availableSlots.length === 0) {
        throw new error.SLOTS_NOT_FOUND();
    }

    return availableSlots;
}


    /**
     * Gets a session by its id.
     * @param {number} session_id - The id of the session.
     * @returns {Promise<Session>} The session.
     * @throws {SESSION_NOT_FOUND} If the session is not found.
     */
async function getSessionById(session_id) {
        const session = await sessionModel.findByPk(session_id, {
            attributes: ['date', 'status', 'reason'],
            include: includeOptions
        });
        if (!session) {
            throw new error.SESSION_NOT_FOUND();
        }
        return session;
  
}
    
    /**
     * Gets all sessions of a patient ordered by date in descending order and by hours in ascending order.
     * @param {number} patient_id - The id of the patient.
     * @returns {Promise<Array<Session>>} List of sessions.
     * @throws {SESSION_NOT_FOUND} If the patient has no sessions.
     */
async function getSessionByPatientId(patient_id) {
        const session = await sessionModel.findAll({
            attributes: ['date', 'status', 'reason'],
            where: { patient_id },
            include: includeOptions,
        order: [
            ['date', 'DESC'],
            [scheduleModel, 'hours', 'ASC']
        ]
        });
        if (!session) {
            throw new error.SESSION_NOT_FOUND();
        }
        return session;
  
}
    /**
     * Gets all sessions of a treatment ordered by date in descending order and by hours in ascending order.
     * @param {number} treatment_id - The id of the treatment.
     * @returns {Promise<Array<Session>>} List of sessions.
     * @throws {INVALID_ID} If the treatment_id is null or undefined.
     * @throws {SESSION_NOT_FOUND} If the treatment has no sessions.
     */
async function getSessionByTreatmentId(treatment_id) {
    if (treatment_id === null || treatment_id === undefined) {
        throw new error.INVALID_ID();
    }
    const session = await sessionModel.findAll({
        attributes: ['date', 'status', 'reason'],
        where: { treatment_id },
        include: includeOptions,
        order: [
            ['date', 'DESC'],
            [scheduleModel, 'hours', 'ASC']
        ]
    });
    if (!session) {
        throw new error.SESSION_NOT_FOUND();
    }
    return session;
}
    /**
     * Gets all sessions of a worker ordered by date in descending order and by hours in ascending order.
     * @param {number} worker_id - The id of the worker.
     * @returns {Promise<Array<Session>>} List of sessions.
     * @throws {INVALID_ID} If the worker_id is null or undefined.
     * @throws {SESSION_NOT_FOUND} If the worker has no sessions.
     */
async function getSessionByWorkerId(worker_id) {
    if (worker_id === null || worker_id === undefined) {
        throw new error.INVALID_ID();
    }
    const session = await sessionModel.findAll({
        attributes: ['date', 'status', 'reason'],
        where: { worker_id },
        include: includeOptions,
        order: [
            ['date', 'DESC'],
            [scheduleModel, 'hours', 'ASC']
        ]
    })
    if (!session) {
        throw new error.SESSION_NOT_FOUND();
    }
    return session;
}

    /**
     * Gets all sessions with a given status ordered by date in ascending order if the status is 'Pendiente' or descending order if the status is 'Cerrada'.
     * @param {string} status - The status of the sessions. Must be either 'Pendiente' or 'Cerrada'.
     * @returns {Promise<Array<Session>>} List of sessions.
     * @throws {INCORRECT_STATUS} If the status is not 'Pendiente' or 'Cerrada'.
     * @throws {SESSION_NOT_FOUND} If there are no sessions with the given status.
     */
async function getSessionByStatus(status) {
    const orderDirection = status === "Pendiente" ? "ASC" : "DESC";
    const session = await sessionModel.findAll({
        attributes: ['date', 'status', 'reason'],
        where: { status },
        include: includeOptions,
        order: [
            ['date', orderDirection],
            [scheduleModel, 'hours', orderDirection]
        ]
    });
    if(status !== "Pendiente" && status !== "Cerrada"){
        throw new error.INCORRECT_STATUS()
    }
    if (!session) {
        throw new error.SESSION_NOT_FOUND();
    }
    return session;
}

    /**
     * Creates a new session with the given data.
     * @param {Object} sessionData - The data of the session to create. Must contain the following properties:
     * - treatment_id: The id of the treatment of the session.
     * - patient_id: The id of the patient of the session.
     * - schedule_id: The id of the schedule of the session.
     * - worker_id: The id of the worker of the session.
     * - date: The date of the session.
     * - status: The status of the session. Must be either 'Pendiente' or 'Cerrada'.
     * - reason: The reason of the session. Only required if the status is 'Cerrada'.
     * @returns {Promise<Session>} The created session with all its relations.
     * @throws {CREATE_DOESNT_WORK} If the session could not be created.
     */
async function createSession(sessionData){
    const session = await sessionModel.create(sessionData,);
    if(!session){
        throw new error.CREATE_DOESNT_WORK();
    }
    const sessionWithRelations = await sessionModel.findByPk(session.session_id, {
        attributes: ['date', 'status', 'reason'],
        include: includeOptions,
    });
    return sessionWithRelations;
    }

    /**
     * Updates a session with the given data.
     * @param {Number} session_id - The id of the session to update.
     * @param {Number} treatment_id - The id of the treatment of the session.
     * @param {Number} patient_id - The id of the patient of the session.
     * @param {Number} schedule_id - The id of the schedule of the session.
     * @param {Number} worker_id - The id of the worker of the session.
     * @param {Date} date - The date of the session.
     * @param {"Pendiente" | "Cerrada"} status - The status of the session. Must be either 'Pendiente' or 'Cerrada'.
     * @param {String} reason - The reason of the session. Only required if the status is 'Cerrada'.
     * @returns {Promise<Session>} The updated session with all its relations.
     * @throws {SESSION_NOT_FOUND} If the session does not exist.
     * @throws {BLOCK_UPDATE_SESSION} If the session is already closed.
     */
async function updateSession(session_id, treatment_id, patient_id, schedule_id, worker_id,date, status, reason) {
    const session = await sessionModel.findByPk(session_id,{
        attributes: ['date', 'status', 'reason'],
        include: includeOptions,
});
    if (!session) {
        throw new error.SESSION_NOT_FOUND();
    }
    if (session.status === "Cerrada") {
        throw new error.BLOCK_UPDATE_SESSION()
    }
    session.session_id = session_id;
    session.treatment_id = treatment_id;
    session.patient_id = patient_id;
    session.schedule_id = schedule_id;
    session.worker_id = worker_id;
    session.date = date
    session.status = status;
    session.reason = reason;
    await session.save();

    if(session.status === "Cerrada"){
        const updatedSession = await sessionModel.findByPk(session_id, {
            attributes: ['date', 'status', 'reason'],
            include: includeOptions,
        });
        const historyEntry = {
            date: date,
            reason: reason,
            treatment:{
                name: updatedSession.treatment.name,
                price: updatedSession.treatment.price
            },
            patient: {
                first_name: updatedSession.patient.first_name,
                last_name: updatedSession.patient.last_name
            },
            worker: {
                first_name: updatedSession.worker.first_name,
                last_name: updatedSession.worker.last_name
            },
            schedule: {
                hours: updatedSession.schedule.hours
            }

        }
        await historyModel.create(historyEntry);
    }
    return session;
}

/**
 * Deletes a session by its ID.
 * @param {number} session_id The ID of the session to delete.
 * @returns {Promise<Object>} The deleted session.
 * @throws {error.SESSION_NOT_FOUND} If no session with the given ID exists.
 */
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
    getAvailableSessions,
    getSessionById,
    getSessionsByDateRange,
    getSessionByPatientId,
    getSessionByTreatmentId,
    getSessionByWorkerId,
    getSessionByStatus,
    createSession,
    updateSession,
    deleteSession
}

export default functions