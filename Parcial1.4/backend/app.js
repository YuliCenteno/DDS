import express from 'express';
import {Op} from 'sequelize';
import cors from 'cors';
import sequelize from './db.js';
import Persona from './models/Persona.js';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Iniciar la base de datos
// sequelize.sync({force: true});
sequelize.sync();


// ej: GET /api/personas
app.get('/api/personas', async (req, res) => {

    // Orden (si no se especifica ninguno, será apellido)
    let campoOrden = req.query.orden || 'apellido';
    let expOrden = [[campoOrden, 'ASC']];

    // filtros
    let filtroNombre = `%${req.query.nombre?req.query.nombre:''}%`;
    let filtroApellido = `%${req.query.apellido?req.query.apellido:''}%`;

    let expWhere = {
        nombre: {[Op.like]: filtroNombre},
        apellido: {[Op.like]: filtroApellido},
    };
    

    // Parámetros
    let parameters = {
        where: expWhere,
        order:expOrden
    }

    const personas = await Persona.findAll(parameters);
    res.json(personas);
})

// Ej: GET /api/personas/25
app.get('/api/personas/:id', async (req, res)=>{
    const id = req.params.id;
    const persona = await Persona.findByPk(id);
    res.json(persona);
})

// POST /api/personas
app.post('/api/personas/', async (req, res) => {
    const datosPersona = req.body;
    const nuevaPersona = await Persona.create(datosPersona);
    res.status(201).json(nuevaPersona);
    // res.json(nuevaPersona);
})

// PUT /api/personas
app.put('/api/personas/:id', async (req, res) => {
    const datosPersona = req.body; 
    const id = req.params.id;
    const persona = await Persona.findByPk(id);
    if (persona){
        persona.edad = datosPersona.edad;
        await persona.save();
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
    
})

app.delete('/api/personas/:id', async (req, res) => {
    const id = req.params.id;
    const persona = await Persona.findByPk(id);
    if (persona){
        await persona.destroy();
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})



app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})

