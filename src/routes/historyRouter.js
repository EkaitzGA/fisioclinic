import { Router } from "express";
import historyApiController from "../controllers/history/historyApiController.js"

const router = Router()

router.get("/",historyApiController.getAllHistory)

export default router