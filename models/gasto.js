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

  static async GastoAlreadyExist (nomGasto,
    importe, fechaGasto, idTipoGasto, idUser) {
    console.log("nomgasto ==>", nomGasto, " id Us:", idUser )
    try {
      const gastosFinded = await prisma.Gastos.findMany({
        where: {
          nomGasto: nomGasto,
          importe: importe,
          fechaGasto: new Date(fechaGasto),
          tipoGastoId: idTipoGasto,
          userId: idUser,
        },
      })
      console.log("gastos finded ", gastosFinded.length, "; " ,gastosFinded )
      if (gastosFinded.length > 0) {
        console.log ("uuuuuuuu Sale por true hay")
        return true
      } else {
        console.log ("uuuuuuuu Sale por faseeeee no hay")
        return false
      }
      
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