const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * 
 * @param {*} user 
 */
const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            _id: user._id, 
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn:"2h"

        }
        
    );
    return sign 
};

/**
 * 
 * @param {*} tokenJtw 
 * @returns 
 */
const verifyToken = async (tokenJtw) =>{
    try{
        return jtw.verify(tokenJtw, JWT_SECRET)

    }catch(e){
        return null 
    }

}

module.exports = {tokenSign, verifyToken }