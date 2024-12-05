import scheduleController from "./scheduleController.js";

async function getAllSchedules(req, res) {
    try{const schedules = await scheduleController.getAllSchedules();
    res.json(schedules);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

export const functions = {
    getAllSchedules
}
export default functions