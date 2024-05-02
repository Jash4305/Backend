
const express = require('express')
const router = express.Router()
const assistant = require('../models/Assistants')

//POST create api : to create an Assistant Employee entry
router.post("/create",async(req,res)=>{
    try{
        const {name, mobile, email, salary, city, country, department, role}=req.body
        const newAssistant = new assistant({name, mobile, email, salary, city, country, department, role})
        console.log(req.body)
        const savedUser=await newAssistant.save()
        res.status(200).json(savedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET read api : to get all documents from Assistant collection
router.get('/', async (req, res) => {
        try {
            const assistants = await assistant.find();
            res.status(200).json(assistants);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });


//GET read api : to get a document by id


//PUT update api : to update a document by id


//DELETE delete api : to delete a document by id



module.exports=router