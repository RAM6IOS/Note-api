/*
import mongoose from 'mongoose';
const Note = mongoose.model("Note",{
    note:{
        type: String
    }

})

//module.exports = Note
//export default Note;
*/
import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    note: {
      type: String,
    },
  });
  
  export const Note = mongoose.model('Note', NoteSchema);
  export default Note;
