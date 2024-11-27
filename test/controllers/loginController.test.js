import {login} from "../../src/controllers/auth/logincontroller";

describe("Test de login",()=>{
    let loginController;
    beforeEach(()=>{
        loginController = new login();
    });

 
    test("Test de login",async()=>{
        const worker = await loginController.login("email","password");
        expect(worker).not.toBeNull();
    })
})

