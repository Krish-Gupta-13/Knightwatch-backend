import { Profile } from '../models/profile.model.js'
// import { User } from '../models/user.model.js'

export const Edit = async (req, res, next) => {
    const {location, college, github, linkedin, twitter, instagram, email, phone} = req.body;
    const profile = new Profile({
        college: college,
        location: location,
        github: github,
        linkedin: linkedin,
        twitter: twitter,
        instagram: instagram,
        email: email,
        phone: phone
    });
    try{
        await profile.save();
    }
    catch(err){
        console.log(err)
    }
    return res.status(200).json({message:"update successfully"})
}

export const GetProfileUser = async (req, res, next) => {
    const userEmail = req.email;
    let profileUser;
    try{
        profileUser = await Profile.findOne(userEmail);
    }
    catch(err){
        return new Error("getting user err",err);
    }
    if(!profileUser){
        return res.status(403).json({message: "User not found"})
    }
    return res.status(200).json({profileUser})
}
