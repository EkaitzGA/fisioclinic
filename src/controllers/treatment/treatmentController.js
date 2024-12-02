import treatmentModel from "../../models/treatmentModel.js";
import error from "../../helpers/errors.js";

async function getAllTreatments() {
        const treatments = await treatmentModel.findAll();
        if (treatments === null) {
            throw new error.FINDALL_EMPTY();
        }
        return treatments;
  
}

async function createTreatment(treatmentData) {
    if (treatmentData === null || treatmentData === undefined) {
        throw new error.INVALID_ID();
    }
    const treatment = await treatmentModel.create(treatmentData);
    if (!treatment) {
        throw new error.CREATE_DOESNT_WORK();
    }
    return treatment;
}
async function updateTreatment(treatment_id, name, price) {
    const treatment = await treatmentModel.findByPk(treatment_id);
    if (treatment === null || treatment === undefined) {
        throw new error.INVALID_ID();
    }
    if (!treatment) {
        throw new error.TREATMENT_NOT_FOUND();
    }
    treatment.name = name;
    treatment.price = price;
    await treatment.save();
    return treatment;
}

async function deleteTreatment(treatment_id) {
    if (treatment_id === null || treatment_id === undefined) {
        throw new error.INVALID_ID();
    }
    const treatment = await treatmentModel.destroy({
        where: { treatment_id }
    });
    if (treatment === 0) {
        throw new error.TREATMENT_NOT_FOUND();
    }
    return treatment;
}
export const functions = {
    getAllTreatments,
    createTreatment,
    updateTreatment,
    deleteTreatment 
}

export default functions