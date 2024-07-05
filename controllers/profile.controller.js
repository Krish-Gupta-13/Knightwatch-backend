import { Profile } from '../models/profile.model.js'
import { User } from '../models/user.model.js'

export const Edit = async (req, res, next) => {
    const {location, college, github, linkedin, twitter, instagram, email, password} = req.body;

    // let existingUser;
    // try{
    //     existingUser = await User.findOne({email:email});
    // }
    // catch(err){
    //     console.log("something went wrong!")
    //     return new Error(err);
    // }
    // if(!existingUser){
    //     return res.status(400).json({message: "User not found. Signup Please"})  
    // }


    const profile = new Profile({
        college: college,
        location: location,
        github: github,
        linkedin: linkedin,
        twitter: twitter,
        instagram: instagram
    });
    try{
        await profile.save();
    }
    catch(err){
        console.log(err)
    }
    return res.status(200).json({message:"update successfully"})
}