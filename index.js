const express = require("express");
const cors=require("cors");

const app=express();
const port=process.env.PORT || 5000;

const courseDetails=require("./data/courseDetails.json");

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Course Related Website Server is Running");

});

app.get('/courses',(req,res)=>{
    res.send(courseDetails);
})

app.get("/courses/:id",(req,res)=>{
    id=req.params.id;
    console.log(id);
    const selectedCourse=courseDetails.find((n)=>n._id === id);
    res.send(selectedCourse);
})

app.listen(port,()=>{
    console.log(`Course Related Website Server is Running on ${port}`);
})