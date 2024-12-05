import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import treatmentModel from "./treatmentModel.js";
import patientModel from "./patientModel.js";
import scheduleModel from "./scheduleModel.js";
import workerModel from "./workerModel.js";



const session = sequelize.define("sessions", {
    session_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    treatment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    patient_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    schedule_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    worker_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("Pendiente", "Cerrada"),
        defaultValue: "Pendiente",
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default session;

session.belongsTo(treatmentModel, { foreignKey: "treatment_id" });
session.belongsTo(patientModel, { foreignKey: "patient_id" });
session.belongsTo(scheduleModel, { foreignKey: "schedule_id" });
session.belongsTo(workerModel, { foreignKey: "worker_id" });
treatmentModel.hasMany(session, { foreignKey: "treatment_id" });
patientModel.hasMany(session, { foreignKey: "patient_id" });
scheduleModel.hasMany(session, { foreignKey: "schedule_id" });
workerModel.hasMany(session, { foreignKey: "worker_id" });