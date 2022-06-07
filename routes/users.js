const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

// Establecido por defecto x el app.ja:  
//  const usersRouter = require("./routes/users") 
//        -->  /api/users
router.post("/", usersController.createUser);

// otras rutas ..



module.exports = router;