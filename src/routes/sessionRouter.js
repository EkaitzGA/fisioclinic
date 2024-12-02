import { Router } from "express";
import sessionApiController from "../controllers/session/sessionApiController.js"

const router = Router()

router.get("/",sessionApiController.getAllSessions)

router.get("/patient/:id",sessionApiController.getSessionByPatientId)

router.get("/treatment/:id",sessionApiController.getSessionByTreatmentId)

router.get("/worker/:id",sessionApiController.getSessionByWorkerId)

router.get("/status/:status",sessionApiController.getSessionByStatus)

router.post("/create",sessionApiController.createSession)

router.put("/update/:id",sessionApiController.updateSession)

router.delete("/delete/:id",sessionApiController.deleteSession)

export default router