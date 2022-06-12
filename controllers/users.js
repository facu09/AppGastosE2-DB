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
    if (!nameIsValid(name)) {
        res.statusCode = 400;
        res.send("Name cannot be empty");
        return;
    };
    if (!passwordIsValid(password)) {
        res.statusCode = 400;
        res.send("Password cannot be empty")
        return
    }
    if (!roleIsValid(role)) {
        res.statusCode = 400;
        res.send("Role is not valid");
        return;
    };
    if (await userAlreadyExists(email)) { 
        res.statusCode = 400;
        res.send("User with this eamil already exists.");
        return;
    };

  
    // Si llego acá es que valido bien ==> Creo la entidad
    let newUser = new User(
        req.body.email,
        req.body.name,
        req.body.password,
        req.body.role, 
    );

    try {
        // Salvando la nueva entidad
        newUser2 = await newUser.save();
        res.send(newUser2);
      } catch (err) {
        res.statusCode = 500;
        res.send(err);
      }

};

const findUserByEmail = async (req, res, next) => {
    if (req.query.email === "") {
        res.statusCode = 400;
        res.send("Eamil cannot be empty")
    }
    const users = await User.findByEmail(req.query.email);
    console.log("Response user", users);
    res.send(users)
}

const emailIsValid = (email) => {
    return email !== "";
};
const nameIsValid = (name) => {
    return name !==""; 
}
const passwordIsValid = (password) =>  {
    return password !== "";
}
const roleIsValid = (role) => {
    return ( role !== "" &&
            (role === "USER" || role === "ADMIN") )
};

const userAlreadyExists = async (email) => {
    const userByEamil = await User.findByEmail(email);
    // console.log("user encontrado:", userByEamil)
    return userByEamil ;
};

module.exports = {
    createUser,
    findUserByEmail,
};