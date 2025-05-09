// he visto que varios me preguntan porque la estructura que se dio en mi curso, es diferente a la que le dieron
// en sus recpectivos cursos.

// Por eso, para despejarles dudas a todos, les elabore este archivito que funciona como una equivalencia entre
// lo que vimos aca en el curso, y lo que a uds les dieron esta semana del 07-05



// DIFERENCIAS
// 1: En la estructura que les dieron a uds, no existe el archivo index.js, si no que todo lo hace en el app.js
// la equivalencia entre lo que hicimos nosotros (ver videos), y lo de su curso, es simplemente lo de app.js y
// lo de index.js ponerlo todo en el app.js, lo del index.js iria por debajo de lo del app.js



// 2. En algunas estructuras no existen los routes, o models, o algunas de las carpetas que nosotros hemos visto.
// Y es que, en realidad, esa estructura que les enseñe para el curso, es simplemente para modular el codigo,
// el cual es un criterio de evaluacion que les tienen en cuenta.
// Una aclaracion importante, es que en el parcial, uds van a poder laburar como mas les plazca, es decir,
// si se sienten comodos con la estructura del profe, trabajen con eso, si se sienten comodos con mi estructrura,
// trabajen con esa. A los profes, honestamente, no les interesa como lo hagan, mientras ande, todo bien

// para hacer una ruta con la estructura de los profes, simplemente en su app.js, declaran el endpoint tal cual lo
// haciamos con los router, solo que en vez de usar router.metodo, usen app.metodo
// ejemplo:
// en mi app.js:

// app.get("/getAll", async (req, res) => {
//     try {
//         const response = await servicio.obtenerTodos()
//         return res.json(response)
//     } catch (error) {
//         return res.status(404).json({ error: "Error" })
//     }
// })

// app.post("/crear", async (req, res) => {
//     try {
//         const rdo = await servicio.create(req.body)
//         return res.json(rdo)
//     } catch (error) {
//         return res.status(500).json({ error: "Error" })
//     }
// })

// app.put("/modificar", async (req, res) => {
//     const { id } = req.query
//     try {
//         const rdo = await servicio.update(id, req.body)
//         return res.json(rdo)
//     } catch (error) {
//         return res.status(500).json({ error: "Error" })
//     }
// })

// app.delete("/borrar", async (req, res) => {
//     const { id } = req.query
//     try {
//         const rdo = await servicio.borrar(id)
//         return res.json(rdo)
//     } catch (error) {
//         return res.status(500).json({ error: "Error" })
//     }
// })

// en mi estructura, lo que haciamos en el app.js es:
//app.use("/entrada", Entidadrouter.router)

// y teniamos un archivito entidad.routes.js, en donde teniamos algo como esto:
// router.get("/getAll", async (req, res) => {
//     try {
//         const response = await servicio.obtenerTodos()
//         return res.json(response)
//     } catch (error) {
//         return res.status(404).json({ error: "Error" })
//     }
// })

// router.post("/crear", async (req, res) => {
//     try {
//         const rdo = await servicio.create(req.body)
//         return res.json(rdo)
//     } catch (error) {
//         return res.status(500).json({ error: "Error" })
//     }
// })

// router.put("/modificar", async (req, res) => {
//     const { id } = req.query
//     try {
//         const rdo = await servicio.update(id, req.body)
//         return res.json(rdo)
//     } catch (error) {
//         return res.status(500).json({ error: "Error" })
//     }
// })

// router.delete("/borrar", async (req, res) => {
//     const { id } = req.query
//     try {
//         const rdo = await servicio.borrar(id)
//         return res.json(rdo)
//     } catch (error) {
//         return res.status(500).json({ error: "Error" })
//     }
// })

// En otras palabras, el codigo hace exactamente LO MISMO, lo unico que cambia, es la localizacion del archivo.
// en la estructura de la mayoria de cursos lo hacen en un index.js directamente
// en la estructura que vimos nosotros lo hacemos en un archivito de rutas
// No es que la estructura mia este bien y la de los profes mal o al reves, son dos formas diferentes de hacer lo mismo
// De nuevo, hagan la forma con la ue uds se sientan mas tranquilos y comodos



// 3. Bases de datos en memoria: En el curso, vimos bases de datos en disco, y en el cursado les han pedido
// bases de datos en memoria, para crear una base de datos en memoria, se lleva a cabo de la siguiente forma:

// en el app.js
// // Configura la conexión Sequelize (base de datos SQLite en memoria)
// const sequelize = new Sequelize('sqlite::memory:');

// // Define el modelo Museo
// const Museo = sequelize.define('Museo', {
//     nombre: DataTypes.STRING,
//     ubicacion: DataTypes.STRING,
//     exposiciones: DataTypes.STRING,
//     horarios: DataTypes.STRING,
//     precioEntrada: DataTypes.STRING
// }, { timestamps: false });

// // Inicializa la base de datos e inserta datos de muestra
// async function inicializarBaseDeDatos() {
//     await sequelize.sync({ force: true });
//     await Museo.bulkCreate([
//         { nombre: 'Museo del Prado', ubicacion: 'Madrid, España', exposiciones: 'Clásicos del Renacimiento', horarios: '09:00 - 18:00', precioEntrada: '15€' },
//         { nombre: 'Louvre', ubicacion: 'París, Francia', exposiciones: 'Arte y Cultura Egipcia', horarios: '09:00 - 20:00', precioEntrada: '17€' },
//         { nombre: 'Museo de Arte Moderno de Buenos Aires', ubicacion: 'Buenos Aires, Argentina', exposiciones: 'Arte Contemporáneo Latinoamericano', horarios: '10:00 - 19:00', precioEntrada: '500 ARS' },
//         { nombre: 'Museo Nacional de Bellas Artes', ubicacion: 'Buenos Aires, Argentina', exposiciones: 'Arte Europeo y Argentino', horarios: '11:00 - 20:00', precioEntrada: 'Gratis' },
//         { nombre: 'MALBA', ubicacion: 'Buenos Aires, Argentina', exposiciones: 'Frida Kahlo y Diego Rivera', horarios: '12:00 - 20:00', precioEntrada: '630 ARS' },
//         { nombre: 'Museo de Arte Tigre', ubicacion: 'Tigre, Buenos Aires, Argentina', exposiciones: 'Arte Argentino del Siglo XIX', horarios: '10:00 - 18:00', precioEntrada: '240 ARS' },
//         { nombre: 'Smithsonian', ubicacion: 'Washington D.C., USA', exposiciones: 'Historia Natural', horarios: '10:00 - 17:30', precioEntrada: 'Gratis' },
//         { nombre: 'Museo Egipcio de Turín', ubicacion: 'Turín, Italia', exposiciones: 'Artefactos del Antiguo Egipto', horarios: '09:00 - 19:00', precioEntrada: '15€' },
//         { nombre: 'Museo Van Gogh', ubicacion: 'Ámsterdam, Países Bajos', exposiciones: 'Obra de Vincent van Gogh', horarios: '09:00 - 18:00', precioEntrada: '19€' },
//         { nombre: 'Museo Guggenheim', ubicacion: 'Bilbao, España', exposiciones: 'Arte Moderno y Contemporáneo', horarios: '10:00 - 20:00', precioEntrada: '13€' },
//     ]);
// }

// y a la hora de levantar la API:
// inicializarBaseDeDatos().then(() => {
//     app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
// });


