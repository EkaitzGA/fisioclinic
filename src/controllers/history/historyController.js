import historyModel from "../../models/historyModel.js";
import error from "../../helpers/errors.js";



async function getAllHistory() {
    const history = await historyModel
    .find()
    .sort({
        date: -1,
        'schedule.hours': 1
    })
    if (!history) {
        throw new error.FINDALL_EMPTY();
    }
    return history;
}

export const functions = {
    getAllHistory,
}
export default functions