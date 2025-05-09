import {DataTypes} from "sequelize"

const usuariosAtributos = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false, // que no me permita null
    },
    apellido: {
        type: DataTypes.TEXT,
        allowNull: false, // que no me permita null
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    usuario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_alta: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW //fecha de ahora, cuando se cree el registro.
    }
};

const usuariosMetodos = {
    timestamps: false
};

const UsuariosModel = {
    usuariosAtributos,
    usuariosMetodos
};

export {UsuariosModel};