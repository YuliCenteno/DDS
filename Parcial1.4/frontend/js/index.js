const btnCargarPersonas = document.getElementById('btnCargarPersonas');
if (btnCargarPersonas) {
    btnCargarPersonas.addEventListener('click', () => cargarPersonas());
}

const obtenerPersonas = async function () {
    const nombre = document.getElementById('txtNombre').value;
    const apellido = document.getElementById('txtApellido').value;
    const orden = document.getElementById('lstOrden').value;

    const url = `http://localhost:3001/api/personas?nombre=${nombre}&apellido=${apellido}&orden=${orden}`;
    const resPersonas = await fetch(url);
    const personas = await resPersonas.json();
    return personas;
}

const eliminarPersona = async function (id) {
    if (window.confirm(`¿Desea eliminar esta persona?`)) {
        const url = `http://localhost:3001/api/personas/${id}`;
        const res= await fetch(url, { method: 'DELETE' });
        await cargarPersonas();
    }
}

const habilitarAlta = function(id){
    const divAgregar = document.getElementById('divAgregar');
    const lblNombre = `<label for="txtNuevoNombre">Nombre: </label>`
    const inputNombre = `<input type="text" name="txtNuevoNombre" id="txtNuevoNombre"></input> `
    const lblApellido = `<label for="txtNuevoApellido">Apellido: </label>`
    const inputApellido = `<input type="text" name="txtNuevoApellido" id="txtNuevoApellido"></input> `
    const lblEdad = `<label for="txtNuevaEdad">Edad: </label>`
    const inputEdad = `<input type="text" name="txtNuevaEdad" id="txtNuevaEdad"></input> `
    const btnAlta = `<button class="btn btn-info mt-2" onClick="agregarPersona()">Agregar</button>`
    divAgregar.innerHTML = `${lblNombre} ${inputNombre} <br>
        ${lblApellido} ${inputApellido} <br>
        ${lblEdad} ${inputEdad} <br>
        ${btnAlta}`
}

const agregarPersona = async function(){
    const divAgregar = document.getElementById('divAgregar');
    const nuevoNombre = document.getElementById('txtNuevoNombre').value;
    const nuevoApellido = document.getElementById('txtNuevoApellido').value;
    const nuevaEdad = document.getElementById('txtNuevaEdad').value;
    if (nuevoNombre && nuevoApellido && nuevaEdad && !isNaN(nuevaEdad)){
        const url = `http://localhost:3001/api/personas`;
        const body = {
            nombre: nuevoNombre,
            apellido: nuevoApellido,
            edad: nuevaEdad
        };

        const res = await fetch(url, 
            { 
                method: 'POST',
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(body)
            });

        await cargarPersonas();
        divAgregar.innerHTML = ``;
    }
}

const habilitarModificacion = function(id){
    const divModificar = document.getElementById('divModificar');
    const lblEdad = `<label for="txtEdad">Edad: </label>`
    const inputEdad = `<input type="text" name="txtEdad" id="txtEdad"></input> `
    const btnModificar = `<button class="btn btn-info" onClick="modificarPersona(${id})">Actualizar</button>`
    divModificar.innerHTML = `${lblEdad} ${inputEdad} ${btnModificar}`
}

const modificarPersona = async function(id){
    const divModificar = document.getElementById('divModificar');
    const nuevaEdad = document.getElementById('txtEdad').value;
    if (nuevaEdad && !isNaN(nuevaEdad)){
        const url = `http://localhost:3001/api/personas/${id}`;
        const body = {edad: nuevaEdad};

        const res = await fetch(url, 
            { 
                method: 'PUT',
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(body)
            });

        await cargarPersonas();
        divModificar.innerHTML = ``;
    }
}

const cargarPersonas = async function () {

    const personas = await obtenerPersonas();

    const listaPersonas = document.getElementById('listaPersonas');
    if (listaPersonas) {
        let cuerpo = ''

        personas.forEach(p => {
            let botonEliminar = `<td><button class="btn btn-danger" onClick="eliminarPersona(${p.id})">Eliminar</button></td>`
            let botonModificar = `<td><button class="btn btn-info" onClick="habilitarModificacion(${p.id})">Modificar</button></td>`
            cuerpo += `<tr>
                <td>${p.nombre}</td>
                <td>${p.apellido}</td>
                <td>${p.edad}</td>
                ${botonEliminar}
                ${botonModificar}
                </tr>`
        })


        const tabla = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${cuerpo}
                </tbody>
            </table>
        `

        listaPersonas.innerHTML = tabla;
    }
}