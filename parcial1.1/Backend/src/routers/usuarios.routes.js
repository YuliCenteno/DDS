import express from "express";
import { userService } from "../services/usuarios.services.js";

const router = express.Router(); // en este router defino ENDPOINTS
router.get("/obtenerTodos", async (req, res) => {
    try {
        const usuarios = await userService.getAll() // llamo al servicio de obtener todos los usuarios
        res.json(usuarios)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Oops, algo salio mal" })
    }
})
// PATH PARAMS
router.get("/obtenerPorId/:id", async (req, res) => {
    try {
        const usuario = await userService.getById(req.params.id)
        res.json(usuario)
    } catch (error) {
        res.status(500).json({error: "Oops, algo salio mal"})
    }
})

router.post("/crearUsuario", async (req, res) => {
    try {
        const usuario = await userService.createUser(req.body)
        res.json(usuario)
    } catch (error) {
        res.status(500).json({error: "Oops, algo salio mal"})
    }
})

// QUERY PARAM
router.delete("/usuarioABorrar", async (req, res) =>{
    const {id} = req.query
    try {
        const response = await userService.deleteUser(id)
        return res.json(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.put("/modificar", async (req, res) => {
    const { id } = req.query
    try {
        const response = await usersServices.updateUser(id, req.body)
        return res.json(response)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

router.get("/byFilters", async (req, res) => {
    try {
        const response = await usersServices.getByFilters(req.query.nombre, req.query.apellido)
        return res.json(response)
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
})

const usuariosRouter = {
    router
}

export {usuariosRouter};