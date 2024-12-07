/* import loginController from "./loginController.js";



async function login(req, res) {
    try {
        const { email, password } = req.body;
        const worker = await loginController.login(email, password);
        req.session.user = {
            email: worker.worker.email,
            worker_id: worker.worker_id
        }
    } catch (error) {
        console.error(error);
        res.status(error.status).json({message: error.message});
    }

}


export const functions = {
    login
}
export default functions */

