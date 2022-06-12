//Controlador Users - Independiente de con que DB esté hecho
const TipoGasto = require("../models/tipoGasto");  // este es el que impacta y conoce la DB

const createTipoGasto = async (req, res, next) => {
    const nomTipoGasto = req.body.nomTipoGasto;

    if (!nomTipoGastoIsValid(nomTipoGasto)) {
        res.statusCode = 400;
        res.send("nomTipoGasto cannot be empty");
        return;
    }
    // falta otras validarciones
    console.log("paso por aca antes de crear newinstance")
   // Creo la entidad
    let newTipoGasto = new TipoGasto(
        req.body.nomTipoGasto
    );
    console.log("paso por aca despu de crear newinstance")
    try {
        // Salvando la nueva entidad
        newTipoGasto2 = await newTipoGasto.save();
        res.send(newTipoGasto2);
      } catch (err) {
        res.statusCode = 500;
        res.send(err);
      }

};


const nomTipoGastoIsValid = (nomTipoGasto) => {
    return nomTipoGasto !== "";
};

module.exports = {
    createTipoGasto
}