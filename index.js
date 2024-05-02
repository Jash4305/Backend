
const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')

const app=express()
dotenv.config()

//to connect with database with url
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected successfully!")
    }
    catch(err){
        console.log(err)
    }
}

// calling connect and passing port to establish the connection
app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("app is running here http://localhost:"+process.env.PORT)
})