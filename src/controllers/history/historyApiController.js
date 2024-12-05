import historyController from "./historyController.js";

async function getAllHistory(req, res) {
    const history = await historyController.getAllHistory();
    res.json(history);
}

export const functions = {
    getAllHistory
}
export default functions