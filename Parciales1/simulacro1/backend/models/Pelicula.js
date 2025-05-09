import { DataTypes } from "sequelize"
import sequelize from "../db.js"

const Pelicula = sequelize.define("Pelicula", {
    titulo: {type: DataTypes.STRING, allowNull: false},
    director: {type: DataTypes.STRING, allowNull: true},
    anio: {type: DataTypes.INTEGER},
    genero: {type: DataTypes.STRING, allowNull: true}

});

export default Pelicula;