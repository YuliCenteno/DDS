// Este fragmento de código configura la conexión entre tu aplicación y una base de datos SQLite usando Sequelize como ORM. 
// ¿Qué hace este archivo completo? Configura la base de datos usando SQLite; Crea un archivo llamado `libros.db` en el disco; Deja lista una conexión que se usará en todo el backend para definir modelos y hacer operaciones CRUD.


// Importa la clase `Sequelize` desde la librería `sequelize`. `Sequelize` es el constructor que se usa para crear una instancia de conexión a la base de datos.
import { Sequelize } from "sequelize";

// new Sequelize({...}): crea una instancia de conexión.
// dialect: 'sqlite': le dice a Sequelize que vas a usar SQLite como motor de base de datos (en lugar de MySQL, PostgreSQL, etc.).
// storage: 'libros.db': especifica el archivo físico donde se guardarán los datos. Si el archivo libros.db no existe, Sequelize lo crea automáticamente al sincronizar los modelos.
const sequelize = new Sequelize({dialect: 'sqlite', storage: 'libros.db'});

// Exporta la instancia `sequelize` para que puedas importarla desde otros archivos, como `libro.js` o `index.js`, y definir modelos o ejecutar consultas.
export default sequelize