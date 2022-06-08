const { check } = require ("express-validator");
const validateResults = require("../utils/hadleValidators")



const validatorRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("apellido")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("genero")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("age")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("direccion")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("tipo_diabetes")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("telefono")
    .exists()
    .notEmpty()
    .isNumeric(),
    check("estado")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("ciudad")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    (req, res , next) => {
        return validateResults(req, res , next)
    }
    
];

const validatorLogin = [
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res , next) => {
        return validateResults(req, res , next)
    }
    
];


module.exports = {validatorRegister, validatorLogin};
