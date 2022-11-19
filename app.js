const validator = require('validator')
// log(validator.isEmail('@example.com'))
const chalk = require('chalk')
// log(chalk.green.strikethrough('Sucess'));
const yargs = require('yargs')
const fs = require('fs')
const notes = require('./notes.js')


const log = console.log;


//version control
// yargs.version('1.1.0');

//add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

//remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type:'string'
        } 
    },
    handler: function(argv) {
        notes.removeNotes(argv.title);
    }
});

//list command
yargs.command({
    command:'list',
    describe: 'List all notes',
    handler: function() {
        console.log(notes.loadNotes());
    }
});

//read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: function() {
        log('Reading a note');
    }
});


// add, read, remove, list
yargs.parse()
