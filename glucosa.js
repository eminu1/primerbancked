const { check } = require ("express-validator");
const validateResults = require("../utils/hadleValidators")

const validatorCreateItem = [
    check("id_glucosa")
    .exists()
    .notEmpty(),
    check("nivel_azucar")
    .exists()
    .notEmpty(),
    check("horario_comidad")
    .exists()
    .notEmpty(),
    check("ejercicios")
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