const fs = require('fs');

var originalNote = {
    title : 'tttt',
    name: 'body'
}

var originalNoteSync = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteSync);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);