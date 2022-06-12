const express = require("express");
const tiposGastosController = require("../controllers/tiposGastos");
const router = express.Router();

console.log("antes de entrar al route /api/tipos")

// Establecido por defecto x el app.js:  
//  const usersRouter = require("./routes/tiposGastos") 
//     -->  /api/tiposGasto 
router.post("/", tiposGastosController.createTipoGasto);
// Esto genera un alta en DB.PostgreSQL en entidad/Tabla TipoGasto



// otras rutas de tiposGastos ..



module.exports = router;