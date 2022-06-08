//Controlador Users - Independiente de con que DB esté hecho
const TipoGasto = require("../models/tipoGasto");  // este es el que impacta y conoce la DB

const createTipoGasto = async (req, res, next) => {
    const nomTipoGasto = req.body.nomTipoGasto;

    if (!nomTipoGasto(email)) {
        res.statusCode = 400;
        res.send("nomTipoGasto cannot be empty");
        return;
    }
    // falta otras validarciones
    
   // Creo la entidad
    let newTipoGasto = new TipoGasto(
        req.body.nomTipoGasto
    );

};

module.exports = {
    createTipoGasto
}