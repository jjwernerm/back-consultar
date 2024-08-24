// Importa el modelo de datos 'productoModels', que se usará para interactuar con la base de datos.
import productoModels from '../models/productoModels.js';

// Define una función asíncrona que maneja la lógica para consultar un producto por su ID.
const consultarProducto = async (req, res) => {
  // Extrae el parámetro 'idproducto' de la solicitud (req).
  const { idproducto } = req.params;

  try {
    // Busca un producto en la base de datos que coincida con el 'idproducto'.
    const producto = await productoModels.findOne({ idproducto });

    // Si no se encuentra el producto, devuelve un error 400 con un mensaje personalizado.
    if (!producto) {
      return res.status(400).json({ msg: `El producto con el Id: ${idproducto} no existe` });
    }

    // Si el producto se encuentra, lo devuelve en formato JSON como respuesta.
    res.json(producto);
  } catch (error) {
    // Si ocurre un error en la solicitud, devuelve un error 500 y muestra un mensaje.
    res.status(500).json({ msg: 'Error en la solicitud: contactar al administrador' });
    console.log(`Error ${error.status || 500}: ${error.message}`);
  }
};

// Exporta la función 'consultarProducto' para que pueda ser utilizada en otras partes de la aplicación.
export { consultarProducto };