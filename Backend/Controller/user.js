const express = require('express'); 
const jwt = require('jsonwebtoken');
const bcrypt =  require('bcrypt');
const userModel = require('../Model/userModel'); 
const userRouter = Router(); 
require('dotenv').config({
    path:'../Config/env'
})
const secret = process.env.secretKey;

userRouter.post('/create-user',async(res,req)=>{
    try{
        const{email,password,name} = req.body;
        const userEmail = await userModel.findOne({email:email});
        if(userEmail){
            res.status(400).json({Message:"User already exists"});
        }if(!name || !email || !passowrd){
            res.status(400).json({message:"Please fill out all the nesscary details"});
        }
        bcrypt.hash(password,10,async(err,hash)=>{
            if(err){
                res.status(400).json({message:"Invalid Bcrypt"});
            }
            await userModel.create({
                name:name,
                email:email,
                password:hash,
            })
        })
    }catch(err){
        console.log(error);
    }
})
module.exports = userRouter;
