const { check } = require ("express-validator");
const validateResults = require("../utils/hadleValidators")

const validatorCreateItem = [
    check("id_doctores")
    .exists()
    .notEmpty(),
    check("name")
    .exists()
    .notEmpty(),
    check("apellido")
    .exists()
    .notEmpty(),
    check("direccion")
    .exists()
    .notEmpty(),
    check("telefono")
    .exists()
    .notEmpty(),
    check("lugar_trabajo")
    .exists()
    .notEmpty(),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("estado")
    .exists()
    .notEmpty(),
    check("ciudad")
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