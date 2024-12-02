import { Router } from "express";
import patientApiController from "../controllers/patient/patientApiController.js"

const router = Router()

router.get("/",patientApiController.getAllPatients)

router.get("/:id",patientApiController.getPatientById)

router.get("/:email",patientApiController.getPatientByEmail)

router.post("/create",patientApiController.createPatient)

router.put("/update/:id",patientApiController.updatePatient)

router.delete("/delete/:id",patientApiController.deletePatient)

export default router