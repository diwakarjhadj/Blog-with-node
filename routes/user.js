const {Router}= require('express');
const User= require('../models/user')
const router=Router;

router.get('/signin',(_,res)=>{
    return res.render('signin');
});

router.get('/signup',(_,res)=>{
    return res.render('signup');
})

router.post('/signup',async (_,res)=>{
    const {fullName, email, password}= req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect('/')
})
module.exports= router;