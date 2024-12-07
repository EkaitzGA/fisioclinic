import treatmentModel from "../../models/treatmentModel.js";
import error from "../../helpers/errors.js";

/**
 * Gets all treatments from the database.
 * @throws {error.FINDALL_EMPTY} if findAll returns null
 * @returns {Promise<Array<Object>>} An array of treatment objects
 */
async function getAllTreatments() {
        const treatments = await treatmentModel.findAll();
        if (treatments === null) {
            throw new error.FINDALL_EMPTY();
        }
        return treatments;
  
}

/**
 * Creates a new treatment in the database.
 * @param {Object} treatmentData - The data to create the treatment with.
 * @param {string} treatmentData.name - The name of the treatment.
 * @param {number} treatmentData.price - The price of the treatment.
 * @throws {error.CREATE_DOESNT_WORK} If the creation fails.
 * @returns {Promise<Object>} The created treatment.
 */
async function createTreatment(treatmentData) {
    const treatment = await treatmentModel.create(treatmentData);
    if (!treatment) {
        throw new error.CREATE_DOESNT_WORK();
    }
    return treatment;
}
/**
 * Updates a treatment in the database.
 * @param {number} treatment_id - The ID of the treatment to update.
 * @param {string} name - The new name of the treatment.
 * @param {number} price - The new price of the treatment.
 * @throws {error.INVALID_ID} If the ID is invalid.
 * @throws {error.TREATMENT_NOT_FOUND} If the treatment is not found.
 * @returns {Promise<Object>} The updated treatment.
 */
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

/**
 * Deletes a treatment from the database.
 * @param {number} treatment_id - The ID of the treatment to delete.
 * @throws {error.TREATMENT_NOT_FOUND} If the treatment is not found.
 * @returns {Promise<Object>} The deleted treatment.
 */
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