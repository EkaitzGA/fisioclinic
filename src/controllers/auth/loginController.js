/* import error from "../../helpers/errors.js";
import { verifyPassword } from "../../config/bcrypt.js";
import workerController from "../worker/workerController.js";


async function login(email,password){
   let worker = await workerController.getWorkerByEmail(email);
        if (!worker) {
            throw new error.EMAIL_NOT_FOUND();
        }
    
    const verified = await verifyPassword(password,worker.password);
    if(!verified){
        throw new error.INVALID_CREDENTIALS();
    } 
    return worker;
}
export const functions ={
    login
}
export default functions */