// let a = 1;
// console.log(`Hola mundo, la variable vale: ${a}`);

const persona = {
     nombre: "juan",
     apellido: "lopez",
     edad: 19,
     informarEdad: function() {
         console.log(`La edad es: ${this.edad}`)
     }
 }

// console.log(persona)
// persona.informarEdad()

// persona.pais = "Argentina" //agrego un nuevo atributo
// console.log(persona)

// delete persona.pais //elimino atributos
// console.log(persona)

const personas = [
    persona,
    {
        nombre: "jorge",
        apellido: "lopez",
        edad: 29,
        informarEdad: function() {
            console.log(`La edad es: ${this.edad}`)
    }},
    {
        nombre: "jose",
        apellido: "llore",
        edad: 9,
        informarEdad: function() {
            console.log(`La edad es: ${this.edad}`)
        }}
]

//personas.map(persona => persona.informarEdad())

//const mayores25 = personas.filter(persona => persona.edad>25)
//console.log(mayores25)

const sinEdad = personas.map(persona => {
    delete persona.edad
    return persona
})
console.log(sinEdad)