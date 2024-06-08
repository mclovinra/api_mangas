const {request , response} = require("express");

const { mangas } = require("../mangas");

const getMangas = ( req, res) =>{
        return res.json({
            ok: true,
            statuscode:200,
            mangas
        });
    }

const getMangasById = ( req = request, res = response) =>{
    
    let id = parseInt(req.params.id);

    let mangasABuscar = "";

    mangasABuscar = mangas.find(( mangas )=>{
        return mangas.id === id;
    })

    if(mangasABuscar){
        return res.json({
            ok:true,
            statuscode: 200,
            mangasABuscar
        });
    }else{
        return res.json({
            ok:true,
            statuscode:404,
            mangasABuscar,
            msg: "No hay mangas con la ID"
        })
    }

}

module.exports = {
    getMangas, getMangasById
}