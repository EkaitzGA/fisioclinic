import { Router } from "express";
import workerApiController from "../controllers/worker/workerApiController.js"

const router = Router()

router.get("/",workerApiController.getAllWorkers)

router.get("/email/:email",workerApiController.getWorkerByEmail)

router.get("/:id",workerApiController.getWorkerById)

router.post("/create",workerApiController.createWorker)

router.put("/update/:id",workerApiController.updateWorker)

router.delete("/delete/:id",workerApiController.deleteWorker)

export default router