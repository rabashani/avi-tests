const { TestScheduler } = require('@jest/core');
const { addNote,
    removeNote, 
    listNotes, 
    clearNotes,
} = require('./notes');

describe("notes", () => {
    describe("listNotes", () => {
        test("list notes is empty", () => {
            const result = listNotes();
            expect(result).toEqual([]);
            expect(result.length).toBe(0);
        })
    })
})