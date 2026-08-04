import mongoose from "mongoose"


 const userSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true

    },
    number: {
        type: Number,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true

    },

    password: {
        type: String,
        required: true,

    },

    role:{

        type:String,
        enum:["admin","user"],
        default:"user"
    },

    resetPasswordToken:{
        type:String
    },

    resetPasswordExpire:{
        type:Date
    },

    refreshToken: {
    type: String
}

}, {

    timestamps: true

})


export const User = mongoose.model("User", userSchema)