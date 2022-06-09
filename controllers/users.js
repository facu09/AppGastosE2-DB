//Controlador Users - Independiente de con que DB esté hecho
const User = require("../models/user");  // este es el que impacta y conoce la DB


const createUser = async (req, res, next) => {
    // console.log(req.body);
    // res.send(req.body) //esto tira json del json que venga en el body
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password
    const role = req.body.role;

    if (!emailIsValid(email)) {
        res.statusCode = 400;
        res.send("Email cannot be empty");
        return;
    }
    if (!roleIsValid(role)) {
        res.statusCode = 400;
        res.send("Role is not valid");
        return;
    }
    //faltan validaciones

  
    // Creo la entidad
    let newUser = new User(
        req.body.email,
        req.body.name,
        req.body.password,
        req.body.role, 
    );

    //HASTA ACÁ ANDUVO ESTAPROBADO
    try {
        // Salvando la nueva entidad
        newUser2 = await newUser.save();
        res.send(newMovie2);
      } catch (err) {
        res.statusCode = 500;
        res.send(err);
      }

    res.statusCode = 201;
    res.send(newUser);

};


const emailIsValid = (email) => {
    return email !== "";
};

const roleIsValid = (role) => {
    return ( role !== "" &&
            (role === "USER" || role === "ADMIN") )
};


module.exports = {
    createUser
}