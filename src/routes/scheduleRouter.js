import { Router } from "express";
import scheduleApiController from "../controllers/schedule/scheduleApiController.js"

const router = Router()

router.get("/",scheduleApiController.getAllSchedules)

export default router