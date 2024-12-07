import scheduleModel from "../../models/scheduleModel.js";
import error from "../../helpers/errors.js";

/**
 * Returns all schedules in the database.
 * 
 * @throws {error.FINDALL_EMPTY} If no schedules are found in the database.
 * 
 * @returns {Promise<Object[]>} A promise that resolves to an array of schedule objects.
 */
async function getAllSchedules() {
    const schedules = await scheduleModel.findAll();
    if (!schedules) {
        throw new error.FINDALL_EMPTY();
    }
    return schedules;
}

export const functions = {
    getAllSchedules
}
export default functions