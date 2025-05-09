import express from 'express';
import sequelize from '../../simulacro1/backend/db.js';
import Pelicula from './models/Pelicula.js';

const app = express();
const PORT = 3000;


// Habilitar JSON
app.use(express.json());


// Visualizar un listado de todas las películas
app.get('/api/peliculas', async (req, res) => {
    try {
        const peliculas = await Pelicula.findAll();
        res.json(peliculas);
    } catch (err) {
        console.error('Error al obtener películas', err);
        res.status(500).json({error: 'Error interno del servidor'})
    }
})


// Filtrar por año de estreno
app.get('/api/peliculas', async (req, res) => {
    // Filtrar
    const filtroAnio = req.query.anio;
    const expWhere = {
        anio: {[Op.like]: filtroAnio}
    }
})


app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
