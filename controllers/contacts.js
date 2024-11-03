let ContactModel = require('../models/contacts');

module.exports.create = async function(req, res, next) {
    try {
        console.log(req.body);
        let newContact = new ContactModel(req.body);
        console.log(newContact);
        let result = await ContactModel.create(newContact);
        res.json({
            success:true,
            message:'Contact created successfully.',
            
        })
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports.list = async function(req, res, next) {
    try {
        let list = await ContactModel.find({});
        res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.contactGet = async function(req, res, next) {
    try {
        let uID = req.params.id;
        const user = await ContactModel.findOne({ _id: uID });

        if (!user) {
            return res.status(404).json({ success: false, message: "Contact not found" });
        }

        res.json({ success: true, data: user });
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports.contactByID = async function(req, res, next) {
   res,json(req.user);
};


module.exports.update = async function(req, res, next) {
    try {
        let uID = req.params.id;

        
        if (req.body._id) {
            delete req.body._id;
        }

      
        let updatedContact = await ContactModel.findOneAndUpdate(
            { _id: uID },
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (updatedContact) {
            res.json({
                success: true,
                message: 'Contact updated successfully.',
                data: updatedContact
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Contact not updated. Are you sure it exists?'
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.remove = async function(req, res, next) {
    try {
        let uID = req.params.id;
        
        let result = await ContactModel.deleteOne({_id:uID});
        console.log(result);
        if(result.deletedCount >0){
            res.json({
                success:true,
                message:'Contact deleted successfully.',
            });
        }else{
            
            return res.status(404).json({
                success: false,
                message: 'Contact not deleted. Are you sure it exists?'
            });
        }
        
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}   