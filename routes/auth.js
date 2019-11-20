const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',passport.authenticate('google',{
    scope: ['profile','email']
}));

router.get('/google/success',passport.authenticate('google'),(req,res) => {
    res.redirect('/');
});

router.get('/logout',(req,res)=>{
    if(req.user)
    {
        req.logout();
        console.log("Logging Out...");
    }
    res.redirect('/');
});

module.exports = router;