import workerController from "./workerController.js";


async function getAllWorkers(req, res) {
    try{const workers = await workerController.getAllWorkers();
    res.json(workers);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

async function getWorkerByEmail(req, res) {
    try{const { email } = req.params;
    const newWorker = await workerController.getWorkerByEmail(email);
    res.json(newWorker);
}catch(error){
    console.error(error);
    res.status(error.status).json({message: error.message});
}
}

async function createWorker(req, res) {
    try{const workerData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }
    const worker = await workerController.createWorker(workerData);
    res.json(worker);
}catch(error){
    console.error(error);
    res.status(error.status).json({message: error.message});
}
}

async function updateWorker(req, res) {
    try{const  worker_id = parseInt(req.params.id);
    const {first_name, last_name, email, password, phone} = req.body;   
    const worker = await workerController.updateWorker(worker_id, first_name, last_name, email, password, phone);   
    res.json(worker);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}
async function deleteWorker(req, res) {
    try{const  worker_id = parseInt(req.params.id);
    const worker = await workerController.deleteWorker(worker_id);   
    res.json(worker);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}
export const functions = {
    getAllWorkers,
    getWorkerByEmail,
    createWorker,
    updateWorker,
    deleteWorker
}

export default functions