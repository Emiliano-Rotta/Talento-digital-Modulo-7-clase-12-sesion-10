//ejercicios:

//Crear un sistema de Categorías y Productos donde una categoría puede tener múltiples productos. Implementar relaciones uno a muchos con Sequelize, asegurando que al eliminar una categoría se eliminen todos sus productos.
// Define los modelos Categoria y Producto.
// Configura la relación uno a muchos entre las tablas.
// Inserta una categoría con dos productos asociados.
// Elimina la categoría y verifica que los productos también hayan sido eliminados.

// npm init -y
// npm install sequelize sequelize-cli pg pg-hstore
// npx sequelize-cli init
// modificar los datos de config/config.json
// npx sequelize-cli db:create
// npx sequelize-cli model:generate --name Categoria --attributes nombre:string
// npx sequelize-cli model:generate --name Producto --attributes nombre:string,precio:decimal

//modificar models/poducto.js y models/categoria.js  models/index.js

//npx sequelize-cli db:migrate

// node index.js
