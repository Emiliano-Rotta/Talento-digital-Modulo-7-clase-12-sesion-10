// Relaciones Uno a Muchos en Sequelize

//Autor.hasMany(Libros) El autor tiene muchos libros
//Libros.belongsTo(Autor) el libro pertenece a un autor

//borrado en cascada
//El borrado en cascada ocurre cuando al eliminar un registro en la tabla "uno", automáticamente se eliminan todos los registros relacionados en la tabla "muchos".


//Autor.hasMany(Libros, { onDelete: 'CASCADE' }) El autor tiene muchos libros
//Libros.belongsTo(Autor) el libro pertenece a un autor

//----------------------------------------------
// Ejercicio de clase "Deportes en Chile"

//npm init -y

//npm install sequelize sequelize-cli pg pg-hstore

//npx sequelize-cli init

//ver las carpetas y archivos creados. config/config.json, migrations, models, seeders

//modificar config.json para que quede así:

// {
//     "development": {
//       "username": "postgres",
//       "password": "contraseña",
//       "database": "deportes_chile",
//       "host": "127.0.0.1",
//       "dialect": "postgres"
//     }
//   }
  

// crear base de datos npx sequelize-cli db:create

// crear las tablas, ver cambios en models y migrations 
// npx sequelize-cli model:generate --name Deporte --attributes nombre:string
// npx sequelize-cli model:generate --name Evento --attributes nombre:string,fecha:date,deporteId:integer

//modificar models/deporte.js y models/evento.js por lo que tienen estos archivos 

//ejecutar las migraciones.npx sequelize-cli db:migrate

//agregamos controllers/deportesController.js

//realizar las siguientes consultas

// const { crearDeporte, crearEvento, obtenerDeportesConEventos, eliminarDeporte } = require('./controllers/deportesController');

// const main = async () => {
//     try {
        // Crear deportes
        // const futbol = await crearDeporte('Fútbol');
        // const tenis = await crearDeporte('Tenis');

        // // Crear eventos para cada deporte
        // await crearEvento(futbol.id, 'Copa América', new Date('2024-06-10'));
        // await crearEvento(tenis.id, 'Roland Garros', new Date('2024-05-20'));

        // // Consultar deportes con eventos
        // const deportes = await obtenerDeportesConEventos();
        // console.log('Deportes con eventos:', JSON.stringify(deportes, null, 2));

        // Eliminar un deporte y verificar cascada
//         await eliminarDeporte(2);
//         const deportesPostEliminacion = await obtenerDeportesConEventos();
//         console.log('Deportes después de eliminación:', JSON.stringify(deportesPostEliminacion, null, 2));
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// main();


//Luego correr node index.js
//Luego correr en psql select * from "Deportes"; (con mayuscula porque la tabla esta en mayuscula y con doble comilla porque así lo exige sequelize)



//--------------------------------------------------
//ejercicios:

//Crear un sistema de Categorías y Productos donde una categoría puede tener múltiples productos. Implementar relaciones uno a muchos con Sequelize, asegurando que al eliminar una categoría se eliminen todos sus productos.
// Define los modelos Categoria y Producto.
// Configura la relación uno a muchos entre las tablas.
// Inserta una categoría con dos productos asociados.
// Elimina la categoría y verifica que los productos también hayan sido eliminados.

