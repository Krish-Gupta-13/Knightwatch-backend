import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema({
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
    }
})

export const Profile = mongoose.model("Profile", profileSchema)