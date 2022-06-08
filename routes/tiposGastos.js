const express = require("express");
const tiposGastosController = require("../controllers/tiposGastos");
const router = express.Router();

// Establecido por defecto x el app.js:  
//  const usersRouter = require("./routes/users") 
//        -->  /api/tipos
router.post("/", tiposGastosController.createTipoGasto);

// otras rutas de tiposGastos ..



module.exports = router;