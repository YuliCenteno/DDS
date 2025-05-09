import { Sequelize, DataTypes }  from 'sequelize';
import fs from 'fs';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../datos/peliculas.db',
});

// Model Pelicula
const Pelicula = sequelize.define('Pelicula', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    anio: {
        type: DataTypes.INTEGER,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

// Cargar peliculas desde JSON
const inicializarDesdeJSON = async (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const peliculas = JSON.parse(data);

        if (!Array.isArray(peliculas) || peliculas.length === 0) {
            throw new Error('Archivo JSON vacío o no válido.');
        }

        await sequelize.sync({ force: true }); 
        await Pelicula.bulkCreate(peliculas);
        console.log('Películas cargadas.');
    } catch (error) {
        console.error('Error cargando películas:', error.message);
    } finally {
        await sequelize.close();
    }
};

inicializarDesdeJSON('./seed/peliculas.json');