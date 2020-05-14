const fs = require('fs');
const chalk = require('chalk');

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
        console.log(chalk.bgGreen('New note added.'));
    } else {
        console.log(chalk.bgRed('Note title already used.'));
    }
}

const removeNote = function (title) {
    let notes =  loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    if (notes.length !== notesToKeep.length) {
        console.log(chalk.bgGreen('Note removed'));
        saveNotes(notesToKeep);
        return;
    }

    console.log(chalk.bgRed('No note found'))
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