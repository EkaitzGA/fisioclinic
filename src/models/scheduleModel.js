import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";



const schedule = sequelize.define("schedule", {
    schedule_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    hours: {
        type: DataTypes.STRING,
        allowNull: false
    },
  
})

export default schedule;