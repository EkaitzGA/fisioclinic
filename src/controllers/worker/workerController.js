import workerModel from "../../models/workerModel.js";
import error from "../../helpers/errors.js";

async function getWorkerByEmail(email) {
    if (!email) {
        throw new error.INVALID_EMAIL();
    }

    const worker = await workerModel.findOne({
        where: { email }
    });

    if (!worker) {
        throw new error.WORKER_NOT_FOUND();
    }

    return worker;
}
async function getWorkerById(worker_id) {
    if (worker_id === null || worker_id === undefined) {
        throw new error.INVALID_ID();
    }
    const worker = await workerModel.findByPk(worker_id);
    if (!worker) {
        throw new error.WORKER_NOT_FOUND();
    }
    return worker;
}

async function getAllWorkers() {
        const workers = await workerModel.findAll();
        if (!workers) {
            throw new error.FINDALL_EMPTY();
        }
        return workers;
    
}

async function createWorker(workerData) {
    if (!workerData) {
        throw new error.INVALID_DATA();
    }
        const newWorker = await workerModel.create(workerData);
        return newWorker;
   
}
async function updateWorker(worker_id, first_name, last_name, email, password, phone) {
   const worker = await workerModel.findByPk(worker_id);
   if (!worker) {
       throw new error.WORKER_NOT_FOUND();
   }
   worker.first_name = first_name;
   worker.last_name = last_name;
   worker.email = email;
   worker.password = password;
   worker.phone = phone;
   await worker.save();
   return worker;
}

async function deleteWorker(worker_id) {
    if (worker_id === null || worker_id === undefined) {
        throw new error.INVALID_ID();
    }
    const worker = await workerModel.findByPk(worker_id);
    if (!worker) {
        throw new error.WORKER_NOT_FOUND();
    }
    await worker.destroy();
    return worker;
}
export const functions = {
    getWorkerByEmail,
    getWorkerById,
    getAllWorkers,
    createWorker,
    updateWorker,
    deleteWorker    
}
export default functions