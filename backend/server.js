// const express=require('express');
// const mongoose = require('mongoose')
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app=express();
app.use(express.json());
app.use(cors());
// let todo=[];
//connect mongodb
mongoose.connect('mongodb://localhost:27017/mern-app')
.then(()=>{
    console.log('DB connected')
})
.catch((err)=>{
    console.log(err)
})
//creating schema
const todoschema=new mongoose.Schema({
    title: {
        required: true,
        type:String
    }
})
const todomodel=mongoose.model('Todo',todoschema);
app.post( '/todo',async(req, res) => {
    console.log('yes');
    
    const {title} = req.body;
 
    try{
        const newTodo = new todomodel({title});
        await newTodo.save();
        res.status(201).json(newTodo);
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message});
    }
})
//get all items
app.get('/todo',async(req,res)=>{
    try{
        const todos=await todomodel.find();
        res.json(todos);
    }catch(error){
        console.log(error)
        res.status(500).json({message:error.message});
    }
 
})
//update a todo list
app.put("/todo/:id",async(req,res)=>{
    try{
        const{title, description}=req.body;
        const id=req.params.id;
        const upadateTodo = await todomodel.findByIdAndUpdate(
            id,
            {title,description},
            {new:true}
        )
        if(!upadateTodo){
            return res.status(404).json({message:"Todo not found"})
        }else{
            res.status(200).json(upadateTodo);
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message});
    }
})
//delete a todo item
app.delete('/todo/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteTodo=await todomodel.findByIdAndDelete(id);
        if(!deleteTodo){
            res.status(404).json({message:"Todo not found"});
        }else{
            res.status(200).json(deleteTodo);
        }
    }catch(error){
        console.log(error)
        res.status(500).json({message:error.message});
    }
})
//start the server
const port=8000;
app.listen(port,()=>{
    console.log("server is listening to port " + port)
})