//Controlador Users - Independiente de con que DB esté hecho
const Gasto = require("../models/gasto");  // este es el que impacta y conoce la DB

const createGasto = async (req, res, next) => {
    const nomGasto = req.body.nomGasto;
    const importe = req.body.importe;
    const fechaGasto = req.body.fechaGasto;
    const idTipoGasto = req.body.idTipoGasto;

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
    // valida que idGasto exista
    //..

   // falta otras validarciones
    // Creo la entidad
    let newGasto = new Gasto(
        req.body.nomGasto,
        req.body.importe,
        req.body.fechaGasto, 
        req.body.idTipoGasto
    );

};

module.exports = {
    createGasto
}