const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
    {
        id_user:{
            type:Number
        },
        name:{
            type:String,
        },
        apellido:{
            type:String,
        },
        genero:{
            type:String,
        },
        age:{
            type:Number,
        },
        direccion:{
            type:String,
        },
        tipo_diabetes:{
            type:Number,
        },
        email:{
            type:String,
            unique:true
        },
        telefono:{
            type:Number,
        },
        estado:{
            type:String,
        },
        ciudad:{
            type:String,
        },
        password:{
            type:String,
            select:false
        },
        role:{
            type:["user", "admin"],
            default: "user",
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

module.exports = mongoose.model("users", UserScheme)