const prisma = require("../utils/client");

const { v4: uuidv4 } = require("uuid");

class Gasto {
    constructor(nomGato, importe, fechaGasto, idTipoGasto, idUser) {
      this.id = id.length > 0 ? id : uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
      this.nomGasto = nomGasto;
      this.importe = importe;
      this.fechaGasto = fechaGasto ? fechaGasto : now();
      this.idTipoGasto = idTipoGasto; 
      this.idUser = idUser; 
      
      //1-Varios VC:
    }

}

module.exports = Gasto;