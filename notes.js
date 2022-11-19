const fs = require('fs');

function getNotes() {
  return 'Your notes...'
}

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

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};