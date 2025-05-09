a = 1
b = 3

const suma2 = (a, b) => a + b
console.log(suma2(a, b))
// function suma(a, b) {
//     return a + b
// }

const persona = {
    nombre: "Juan",
    apellido: "Tevez",
    edad: 25,
    saludar: function () {
        console.log(`Hola, soy`, this.nombre);
    }
}

const persona2 = {
    nombre: "Marcos",
    apellido: "Rojo",
    edad: 25,
    saludar: function () {
        console.log(`Hola, soy`, this.nombre);
    }
}


const persona3 = {
    nombre: "Lionel",
    apellido: "Messi",
    edad: 35,
    saludar: function () {
        console.log(`Hola, soy`, this.nombre);
    }
}

const personas = [
    persona,
    persona2,
    persona3
]

const sinedad = personas.map(unicornio => {
    delete unicornio.edad
    return unicornio
})
console.log(sinedad);

