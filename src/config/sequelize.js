import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const DB_HOST = process.env.DB_HOST;
const DB_PORT = 3306;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;


const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    dialect: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    define: {
        freezeTableName: true,
        timestamps: false
    },
})

async function testConnection(retries = 5, delay = 5000) {
    while (retries > 0) {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            return; // Salir de la función si la conexión es exitosa
        } catch (error) {
            console.error(`Unable to connect to the database. Retries left: ${retries - 1}`, error);
            retries -= 1;

            if (retries === 0) {
                console.error('All retries exhausted. Could not connect to the database.');
                process.exit(1); // Salir del proceso si no se puede conectar
            }

            // Esperar antes de volver a intentar
            await new Promise(res => setTimeout(res, delay));
        }
    }
}

testConnection();


export default sequelize;