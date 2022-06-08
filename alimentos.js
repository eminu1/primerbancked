const { check } = require ("express-validator");
const validateResults = require("../utils/hadleValidators")

const validatorCreateItem = [
    check("id_alimentos")
    .exists()
    .notEmpty(),
    check("nombre")
    .exists()
    .notEmpty(),
    check("indice_glucosa")
    .exists()
    .notEmpty(),
    check("carga_glucosa")
    .exists()
    .notEmpty(),
    check("carbohidratos")
    .exists()
    .notEmpty(),
    (req, res , next)=> {
        return validateResults(req, res , next)
    }

];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res , next)=> {
        return validateResults(req, res , next)
    }
    
];


module.exports = {validatorCreateItem, validatorGetItem};
