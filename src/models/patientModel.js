import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";



const patient = sequelize.define("patients", {
    patient_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    medical_history: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default patient;



