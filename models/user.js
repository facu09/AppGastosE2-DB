const prisma = require("../utils/client");

const { v4: uuidv4 } = require("uuid");

class User {
    constructor(email, name, role, id) {
      this.id = id.length > 0 ? id : uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
      this.email = email;
      this.name = name ? name : "";
      this.role = role ? role : "USER";
    }

}

module.exports = User;