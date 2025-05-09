import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Persona = sequelize.define("Persona", {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    nombre: {type: DataTypes.STRING},
    apellido: {type: DataTypes.STRING},
    edad: {type: DataTypes.INTEGER},
});

export default Persona;