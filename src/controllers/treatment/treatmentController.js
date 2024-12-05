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
    const treatment = await treatmentModel.findByPk(treatment_id)
    if (!treatment) {
        throw new error.TREATMENT_NOT_FOUND();
    }
    await treatmentModel.destroy({ where: { treatment_id } });
    return treatment;
}
export const functions = {
    getAllTreatments,
    createTreatment,
    updateTreatment,
    deleteTreatment 
}

export default functions