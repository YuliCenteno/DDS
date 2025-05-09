import express from "express"
import cors from "cors"
import { usuariosRouter } from "./routers/usuarios.routes.js";

const PORT = 4001

const app = express(); //inicializo una app express.
app.use(express.json());

app.get("/", (req, res) => {
    const htmlResponse = '<html><head><title>Backend</title></head><body>para probar</body></html>'
    res.send(htmlResponse)
})

app.listen(PORT, () => {//cuando cargue todo el proyecto en el puerto tal nos informe tal cosa.
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
})

const corsOptions = {
    origin: '*', //para permitir peticiones desde cualquier origen
};
app.use(cors(corsOptions)); //declaro politicas de 

// definir entrada a endpoints de usuarios
app.use("/usuarios", usuariosRouter.router
)