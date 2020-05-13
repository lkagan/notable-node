const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        console.log('Title: ', argv.title, "\nBody: ", argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note');
    }
});

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('Listing notes');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Read a note');
    }
});

yargs.parse();
