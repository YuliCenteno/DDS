import express from 'express';

const app = express();
const PORT = 3000;


app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})

