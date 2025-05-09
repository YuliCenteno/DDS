# Guía de cambios 

## 1. Órden y filtros

Vamos a agregar órden y filtros al listado de personas. Comenzaremos por el backend y luego implementamos estos cambios en el frontend.

### 1.1. Primero especificamos algunas urls de las requests en el archivo .http que usamos para testear la API 

Vamos a considerar que podemos filtrar por nombre y apellido usando un patrón (no comparando por `=` sino por `like`). Además los filtros son opcionales: si no se especifican o se especifica uno solo tiene que omitir el/los filtros no especificados.

El órden puede ser por apellido o edad.

```http
###
GET http://localhost:{{port}}/api/personas?apellido=pe&nombre=ma&orden=apellido
###
GET http://localhost:{{port}}/api/personas?apellido=pe&orden=apellido
###
GET http://localhost:{{port}}/api/personas?orden=edad
```

### 1.2. Ahora modificamos el método correspondiente en el backend. Primero implementamos el órden.

```javascript
// ej: GET /api/personas
app.get('/api/personas', async (req, res) => {
    // Orden
    let campoOrden = req.query.orden || 'apellido';
    let expOrden = [[campoOrden, 'ASC']];

    // Parámetros
    let parameters = {order:expOrden}

    const personas = await Persona.findAll(parameters);
    res.json(personas);
})
```

### 1.3. Y luego agregamos los filtros en la expresión `where`.

Noten que tenemos que importar `Op` de `sequelize`.

```javascript
import {Op} from 'sequelize';
```

y luego completamos la lógica para aplicar los filtros y el órden en la query

```javascript
// ej: GET /api/personas
app.get('/api/personas', async (req, res) => {

    // Orden (si no se especifica ninguno, será apellido)
    let campoOrden = req.query.orden || 'apellido';
    let expOrden = [[campoOrden, 'ASC']];

    // filtros
    let filtroNombre = `%${req.query.nombre?req.query.nombre:''}%`;
    let filtroApellido = `%${req.query.apellido?req.query.apellido:''}%`;

    let expWhere = {
        nombre: {[Op.like]: filtroNombre},
        apellido: {[Op.like]: filtroApellido},
    };
    

    // Parámetros
    let parameters = {
        where: expWhere,
        order:expOrden
    }

    const personas = await Persona.findAll(parameters);
    res.json(personas);
})

```

Es importante leer la documentación de *Sequelize* para entender este código. Por ejemplo: [Model Querying - Basics](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)

### 1.4. Finalmente modificamos el frontend.

Agregamos lo siguiente en el `index.html` 

```html
...
        <div class="row">
            <div class="col">
                <label for="txtNombre">Nombre</label>
                <input type="text" name="txtNombre" id="txtNombre">
            </div>
            <div class="col">
                <label for="txtApellido">Apellido</label>
                <input type="text" name="txtApellido" id="txtApellido">
            </div>
            <div class="col">
                <label for="lstOrden">Orden</label>
                <select name="lstOrden" id="lstOrden">
                    <option value="apellido">Apellido</option>
                    <option value="edad">Edad</option>
                </select>
            </div>
            <div class="col">
                <button class="btn btn-success" id="btnCargarPersonas">Cargar Personas</button>
            </div>
        </div>
        ...

```

Y el código correspondiente en el archivo `js/index.js`

```javascript
const obtenerPersonas = async function(){
    const nombre = document.getElementById('txtNombre').value;
    const apellido = document.getElementById('txtApellido').value;
    const orden = document.getElementById('lstOrden').value;

    const url = `http://localhost:3001/api/personas?nombre=${nombre}&apellido=${apellido}&orden=${orden}`;
    const resPersonas = await fetch(url);
    const personas = await resPersonas.json();
    return personas;
}
```

## 2. Implementar la acción de eliminar una persona

Ya implementamos el backend oportunamente, por lo tanto, todo el trabajo lo tenemos que hacer en el backend

### 2.1. Inicialmente agregamos un botón a cada fila de la tabla.

Para invocar la acción de eliminar pasando el id como parámetro en la función que renderiza la tabla agregamos:


```javascript
const cargarPersonas = async function(){

    const personas = await obtenerPersonas();
    
    const listaPersonas = document.getElementById('listaPersonas');
    if(listaPersonas){
        let cuerpo = ''

        personas.forEach(p => {
            let botonEliminar = `<td><button class="btn btn-danger" onClick="eliminarPersona(${p.id})">Eliminar</button></td>`
            cuerpo += `<tr><td>${p.nombre}</td><td>${p.apellido}</td><td>${p.edad}</td>${botonEliminar}</tr>`
        })

        
        const tabla = `
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${cuerpo}
                </tbody>
            </table>
        `

        listaPersonas.innerHTML= tabla;
    }
}
```

### 2.2. Agregamos la función `eliminarPersona()`.

```javascript
const eliminarPersona = async function (id) {
    if (window.confirm(`¿Desea eliminar esta persona?`)) {
        const url = `http://localhost:3001/api/personas/${id}`;
        const resPersonas = await fetch(url, { method: 'DELETE' });
        await cargarPersonas();
    }
}
```

## 3. Modificación

Para la modificación o actualización, vamos a permitir que se actualice la edad de una persona

### 3.1. Primero vamos a agregar el botón modificar en todas las filas

```javascript
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
```

### 3.2. Cuando se presione el botón modificar vamos a permitir que se ingrese el nuevo valor para el campo edad.

En el `index.html` vamos a agregar un div en donde vamos a poner el dialogo

```html
        <div class="row mb-3">
            <div class="col">
                <div id="divModificar">

                </div>
            </div>
        </div>
```

y vamos a agregar el método para que se rendericen el input y el botón que nos permiten ingresar la edad en `js/index.js`

```javascript
const habilitarModificacion = function(id){
    const divModificar = document.getElementById('divModificar');
    const lblEdad = `<label for="">Edad: </label>`
    const inputEdad = `<input type="text" name="txtEdad" id="txtEdad"></input> `
    const btnModificar = `<button class="btn btn-info" onClick="modificarPersona(${id})">Actualizar</button>`
    divModificar.innerHTML = `${lblEdad} ${inputEdad} ${btnModificar}`
}
```

### 3.3. Finalmente agregamos el método que actualiza los datos consumiendo la API

```javascript
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
```

## 4. Alta

La implementación del alta guarda similitudes con la modificación. 

### 4.1. En el `index.html` vamos a agregar un div y un botón.

```html
            <div class="col">
                <button class="btn btn-info" id="btnAgregarPersona" onclick="habilitarAlta()">Agregar Nueva Persona</button>
            </div>

            ....

        <div class="row mb-3">
            <div class="col">
                <div id="divAgregar">

                </div>
            </div>
        </div>
```

### 4.2. El método `habilitarAlta()` renderiza los campos de input y el botón en el div.

```javascript
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
```

### 4.3. Y `agregarPersona()` invoca la API con el método POST para insertar la nueva persona.

No hay necesidad de modificar el backend

```javascript
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
```
