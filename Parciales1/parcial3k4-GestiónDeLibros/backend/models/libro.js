// DataTypes: es un objeto que contiene los tipos de datos de Sequelize (como INTEGER, STRING, TEXT, etc.).
import { DataTypes } from "sequelize"
// sequelize: es la instancia de conexión a tu base de datos (SQLite en este caso), que viene del archivo database.js.
import sequelize from "../database.js"


// Definición del modelo sequelize. Este bloque crea el modelo "Libro". El modelo representa una tabla en la base de datos llamada Libros (Sequelize pluraliza por defecto). Cada campo del modelo representa una columna de la tabla:
const Libro = sequelize.define("Libro", {
    IdLibro: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    Titulo: {
        type: DataTypes.TEXT,
    },
    Autor: {
        type: DataTypes.TEXT,
    },
    AnioPublicacion: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
})


// Esto exporta el modelo Libro para que pueda ser importado y usado en otros archivos del backend como index.js (rutas) o app.js (datos de prueba).
export default Libro;
