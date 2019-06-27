const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title) //.filter returns an array, it loop thru the whole array
    const duplicateNote = notes.find((note) => note.title === title) //.find returns a single variable, it stops once he find a match if no match found it returns undefined.

    if (!duplicateNote) { //if false(undefined) means there is no duplicate
        notes.push({ 
            title: title,  // runs if there is NO duplicate note 
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreen("New note added!"));
    } else { // runs if there is a duplicate note 
        console.log(chalk.bgRed("Note title taken!"));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.inverse(note.title));
        console.log("- " + note.body);
    }else{
        console.log(chalk.red.inverse("No note found!"));
        console.log(notes);
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length === notesToKeep.length){
        console.log(chalk.bgRed("no note '" + title + "' to be removed!"));
    }else{
        console.log(chalk.bgGreen("note removed!"));
    }
    saveNotes(notesToKeep);
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const listNotes = () => { 
    const notes = loadNotes();
    
    console.log(chalk.inverse("Your notes"));

    notes.forEach((note) => {
        console.log("- "+ note.title);        
    });
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}