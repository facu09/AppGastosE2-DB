const prisma = require("../utils/client");

const { v4: uuidv4 } = require("uuid");

class User {
  constructor(email, name, password, role, id) {
    // ell uuid te hace falta por algo? si lo envias a la db sin ID te lo genera no nnecesitarias tenerlo al principio no?
    this.id = id ? id : uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    this.email = email;
    this.name = name ? name : "";  //si fuese opcional
    this.password = password;
    this.role = role ? role : "USER";
  }

  // Grava la Entidad en db
  async save() {
    try {
      console.log (this.email + ", " + this.name + ", " + this.password + ", " + this.role )
      await prisma.User.create({
        data: {
          email: this.email,
          name: this.name,
          password: this.password,
          role: this.role,
        },
      });
      console.log (this)
      return this;
    
    } catch (err) {
      return err;
    }
  }

  static async findByEmail(email) {
    try {
      // console.log("el mail recibido en findByEmail", email)
      const userfinded = await prisma.User.findUnique({
        where: {
          email: email,
        },
      })
      // console.log("el userfinded:" ,userfinded)
      return userfinded;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
  }

  static async findByIdUser(id) {
    try {
      // console.log("el mail recibido en findByEmail", email)
      const userfinded = await prisma.User.findUnique({
        where: {
          id: +id,
        },
      })
      // console.log("el userfinded:" ,userfinded)
      return userfinded;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }   
  }

  static async getAllUsers (){
    try {
      const allUsers = await prisma.User.findMany()
      return allUsers
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }   
  }

  static async uptadeByEmail (email, name, password, role) {
    try {
      const updatedUser = await prisma.User.update({
        where: {
          email: email,
        },
        data: {
          name: name, 
          password: password,
          role, role,
        },
      })
      // console.log (updatedUser)
      return updatedUser

    } catch (error) {
      console.log(error);
      throw new Error(error);
    }   
  }

  static async deleteByEmail (email) {
    try {
      const deletedUser = await prisma.User.delete({
        where: {
          email: email,
        },
      })
      return deletedUser

    } catch (error) {
      console.log(error);
      throw new Error(error);
    }   
  }

}//cirra el User Class

module.exports = User;