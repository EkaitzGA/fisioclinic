import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
/* import treatment from "./treatmentsModel.js";
import patient from "./patientModel.js";
import worker from "./workerModel.js"; */



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
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default session;