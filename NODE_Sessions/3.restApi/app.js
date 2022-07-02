const express=require('express')
const app=express()
const port=7890;

app.get("/",(req,res)=>{
    res.send("Hello, 1st Page to load")
})

app.get("/home",(req,res)=>{
    res.send("Welcome to home route")
})

app.listen(port,()=>{
    console.log(`Server started at ${port}`)
})

