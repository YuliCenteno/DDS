import {Sequelize} from "sequelize";
import {tareaModel} from "../models/tareas.js"
import {UsuariosModel} from "../models/usuarios.js"

// cadena de conexcion + db.
const sequelize = new Sequelize({
    dialect: "sqlite", // sqlite elmotor que usamos
    storage: "./db.sqlite" //donde va a estar ubicado nuestra base de datos en disco.
})

// sequelize.define(nombre, atributos, metodos) vincula el modelo con la tabla de la base de datos.
sequelize.define("Tareas", tareaModel.tareasAtributos, tareaModel.tareasMetodos)

sequelize.define("Usuarios", UsuariosModel.usuariosAtributos, UsuariosModel.usuariosMetodos)

//crear FKs por ej el de ID.
sequelize.models.Tareas.belongsTo(sequelize.models.Usuarios, {foreignKey:"UsuarioId"})

export default sequelize