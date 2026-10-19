const Temperatura = require("../models/Temperatura")

const receberTemperatura = (req,res) =>{

    const sensor = new Temperatura(temperatura)

    console.log(sensor)

    res.json({
        mensagem:"Temperatura recebida",
        dados:sensor
    })
}

module.exports = {
    receberTemperatura
}