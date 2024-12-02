import { Router } from "express";
import treatmentApiController  from    "../controllers/treatment/treatmentApiController.js"

const router = Router()

router.get("/",treatmentApiController.getAllTreatments)

router.post("/create",treatmentApiController.createTreatment)

router.put("/update/:id",treatmentApiController.updateTreatment)

router.delete("/delete/:id",treatmentApiController.deleteTreatment)

export default router