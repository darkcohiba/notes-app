const fs = require('fs');
const chalk = require('chalk')


function getNotes() {
  return 'Your notes...'
}

//add note function
const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicatedNotes = notes.find(function(note) {
    return note.title === title;
  });
  if (!duplicatedNotes) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title already exists!"));
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
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
}
//list notes function
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your notes:"));
  notes.forEach((note) => {
    console.log(chalk.blue.inverse(note.title));
  });
}

const readingNotes = (title) => {
  const notes = loadNotes();
  const specificNote = notes.find(function(note) {
    return note.title === title
  });
  if (specificNote) {
    console.log(chalk.blue.inverse(specificNote.title));
    console.log(specificNote.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
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
  listNotes: listNotes,
  removeNotes: removeNotes,
  readingNotes: readingNotes


};