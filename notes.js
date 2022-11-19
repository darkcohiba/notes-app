const fs = require('fs');

function getNotes() {
  return 'Your notes...'
}

//add note function
const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicatedNotes = notes.filter(function(note) {
    return note.title === title;
  });
  if (duplicatedNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title already exists!");
    console.log(duplicatedNotes)
  }
}

//remove note function

function removeNotes(title) {
  const notes = loadNotes();
  const specificNote = notes.filter(function(note) {
    return note.title === title
  });
  if (specificNote.length > 0) {
    notes.splice(notes.indexOf(specificNote[0]), 1);
    saveNotes(notes);
    console.log("Note removed!");
  } else {
    console.log("Note not found!");
  }
}


//helper functions

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJson)
}

function loadNotes() {
  try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch (e) {
    return []
  }
}

//exports
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  loadNotes: loadNotes,
  removeNotes: removeNotes

};