let Notes = [];
// {title: "todo this", body: "more details here", isDone: true}

const addNote = (title, body) => {
    //
}

const removeNote = (title) => {
    //
}

const listNotes = () => {
    return Notes;
}

const clearNotes = () => {
    Notes = [];
}

module.exports = {
    addNote,
    removeNote, 
    listNotes, 
    clearNotes,
}