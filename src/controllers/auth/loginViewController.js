import loginController from "./loginController.js";


function loginForm(req, res) {
    const { message, messageType } = req.query;
    res.render("auth/login", { message, messageType });
}


async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await loginController.login(email, password);
        req.session.user = {
            email: user.user.email,
            worker_id: user.worker_id
        }
        console.log(req.session.user);
        let url = `/home/?message=sesión iniciada correctamente&messageType=success`;
        res.redirect(url);
    } catch (error) {
        console.error(error);
        const url = `/login?message=${error.message}&messageType=error`
        res.redirect(url);
    }

}



function logout(req, res) {
    req.session.user = null;
    res.redirect("/");
}


export const functions = {
    loginForm,
    login,
    logout,
}
export default functions

//REVISAR TODO, ESTÁ COPIADO DE MACHIMBA