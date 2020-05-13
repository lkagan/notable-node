const fs = require('fs');

const getNotes = function () {
    return "Your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log('New note added.');
    } else {
        console.log('Note title already used.');
    }
}

const removeNote = function (title) {
    const notes =  loadNotes();

    for (let note of notes) {
        if (note.title === title) {
            console.log('Removing note: ' + title);
        }
    }
}

const saveNotes = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const data = dataBuffer.toString();
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
};