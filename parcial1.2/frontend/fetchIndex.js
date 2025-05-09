// cuando se cargue por completo el index.html, se ejecuta esta funcion
document.addEventListener("DOMContentLoaded", function () {
    fetchData(); // traigo los datos de la tabla
    const form = document.getElementById('filterForm'); // capturo el formulario
    // aca se detiene hasta que pase algo 

    // cuando el tipo pulse ENVIAR, se ejecuta todo lo de aca adentro. Esto es para el getByFilters
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // se usa en formularios para evitar que se recargue la pagina

        // hago una peticion a la api
        try {
            // form.nombre.value es lo que ingreso el usuario en el input nombre
            // form.apellido.value es lo ue ingreso el usuario en el input apellido
            const response = await fetch(`http://localhost:4001/usuarios/byFilters?nombre=${form.nombre.value}&apellido=${form.apellido.value}`)
            const data = await response.json();

            const tbody = document.getElementById("tablita") // capturo la tabla
            tbody.innerHTML = ''; // Limpiar filas existentes antes de agregar nuevas
            data.forEach(user => { // recorro el array creando filas
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.nombre}</td>
                    <td>${user.apellido}</td>
                    <td>${user.usuario}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="delete" data-id="${user.id}" style="margin: 4px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                        </button>
                        <button class="update" data-id="${user.id}" style="margin: 4px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                            </svg>
                        </button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        } catch (error) {
            console.log(error);
        }
    })

})

async function fetchData() {
    try {
        const response = await fetch('http://localhost:4001/usuarios/obtenerTodos') // hago la peticion al endpoint
        const data = await response.json(); // parseo las respuestas a un array
        const tbody = document.getElementById('tablita'); // elijo el cuerpo de la tabla
        tbody.innerHTML = ''; // Limpiar filas existentes antes de agregar nuevas
        data.forEach(user => { // recorro el array creando filas
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.usuario}</td>
                <td>${user.email}</td>
                <td>
                    <button class="delete" data-id="${user.id}" style="margin: 4px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg>
                    </button>
                    <button class="update" data-id="${user.id}" style="margin: 4px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                        </svg>
                    </button>
                </td>
            `;
            tbody.appendChild(row);

            // Event listener para los botones de borrar
            const botonBorrar = document.querySelectorAll('.delete'); // capturo todos los botones de borrar
            botonBorrar.forEach(boton => { // por cada elemento de borrar, a cada uno crearle un addEventListener
                boton.addEventListener('click', async function () {
                    const id = boton.dataset.id; // declaro el id del usuario, esto viene de que cuando creamos los botones le pusimos ese data-id
                    try {
                        const response = await fetch(`http://localhost:4001/usuarios/usuarioABorrar?id=${id}`, { // hago la peticion al endpoint para el borrado
                            method: 'DELETE'
                        });
                        if (!response.ok) { // si no lo logro borrar
                            throw new Error('Error al borrar el usuario');
                        }
                        // Si el borrado es exitoso, volver a cargar la tabla
                        fetchData();
                    } catch (error) {
                        console.error(error);
                    }
                });
            });

            // Añadir evento de clic a los botones de actualización, cada boton, si le hago click, me redirecciona
            // a una pagina de la siguiente forma: actualizacionUsuario.html?id=1
            const updateButtons = document.querySelectorAll('.update'); // capturo todos los botones de actualizar
            updateButtons.forEach(button => { // por cada boton actualizar, declaro un evento de forma individual
                button.addEventListener('click', () => {
                    const userId = button.dataset.id; // declaro el id del usuario, esto viene de que cuando creamos los botones le pusimos ese data-id
                    window.location.href = `actualizacionUsuario.html?id=${userId}`;
                });
            });
        });

    } catch (error) {
        console.error(error);
    }
}