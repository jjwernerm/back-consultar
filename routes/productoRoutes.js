// Importa el módulo 'express' para usar las funcionalidades del framework Express.
import express from 'express';

// Crea una nueva instancia de Router para manejar las rutas en el servidor.
const router = express.Router();

// Importa la función 'consultarProducto' desde el controlador de productos.
import { consultarProducto } from '../controllers/productoControllers.js';

// Define una ruta GET que escucha en '/consultar/:idproducto'. 
// ':idproducto' es un parámetro dinámico que se captura en el controlador 'consultarProducto'.
router.get('/consultar/:idproducto', consultarProducto);

// Exporta el router para que pueda ser utilizado en otras partes de la aplicación.
export default router;