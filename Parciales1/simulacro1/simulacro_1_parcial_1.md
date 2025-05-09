# SIMULACRO DE EVALUACIÓN PARCIAL (ALTERNATIVA)
## Sistema Gestión de Películas

**Objetivo:**  
Desarrollar una aplicación full stack básica para gestionar un listado de películas. La aplicación debe permitir visualizar un listado de todas las películas, filtrar por año de estreno y agregar nuevas películas.

**Tecnologías:**
- **Backend:** Node.js, Express.js, Sequelize con SQLite.
- **Frontend:** HTML5, Bootstrap 5, CSS, JavaScript (Fetch API).
- **IDE recomendado:** Visual Studio Code.

## Requisitos Funcionales

1. **Listado de Películas**  
   Al cargar la página debe mostrarse un listado de todas las películas en una tabla.

2. **Filtrado por Año de Estreno**  
   Debe haber un campo que permita filtrar películas por el año de estreno. Si el campo está vacío, se muestran todas las películas.

3. **Agregar Nueva Película**  
   Debe haber un formulario para ingresar título, director y año de estreno. Al enviarlo, se agrega una nueva película al listado que debe cargarse ya actualizado. 

## Requisitos Técnicos

- Proyecto organizado en carpetas `backend/` y `frontend/`.
- Backend con:
  - Express y Sequelize.
  - Modelo `Pelicula` con campos `IdPelicula`, `Titulo`, `Director`, `Anio`, `Genero`.
  - Rutas API:
    - `GET /api/peliculas`
    - `GET /api/peliculas?anio=2020`
    - `POST /api/peliculas`
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
3. Agregar nueva película (POST) – 1 punto
4. Manejo de eventos y Fetch – 2 puntos
5. Manipulación del DOM – 2 puntos
6. Organización del código y uso de Bootstrap – 1 punto
7. Fundamentación oral – 2 puntos

**Aprobación:** 6 puntos como mínimo, incluyendo la implementación completa de al menos dos de las tres funcionalidades (listado, filtrado, agregar).
