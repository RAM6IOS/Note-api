
import express from 'express';
import fs from 'fs';
import './db/mongoose.js';
//import './model/note.js';
//import { request } from 'http';

import Note from './model/note.js';

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
