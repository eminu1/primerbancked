const { check } = require ("express-validator");
const validateResults = require("../utils/hadleValidators")

const validatorCreateItem = [
    check("id_rutina")
    .exists()
    .notEmpty(),
    check("ejercicios")
    .exists()
    .notEmpty(),
    check("lapsos")
    .exists()
    .notEmpty(),
    check("horarios")
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