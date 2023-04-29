//const express = require('express');
/*
import express from 'express';
//const fs = require('fs');
import fs from 'fs';
const app = express();
//
//require('./db/mongoose')
import './db/mongoose.js';

app.get('/notes' , (req , res) => {
    fs.readFile(__dirname + '/'+ "notes.json", 'utf-8',(err , data) => {
        if (err) {
            return console.log(err)
        }
        res.status(200).send(data)
    })

})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})
*/

import express from 'express';
import fs from 'fs';
import './db/mongoose.js';
//import './model/note.js';
//import { request } from 'http';

import Note from './model/note.js';




//const note  = request('./model/note.js')



const app = express();
app.use(express.json())

//reade
app.get('/notes', async(req, res) => {
  try { 
  const notes = await Note.find()
     // res.send.(notes)
     res.send(notes)
  } 
  catch(err){
    res.status(500).send(err)

  }
  /*
  const filePath = new URL('./notes.json', import.meta.url).pathname;
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading file');
    }
    res.status(200).send(data);
  });
  */
});

//create
app.post('/notes' , async(req, res) =>{
  const note = new Note(req.body)
   try{
    await note.save()
    res.status(201).send(note);
   }
   catch(err){
    res.status(400).send(err);

   }

   
  
  /*
  note.save()
   .then(() => {
    res.status(200).send(note);

   })
   .catch((err) => {
    res.status(500).send(err);
   })
*/
})
//update
app.patch('/notes/:id' , async (req,res) => {

  try{
    const note = await Note.findById(req.params.id)
    note.note = req.body.note
    await note.save()
    res.status(201).send(note);
  }
  catch(err){
    res.status(404).send(err);
  }

})  

//delete

app.delete('/notes/:id' , async (req,res) => {

  try{
    const note = await Note.findByIdAndDelete(req.params.id)
    res.send("new delete note");
  }
  catch(err){
    res.status(500).send(err);
  }

})  

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
