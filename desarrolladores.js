const { check } = require ("express-validator");
const validateResults = require("../utils/hadleValidators")

const validatorCreateItem = [
    check("id_dev")
    .exists()
    .notEmpty(),
    check("name")
    .exists()
    .notEmpty(),
    check("apellido")
    .exists()
    .notEmpty(),
    check("edad")
    .exists()
    .notEmpty(),
    check("telefono")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
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