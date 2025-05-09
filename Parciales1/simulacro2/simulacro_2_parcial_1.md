# SIMULACRO DE EVALUACIÓN PARCIAL
## Sistema Gestión de Películas

**Objetivo:**  
Desarrollar una aplicación full stack básica para gestionar un listado de películas. La aplicación debe permitir visualizar un listado de todas las películas, filtrar por genero y título y editar el año de estreno.

**Tecnologías:**
- **Backend:** Node.js, Express.js, Sequelize con SQLite.
- **Frontend:** HTML5, Bootstrap 5, CSS, JavaScript (Fetch API).
- **IDE recomendado:** Visual Studio Code.

## Requisitos Funcionales

1. **Listado de Películas**  
   Al cargar la página debe mostrarse un listado de todas las películas en una tabla.

2. **Filtrado por genero y **  
   Debe haber un campo que permita filtrar películas por título (la partícula que se ingresa debe estar contenida en el título de la película) y otro que contenga los géneros en una lista desplegable. Los filtros son opcionales, de modo que la lista desplegable debería tener una opción: "Todos". Si ninguno de los filtros está definido, se muestran todas las películas.

3. **Modificar Película**  
   Debe haber un formulario para el nuevo año de una película previamente seleccionada y cuando se presiona el botón actualizar se debe actualizar el año de la película en cuestión y actualizar el listado. 

## Requisitos Técnicos

- Proyecto organizado en carpetas `backend/` y `frontend/`.
- Backend con:
  - Express y Sequelize.
  - Modelo `Pelicula` con campos `IdPelicula`, `Titulo`, `Director`, `Anio`, `Genero`.
  - Rutas API:
    - `GET /api/peliculas`
    - `GET /api/peliculas?titulo=redemp&genero=drama`
    - `PUT /api/peliculas`
- Frontend:
  - HTML con Bootstrap y JavaScript.
  - Uso de Fetch API para interactuar con el backend.
  - Manipulación del DOM para mostrar y actualizar el listado.

## Entrega

- Comprimir las carpetas `backend/` y `frontend/` en un `.zip` sin incluir `node_modules`.
- Nombrar el archivo como: `parcial_3k5_<legajo>.zip`.

## Evaluación

**Rúbrica (10 puntos):**
1. Listado inicial de películas (GET) – 1 punto
2. Filtrado por año (GET con query param) – 1 punto
3. Agregar nueva película (PUT) – 1 punto
4. Manejo de eventos y Fetch – 2 puntos
5. Manipulación del DOM – 2 puntos
6. Organización del código y uso de Bootstrap – 1 punto
7. Fundamentación oral – 2 puntos

**Aprobación:** 6 puntos como mínimo, incluyendo la implementación completa de al menos dos de las tres funcionalidades (listado, filtrado, modificar).
