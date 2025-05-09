import {DataTypes} from "sequelize"

const tareasAtributos = {
    // para crear los atributos me fijo en la base de datos.
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false // que no permite null.
    },
    UsuarioID:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
};

const tareasMetodos = {
    timestamps: false //sirve para q el sequelize no registre fecha y hora de la operacion, porq no sirve.
};

const tareaModel = {
    tareasAtributos,
    tareasMetodos
}

export {tareaModel};