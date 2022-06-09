const prisma = require("../utils/client");

const { v4: uuidv4 } = require("uuid");

class User {
  constructor(email, name, password, role, id) {
    this.id = id ? id : uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    this.email = email;
    this.name = name ? name : "";  //si fuese opcional
    this.password = password;
    this.role = role ? role : "USER";
  }

  // //Aca iria el alta en la deb
  async save() {
    try {
      console.log (this.email + ", " + this.name + ", " + this.password + ", " + this.role )
     
      await prisma.User.create({
        data: {
          email: "'" + this.email + "'",
          name: "'" + this.name + "'",
          role: "'" + this.role + "'",
          password: "'" + this.password + "'",
          password: "'" + this.password + "'",
        },
      });

      return this;
    
    } catch (err) {
      return err;
    }
  }

}

module.exports = User;