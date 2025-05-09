document.addEventListener("DOMContentLoaded", async function () {
    const botonDelEjemplo = document.querySelector("button")

    botonDelEjemplo.addEventListener("click", function () {
        alert("HOLA MUNDOOOOOOOO")
    })

    const data = [
        {
            id: 1,
            nombre: "Juan"
        },
        {
            id: 2,
            nombre: "Maria"
        },
        {
            id: 3,
            nombre: "Esteban"
        }
    ]

    const tablaEjemplo = document.getElementById("tablaEjemploDOM")
    tablaEjemplo.innerHTML = '';
    data.forEach((elemento) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${elemento.id}</td>
                <td>${elemento.nombre}</td>
        `
        tablaEjemplo.appendChild(row)
    })

})