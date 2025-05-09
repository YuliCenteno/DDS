// aca van a estar nuestros casos de uso.
import sequelize from "../databases/databases.js";

// obtener todos los usuarios.
const getAll = async () => {
    const allUsuarios = await sequelize.models.Usuarios.findAll() // busco en sequelize todos los usuarios
    return allUsuarios.map(usuario => usuario.dataValues) // por cada usuario, devuelvo unicamente sus atributos
}
 
const getById = async () => {
    const usuario = await sequelize.models.Usuarios.findByPk(id);
    return usuario.dataValues
}

const createUser = async (body) => {
    const usuarioACrear = await sequelize.models.Usuarios.create({
        nombre: body.nombre,
        apellido: body.apellido,
        password: body.password,
        email: body.email
    })
    return usuarioACrear.dataValues
};

const deleteUser = async (idUsuario) => {
    const usuarioABorrar = await sequelize.models.Usuarios.findByPk(idUsuario);
    if (!usuarioABorrar){
        throw new Error("Error, no existe ese usuario") 
    }
    await usuarioABorrar.destroy()
};

const updateUser = async (idUsuario, body) => {
    const userToUpdate = await sequelize.models.Usuarios.findByPk(idUsuario) // busco por clave primaria
    if (!userToUpdate) { // si no existe tiro error
        throw new Error("Error, no existe ese usuario")
    }

    // si no viene algun atribuo en la solicitud, tiro un error
    if (!body.nombre || !body.apellido || !body.usuario || !body.password || !body.email) {
        throw new Error("Error, falta algun dato")
    }

    // si existe seteo sus datos como lo que me dio el body
    userToUpdate.nombre = body.nombre
    userToUpdate.apellido = body.apellido
    userToUpdate.usuario = body.usuario
    userToUpdate.password = body.password
    userToUpdate.email = body.email

    // espero a que guarde en base de datos
    await userToUpdate.save()
    return userToUpdate.dataValues
}

// obtener un usuario en funcion de una serie de filtros
const getByFilters = async (nombre, apellido) => {
    if (!nombre && !apellido) { // si no viene ningun filtro en el parametro, que retorne todos los usuarios
        return await getAll()
    }
    // declaro un objeto de condiciones donde voy a ir almacenando los filtros
    const whereConditions = {};

    // si viene el nombre en el parametro de la peticion, que me cree una condicion para buscar el nombre
    if (nombre) {
        whereConditions.nombre = { [Op.like]: `%${nombre}%` };
    }

    // si viene el apellido en el parametro de la peticion, que me cree una condicion para buscar el apellido
    if (apellido) {
        whereConditions.apellido = { [Op.like]: `%${apellido}%` };
    }

    // busco los usuarios en funcion de los filtros
    const usersFiltrados = await sequelize.models.Usuarios.findAll({
        where: whereConditions
    })

    // si no hay usuarios que cumplan con la condicion, que retorne un error
    if (usersFiltrados.length === 0) {
        throw new Error("No hay usuarios que cumplan con los filtros")
    }

    // si hay usuarios que complan con los filtros, que por cada uno de ellos retorne solamente sus atributos
    return usersFiltrados.map(user => user.dataValues)
}

const userService = {
    getAll,
    createUser,
    deleteUser,
    updateUser,
    getByFilters
}

export {userService}