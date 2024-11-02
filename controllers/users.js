let UserModel = require('../models/users');

module.exports.jesseFunction = function(req, res, next) {
    res.send('Hello Jesse');
}

module.exports.create = function(req, res, next) {
    try {
        console.log(req.body);
        let newUser = new UserModel(req.body);
        console.log(newUser);
        res.json({
            success:true,
            message:'User created successfully.',
        })
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.list = async function(req, res, next) {
    try {
        let list = await UserModel.find({},'-password');
        res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.userGet = async function(req, res, next) {
    try {
        let uID = req.params.userID;
        res.user = await UserModel.findOne({_id:uID},'-password');
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports.userByID = async function(req, res, next) {
   res,json(req.user);a
}


module.exports.update = async function(req, res, next) {
    try {
        let uID = req.params.userID;
        let updateUser = new UserModel(req.body);
        let result = await UserModel.updateOne({_id:uID},updateUser);
        console.log(result);
        if(result.modifiedCount >0){
            res.json({
                success:true,
                message:'User updated successfully.',
            });
        }else{
            //Express will catch this on its own.
            throw new Error('User not updated. Are you sure it exists?');
        }
        
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}   

module.exports.remove = async function(req, res, next) {
    try {
        let uID = req.params.userID;
        
        let result = await UserModel.deleteOne({_id:uID});
        console.log(result);
        if(result.modifiedCount >0){
            res.json({
                success:true,
                message:'User deleted successfully.',
            });
        }else{
            //Express will catch this on its own.
            throw new Error('User not deleted. Are you sure it exists?');
        }
        
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}   