//Controlador Users - Independiente de con que DB esté hecho
const User = require("../models/user");  // este es el que impacta y conoce la DB

const createUser = async (req, res, next) => {
    const email = req.body.email;
    const name = req.body.name;
    const role = req.body.role;

    if (!emailIsValid(email)) {
        res.statusCode = 400;
        res.send("Email cannot be empty");
        return;
    }
   // falta otras validarciones
    // Creo la entidad
    let newUser = new User(
        req.body.email,
        req.body.name,
        req.body.role
    );

};

module.exports = {
    createUser
}