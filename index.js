const express = require("express");
const fs = require("fs")
const router =express.Router();

const PATH_ROUTER= __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTER).filter((file) => {
    const name = removeExtension(file)
    if(name !== 'index'){
        console.log(`cargando rutan ${name}`)
        router.use(`/${name}`,require(`./${file}`))
    }
})

module.exports = router