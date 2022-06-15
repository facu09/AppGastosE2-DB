//Controlador Users - Independiente de con que DB esté hecho
const Gasto = require("../models/gasto");  // este es el que impacta y conoce la DB
const TipoGasto = require("../models/tipoGasto");

const createGasto = async (req, res, next) => {
    const nomGasto = req.body.nomGasto;
    const importe = req.body.importe;
    const fechaGasto = req.body.fechaGasto;
    const idTipoGasto = req.body.idTipoGasto;
    const idUser = req.body.UserId;

    if (!nomGastoIsValid(nomGasto)) {
        res.statusCode = 400;
        res.send("nomGasto cannot be empty");
        return;
    }
    if (!importeIsValid(importe)) {
        res.statusCode = 400;
        res.send("importe cannot be empty");
        return;
    }
    //otras validaciones
    // valida que idTipoGasto exista
    //..

   // falta otras validarciones
    // Creo la entidad
    let newGasto = new Gasto(
        req.body.nomGasto,
        req.body.importe,
        req.body.fechaGasto, 
        req.body.idTipoGasto,
        req.body.UserId
    );

    try {
        // Salvando la nueva entidad
        newGasto2 = await newGasto.save();
        res.statusCode = 200;
        res.send(newGasto2);
      } catch (err) {
        res.statusCode = 500;
        res.send(err);
      }
};

const getAllGastos = async (req, res, next) => {
    const gastos = await Gasto.getAllGastos();
    // console.log("Response user", users);
    res.send(gastos)
}

// Validaciones ----------------------------------------

const nomGastoIsValid = (nomGasto) => {
    return nomGasto !== "";
};

const importeIsValid = (importe) => {
    return( importe && importe>0)
}

const idTipoGastoDosentExist = async (id) => {
    const tipoGastoById = await TipoGasto.findById(id);
    console.log ("Encontrado ", tipoGastoById)
    if (tipoGastoById) {
        return false
    }else {
        return true
    } 
}

module.exports = {
    createGasto,
    getAllGastos,
}