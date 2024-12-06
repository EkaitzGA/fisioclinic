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