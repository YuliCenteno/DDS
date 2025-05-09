document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registroForm'); // obtengo el formulario
    const mensaje = document.getElementById('mensaje'); // obtengo el p

    // cuando el usuario pulse enviar, ejecutar esta funcion
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // evita que se recargue la pagina al enviar el formulario

        // declaro los datos del formulario de creacion
        const data = {
            nombre: form.nombre.value,
            apellido: form.apellido.value,
            usuario: form.usuario.value,
            password: form.password.value,
            email: form.email.value
        }

        try {
            const response = await fetch('http://localhost:4001/usuarios/crearUsuario', { // envio los datos, parseandolos a un JSON
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // indicar que el body de mi peticion debe ser un objeto en formato JSON
                },
                body: JSON.stringify(data) // Convertir los datos a JSON antes de enviarlos
            });

            const res = await response.json(); // La respuesta la convierto a array

            if (response.ok) {
                mensaje.textContent = "El usuario se creó exitosamente";
            } else {
                throw new Error(res.error || 'Ha habido un error imprevisto');
            }

        } catch (error) {
            mensaje.textContent = error.message;
        }
    });
})