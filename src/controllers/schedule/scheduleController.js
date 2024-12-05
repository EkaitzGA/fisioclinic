import scheduleModel from "../../models/scheduleModel.js";
import error from "../../helpers/errors.js";

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