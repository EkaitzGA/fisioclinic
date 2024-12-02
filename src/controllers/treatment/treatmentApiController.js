import treatmentController from "./treatmentController.js";

async function getAllTreatments(req, res) {
    try{const treatments = await treatmentController.getAllTreatments();
    res.json(treatments);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

async function createTreatment(req, res) {
    try{const treatmentData = {
        name: req.body.name,
        price: req.body.price
    }
    const treatment = await treatmentController.createTreatment(treatmentData);
    res.json(treatment);
}catch(error){
    console.error(error);
    res.status(error.status).json({message: error.message});
}
}

async function updateTreatment(req, res) {
    try{const treatment_id = parseInt(req.params.id);
    const {name, price} = req.body;   
    const treatment = await treatmentController.updateTreatment(treatment_id, name, price);   
    res.json(treatment);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

async function deleteTreatment(req, res) {
    try{const treatment_id = parseInt(req.params.id);
    const treatment = await treatmentController.deleteTreatment(treatment_id);   
    res.json(treatment);
    }catch(error){
        console.error(error);
        res.status(error.status).json({message: error.message});
    }
}

export const functions = {
    getAllTreatments,
    createTreatment,
    updateTreatment,
    deleteTreatment
}

export default functions