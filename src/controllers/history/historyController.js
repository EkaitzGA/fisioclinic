import historyModel from "../../models/historyModel.js";
import error from "../../helpers/errors.js";

async function getAllHistory() {
    const history = await historyModel.find();
    if (!history) {
        throw new error.FINDALL_EMPTY();
    }
    return history;
}

export const functions = {
    getAllHistory
}
export default functions