import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username :{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index:true,
        trim: true
    },
    email :{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname :{
        type: String,
        required: true,
        index:true,
        trim: true
    },
    testsCreated: [
        {
            type : Schema.Types.ObjectId,
            ref: "tests"
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    refreshToken : {
        type: String,
    }
},{
    timestamps: true
})

export const User = model("User", userSchema)
