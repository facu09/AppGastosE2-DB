const express = require("express");
const bodyParser= require("body-parser");


const usersRouter = require("./routes/users")
// const tipoGastosRouter = require("./routes/tipoGastos");
// const gastosRouter = require("./routes/gastos")

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

//ataja todas las rutas que arranquen con "api/movies" --> y las tira al /routes/users.js
app.use("/api/users", usersRouter);

// //ataja todas las rutas que arranquen con "api/tipoGastos" --> y las tira al /routes/tipoGastos.js
// app.use("/api/tipoGastos", tipoGastosRouter);

// //ataja todas las rutas que arranquen con "api/gastosRouter" --> y las tira al /routes/gastos.js
// app.use("/api/gastos", gastosRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT} Bro`);
})





