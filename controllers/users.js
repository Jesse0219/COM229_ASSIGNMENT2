let UserModel = require('../models/users');

module.exports.jesseFunction = function(req, res, next) {
    res.send('Hello Jesse');
}

module.exports.create = async function(req, res, next) {
    try {
        console.log(req.body);
        let newUser = new UserModel(req.body);
        console.log(newUser);
        let result = await UserModel.create(newUser);
        console.log(result);
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
        const user = await UserModel.findOne({ _id: uID }, '-password');
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.json({ success: true, data: user });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
module.exports.userByID = async function(req, res, next) {
   res,json(req.user);
}


module.exports.update = async function(req, res, next) {
    
        
    try {
        let uID = req.params.userID;

        
        if (req.body._id) {
            delete req.body._id;
        }

        
        let result = await UserModel.updateOne(
            { _id: uID },
            { $set: req.body }
        );

        console.log(result);

        if (result.modifiedCount > 0) {
            res.json({
                success: true,
                message: 'User updated successfully.'
            });
        } else {
            
            return res.status(404).json({
                success: false,
                message: 'User not updated. Are you sure it exists?'
            });
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};   

module.exports.remove = async function(req, res, next) {
    try {
        let uID = req.params.userID;
        
        let result = await UserModel.deleteOne({_id:uID});
        console.log(result);

        if(result.deletedCount >0){
            res.json({
                success:true,
                message:'User deleted successfully.',
            });
        }else{
            
            return res.status(404).json({
                success: false,
                message: 'User not deleted. Are you sure it exists?'
            });
        }
        
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}   
