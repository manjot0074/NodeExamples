const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {

    }
    return [];
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;       
    }
    return ;
}

var getAll = () => {
    return fetchNotes();
}

var read = (title) => {
    var notes = fetchNotes();
    debugger;
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes;
}

var remove = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

var logNotes = (note) => {
    debugger;
    console.log(`title = ${note.title}`);
}

module.exports = {
    addNote,
    getAll,
    read,
    remove,
    logNotes
}
