const { check } = require ("express-validator");
const validateResults = require("../utils/hadleValidators")

const validatorCreateItem = [
    check("id_insulina")
    .exists()
    .notEmpty(),
    check("tipo")
    .exists()
    .notEmpty(),
    check("cantidad")
    .exists()
    .notEmpty(),
    check("horario")
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