import { Router } from "express";
import sessionApiController from "../controllers/session/sessionApiController.js"

const router = Router()

router.get("/",sessionApiController.getAllSessions)

router.get("/date/:startDate/:endDate",sessionApiController.getSessionsByDateRange)

router.get("/:id",sessionApiController.getSessionById)

router.get("/availables/:startDate/:endDate",sessionApiController.getAvailableSessions)

router.get("/patient/:id",sessionApiController.getSessionByPatientId)

router.get("/treatment/:id",sessionApiController.getSessionByTreatmentId)

router.get("/worker/:id",sessionApiController.getSessionByWorkerId)

router.get("/status/:status",sessionApiController.getSessionByStatus)

router.post("/create",sessionApiController.createSession)

router.put("/update/:id",sessionApiController.updateSession)

router.delete("/delete/:id",sessionApiController.deleteSession)

export default router