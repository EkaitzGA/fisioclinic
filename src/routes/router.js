import { Router } from "express";
/* import loginRouter from "./loginRouter.js"; */
import workerRouter from "./workerRouter.js";
import patientRouter from "./patientRouter.js";
import treatmentRouter from "./treatmentRouter.js";
import sessionRouter from "./sessionRouter.js";
import scheduleRouter from "./scheduleRouter.js";
import historyRouter from "./historyRouter.js";
/* import { isAuthenticated } from "../middlewares/authMiddleware.js"; */

const router = Router();


/* router.use("/login", loginRouter) */

router.use("/workers", workerRouter)

router.use("/patients", patientRouter)

router.use("/treatments", treatmentRouter)

router.use("/sessions", sessionRouter)

router.use("/schedules", scheduleRouter)

router.use("/history", historyRouter)

export default router;