import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';

const PORT=4000

const app = express()

app.use(cors)

await mongoose.connect("mongodb+srv://admin:admin@cluster0.tlv7aru.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connection to MongoDb successfull"))
.catch((error)=>console.error(error))

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log("Server is listening at PORT http://localhost:4000")
})