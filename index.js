const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2007;
//-------------------------------------------

const { getMangas, getMangasById } = require("./controllers/mangas.controllers")
app.use(cors());

app.get("/" , getMangas )

app.get("/:id" , getMangasById)

//-------------------------------------------

app.listen( puerto, () => {

    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});