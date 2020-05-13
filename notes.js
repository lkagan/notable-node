const fs = require('fs');

const getNotes = function () {
    return "Your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes();
    notes.push({ title, body });
    saveNotes(notes);
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
};