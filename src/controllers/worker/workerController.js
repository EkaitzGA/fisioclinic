import workerModel from "../../models/workerModel.js";
import error from "../../helpers/errors.js";

/**
 * Searches for a worker with the given email and returns it.
 * @param {string} email - The email to search for.
 * @returns {Promise<Object>} The searched worker.
 * @throws {error.INVALID_EMAIL} If the given email is invalid.
 * @throws {error.WORKER_NOT_FOUND} If the worker is not found.
 */
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
/**
 * Searches for a worker with the given ID and returns it.
 * @param {number} worker_id - The ID to search for.
 * @returns {Promise<Object>} The searched worker.
 * @throws {error.INVALID_ID} If the given ID is invalid.
 * @throws {error.WORKER_NOT_FOUND} If the worker is not found.
 */
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

/**
 * Searches for all workers and returns them.
 * @returns {Promise<Object[]>} An array with all the workers.
 * @throws {error.FINDALL_EMPTY} If no workers are found.
 */
async function getAllWorkers() {
        const workers = await workerModel.findAll();
        if (!workers) {
            throw new error.FINDALL_EMPTY();
        }
        return workers;
    
}

/**
 * Creates a new worker in the database with the given data.
 * @param {Object} workerData - The data to create the worker with.
 * @param {string} workerData.first_name - The first name of the worker.
 * @param {string} workerData.last_name - The last name of the worker.
 * @param {string} workerData.email - The email of the worker.
 * @param {string} workerData.password - The password of the worker.
 * @param {string} [workerData.phone] - The phone number of the worker (optional).
 * @returns {Promise<Object>} The newly created worker.
 * @throws {error.INVALID_DATA} If the worker data is invalid.
 */
async function createWorker(workerData) {
    if (!workerData) {
        throw new error.INVALID_DATA();
    }
        const newWorker = await workerModel.create(workerData);
        return newWorker;
   
}
/**
 * Updates a worker in the database with the given data.
 * @param {number} worker_id - The ID of the worker to update.
 * @param {string} first_name - The new first name of the worker.
 * @param {string} last_name - The new last name of the worker.
 * @param {string} email - The new email of the worker.
 * @param {string} password - The new password of the worker.
 * @param {string} [phone] - The new phone number of the worker (optional).
 * @returns {Promise<Object>} The updated worker.
 * @throws {error.WORKER_NOT_FOUND} If the worker is not found.
 */
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

/**
 * Deletes a worker from the database by their ID.
 * @param {number} worker_id - The ID of the worker to delete.
 * @returns {Promise<Object>} The deleted worker.
 * @throws {error.INVALID_ID} If the worker_id is null or undefined.
 * @throws {error.WORKER_NOT_FOUND} If the worker is not found.
 */
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