const express = require("express");
const bodyParser= require("body-parser");

const usersRouter = require("./routes/users")
const tiposGastosRouter = require("./routes/tiposGastos");
const gastosRouter = require("./routes/gastos")

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

//ataja todas las rutas que arranquen con "api/user" --> y las tira al /routes/users.js
app.use("/api/users", usersRouter);

//ataja todas las rutas que arranquen con "api/tipoGastos" --> y las tira al /routes/tipoGastos.js
app.use("/api/tipoGastos", tiposGastosRouter);

//ataja todas las rutas que arranquen con "api/gastos" --> y las tira al /routes/gastos.js
app.use("/api/gastos", gastosRouter);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT} Bro`);
})





