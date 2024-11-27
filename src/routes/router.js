import { Router } from "express";
import loginRouter from "./loginRouter.js";
import adminRouter from "./adminRouter.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = Router();

router.get('/', (req, res) => {
    res.redirect('/login');
});

router.use("/login", loginRouter)

router.use("/admin", isAuthenticated, adminRouter)

export default router;