const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added.'));
    } else {
        console.log(chalk.bgRed('Note title already used.'));
    }
}

const removeNote = title => {
    let notes =  loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    if (notes.length !== notesToKeep.length) {
        console.log(chalk.bgGreen('Note removed'));
        saveNotes(notesToKeep);
        return;
    }

    console.log(chalk.bgRed('No note found'))
}

const saveNotes = notes => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const data = dataBuffer.toString();
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

const listNotes = () => {
    const notes = loadNotes();

    if (notes.length === 0) {
        console.log(chalk.bgRed('No notes found'));
    }

    console.log(notes);
    console.log(chalk.bgBlue('My Notes'));
    notes.forEach(note => console.log(note.title));
}

const readNote = title => {
    let notes =  loadNotes();
    const note = notes.find(note => note.title === title);

    if (! note) {
        console.log(chalk.bgRed('No note found'));
        return;
    }

    console.log(chalk.bgBlue(note.title));
    console.log(note.body);
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote,
};