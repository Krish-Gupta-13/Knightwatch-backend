import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
    email:{
        type: String,
        unique: true
    },
    location:{
        type: String,
    },
    college:{
        type: String,
    },
    github:{
        type: String, 
    },
    linkedin:{
        type: String, 
    },
    twitter:{
        type: String, 
    },
    instagram:{
        type: String, 
    },
    phone:{
        type: Number, 
    }
})

export const Profile = mongoose.model("Profile", profileSchema)