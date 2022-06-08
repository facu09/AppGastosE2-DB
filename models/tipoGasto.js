const prisma = require("../utils/client");

const { v4: uuidv4 } = require("uuid");

class TipoGasto {
    constructor(nomTipoGasto, id) {
      this.id = id.length > 0 ? id : uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
      this.nomTipoGasto = nomTipoGasto;
    }

}

module.exports = TipoGasto;