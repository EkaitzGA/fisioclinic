import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";



const treatment = sequelize.define("treatments", {
    treatment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default treatment;