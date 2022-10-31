import User from "../models/user.js";
 
export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(200).send({
            "message": "User Created"
        });
    } catch (error){
        console.log(err);
    }
}


export const getUsers =async(req,res) =>{
    try{
        const user = await User.findAll();
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
    }
}


export const getUserById =async(req,res)=>{
    try{
    const user= await User.findOne({
        where:{
            id:req.params.id
        }
    })
    res.status(200).send(user)
}catch(err){
    console.log(err);
}
}

export const  updateUser =async(req,res)=>{
    try {
        await User.create(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).send({
            "message": "User updated"
        });
    } catch (error){
        console.log(err);
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}