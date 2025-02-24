import React from "react";
import { useState } from "react";
import userRouter from "../../../Backend/Controller/user";

export const SignUp = () =>{
    const[name,setName] = useState(' ');
    const[email,setEmail] = useState(' ');
    const[password , setPassword] = useState(' ');

    userRouter.post('create-user',async(res,req)=>{
        try{
            if(!name||!email||!passowrd){
                res.status(400).json({message:"Fill everything"});
            }
        }catch(error){
            console.log(error);
        }
    })

    return(
        <div className="SignUpOne">
            <h1>SignUp</h1>
        <div className="SignUpBody">
          <h1>Name</h1>
          <input type="text" value={name} onClick={e=>{e.target.value(setName(name))}}>
          </input>
          
        </div>
        <div className="SignUpBodyOne">
          <h1>Email</h1>
          <input type="text" value={name} onClick={e=>{e.target.value(setEmail(email))}}>
          </input>
          </div>
          <div className="SignUpBodyOne">
          <h1>password</h1>
          <input type="text" value={name} onClick={e=>{e.target.value(setPassword(password))}}>
          </input>
          </div>
        </div>
    
    )
}

