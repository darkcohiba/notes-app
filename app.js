const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const log = console.log;

// log(validator.isEmail('@example.com'))
// log(chalk.green.strikethrough('Sucess'));

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
        }
    },
    handler: function(argv) {
        log('Adding a new note', argv);
    }
});

//remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function() {
        log('Removing a note');
    }
});

//list command
yargs.command({
    command:'list',
    describe: 'List all notes',
    handler: function() {
        log('Listing all notes');
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

log(yargs.argv);