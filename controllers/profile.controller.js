import { Profile } from '../models/profile.model.js'
// import { User } from '../models/user.model.js'





export const Edit = async (req, res, next) => {
    const { location, college, github, linkedin, twitter, instagram, email, phone } = req.body;
    try {
        const profile = await Profile.findOneAndUpdate(
            { email: email }, 
            {
                college: college,
                location: location,
                github: github,
                linkedin: linkedin,
                twitter: twitter,
                instagram: instagram,
                phone: phone
            },
            { new: true, upsert: true } // Options: return the updated document and create if it doesn't exist
        );

        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        return res.status(200).json({ message: "Profile updated successfully", profile });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "An error occurred while updating the profile" });
    }
};


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



// export const Edit = async (req, res, next) => {
//     const {location, college, github, linkedin, twitter, instagram, email, phone} = req.body;
//     const profile = await Profile.updateOne({
//         college: college,
//         location: location,
//         github: github,
//         linkedin: linkedin,
//         twitter: twitter,
//         instagram: instagram,
//         email: email,
//         phone: phone
//     }, { new: true, upsert: true });
//     try{
//         await profile.save();
//     }
//     catch(err){
//         console.log(err)
//     }
//     return res.status(200).json({message:"update successfully"})
// }
