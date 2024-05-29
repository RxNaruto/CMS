const express = require('express');
const { Students } = require('../database/db');
const router = express.Router();

router.get("/",(req,res)=>{
    res.json({
        msg: "server is live"
    })
})
router.post("/astud",async (req,res)=>{
    const body = req.body;
    const user = await Students.create({
        username: body.username,
        password: body.password,
        name: body.name

    })
    if(user){
        res.json({
            msg: "user created successfully"
        })
    }
    else{
        req.status(200).json({
            msg: "Internal Server error"
        })
    }
})

router.get("/allstudents" , async(req,res)=>{
    const data = await Students.find();
    if(data){
        res.status(200).json({
            data: data
        })
    }
    else{
        res.status(500).json({
            msg: "internal server error"
        })
    }
})

module.exports=router;