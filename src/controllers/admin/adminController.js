import adminModel from "../../models/adminModel.js";
import error from "../../helpers/errors.js";

async function getWorkerByEmail(email) {
    const worker = await adminModel.findOne({
        where: { email }
    })
    return worker;
}

export const functions = {
    getWorkerByEmail
}
export default functions