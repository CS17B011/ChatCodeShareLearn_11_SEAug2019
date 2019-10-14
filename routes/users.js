const express = require('express');
const router = express.Router();

const User = require('../models/User.js');

//Route GET users/contacts/id
//Getting Contacts of Particular User
router.get('/contacts', (req,res) => {
    User.findOne({emailid:req.body.emailid},(err,user) => {
        if(err)
            throw err;
        if(user)
            res.json({userExist:true,user});
        else
            res.json({userExist:false});
    });
});

//Route POST users/create
//Adding new User
router.post('/create', (req,res) => {
    User.findOne({emailid:req.body.emailid},(err,user) => {
        if(err)
            throw err;
        if(user)
            res.json({userExist:true,user});
        else
        {
            const newUser = new User({
                username:req.body.username,
                emailid:req.body.emailid,
                contacts:[]
            });
            newUser.save()
                .then(user => res.json({userExist:false,user}))
                .catch(err => {
                    console.log(err);
                    res.json(err);
                });
        }
    });
});

//Route PUT users/update/id
//Updating User Information
router.put('/update/:id', (req,res) => {
    if(req.body.newContact){
        User.updateOne({"_id":req.params.id},
        {$push:{contacts:req.body.newContact}})
        .then(user => res.json(user))
        .catch(err => res.json({error:err}));
    }
    else{
        const newUser = {
            username: req.body.username,
            emailid: req.body.emailid
        }
        User.updateOne({"_id": req.params.id},
            newUser)
            .then(answer => res.json(answer))
            .catch(err => res.status(400).json({error:true}));   
    }
});

//Route DELETE user/delete/id
//Delete User
router.delete('/delete/:id',(req,res) => {
	User.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success:false}));
});

module.exports = router;
