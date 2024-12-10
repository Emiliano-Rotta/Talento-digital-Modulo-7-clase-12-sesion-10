const sequelize = require('./models/index');
const Categoria = require('./models/categoria');
const Producto = require('./models/producto');

const main = async () => {
  try {
    // Sincronizamos la base de datos
    await sequelize.sync({ force: true });
    console.log('Base de datos sincronizada.');

    // Insertamos categorías
    const categorias = await Categoria.bulkCreate([
      { nombre: 'Electrónica' },
      { nombre: 'Ropa' }
    ], { returning: true });

    console.log('Categorías insertadas:', categorias.map(c => c.nombre));

    // Insertamos productos asociados a las categorías
    const productos = await Producto.bulkCreate([
      { nombre: 'Televisor', precio: 500, CategoriaId: categorias[0].id },
      { nombre: 'Celular', precio: 300, CategoriaId: categorias[0].id },
      { nombre: 'Camisa', precio: 20, CategoriaId: categorias[1].id },
      { nombre: 'Pantalón', precio: 30, CategoriaId: categorias[1].id }
    ]);

    console.log('Productos insertados:', productos.map(p => p.nombre));

    // Consultamos las categorías con sus productos
    const categoriasConProductos = await Categoria.findAll({
      include: Producto
    });

    console.log('Categorías con productos:');
    console.log(JSON.stringify(categoriasConProductos, null, 2));

    // Eliminamos una categoría y verificamos el borrado en cascada
    await Categoria.destroy({ where: { id: categorias[0].id } });
    console.log(`Categoría "${categorias[0].nombre}" eliminada.`);

    const productosRestantes = await Producto.findAll();
    console.log('Productos restantes:');
    console.log(JSON.stringify(productosRestantes, null, 2));

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Cerramos la conexión
    await sequelize.close();
  }
};

main();
