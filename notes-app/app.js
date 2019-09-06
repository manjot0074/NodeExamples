console.log('start');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
    describe: 'title of note',
    demand: true,
    alias: 't'
}

const bodyoptions = {
    describe: 'body of note',
    demand: true,
    alias: 'b'
}
const argv = yargs
.command('add', 'add a new note',{
    title : titleOptions,
    body : bodyoptions
})
.command('list', 'list all notes')
.command('read', 'Read a note',{
    title : titleOptions
})
.command('remove', 'remove', {
    title : titleOptions
})
.help()
.argv;
var command = argv._[0];

switch (command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if(note){
            notes.logNotes(note);
        } else {
            console.log('note is already present');
        }
        break;
    case 'list':
        var allNotes =notes.getAll();
        console.log(`printing ${allNotes.length} note(s).`);
        allNotes.forEach((note) => {
            notes.logNotes(note);
        });
        break;
    case 'read':
        var note = notes.read(argv.title);
        debugger;
        if(note && note.length > 0){
            notes.logNotes(note[0]);
        } else {
            console.log('note not found');
        }
        break;
    case 'remove':
        var isNoteRemoved = notes.remove(argv.title);
        isNoteRemoved ? console.log('removed') : console.log('Not removed');
        break;
    default:
        break;
}
