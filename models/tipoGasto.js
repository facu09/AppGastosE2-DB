const prisma = require("../utils/client");

const { v4: uuidv4 } = require("uuid");

class TipoGasto {
    constructor(nomTipoGasto, id) {
      this.id = id ? id : uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
      this.nomTipoGasto = nomTipoGasto;
    }

  //Acá va el Alta en la DB
  async save() {
    try {
        console.log (this.id + ", " +  this.nomTipoGasto + ".")
        await prisma.TipoGasto.create({
            data: {
                nomTipoGasto: this.nomTipoGasto,
            },
        });
        console.log (this)
        return this; //devuelvo la instancia de TipoGasto que se construyó
    } catch (err){
        return "Error e models/tipoGastojs" + err;
    }
  }

  
}


module.exports = TipoGasto;