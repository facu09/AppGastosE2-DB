const prisma = require("../utils/client");

const { v4: uuidv4 } = require("uuid");

class Gasto {
  constructor(nomGasto, importe, fechaGasto, idTipoGasto, idUser, id) {
    this.id = id ? id : uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    this.nomGasto = nomGasto;
    this.importe = importe;
    this.fechaGasto = fechaGasto ? fechaGasto : now();
    this.idTipoGasto = idTipoGasto; 
    this.idUser = idUser;   
  }

  async save() {
    try {
      const newGasto = await prisma.Gastos.create({
        data: {
          nomGasto: this.nomGasto,
          importe: +this.importe,
          fechaGasto: new Date(this.fechaGasto),
          tipoGastoId: +this.idTipoGasto,
          userId: +this.idUser,
        },
      });
      // console.log (newGasto)
      return newGasto;
    
    } catch (err) {
      return err;
    }
  }

  static async findByidTipoGasto(idTipoGasto) {
    try {
      // console.log("el mail recibido en findByEmail", email)
      const gastosfinded = await prisma.Gastos.findMany({
        where: {
          idTipoGasto: idTipoGasto,
        },
      })
      // console.log("el userfinded:" ,userfinded)
      return gastosfinded;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
  }

  static async getAllGastos (){
    try {
      const allGastos = await prisma.Gastos.findMany()
      return allGastos
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }   
  }

}//cirra el User Class

module.exports = Gasto;