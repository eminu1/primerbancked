const { check } = require ("express-validator");
const validateResults = require("../utils/hadleValidators")


const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res , next)=> {
        return validateResults(req, res , next)
    }
    
];


module.exports = { validatorGetItem};
