const fs = require('fs');

function getNotes() {
  return 'Your notes...'
}

const addNote = function(title, body) {
  const notes = loadNotes();
  console.log(notes);
}

const saveNotes = () => {
  
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

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};