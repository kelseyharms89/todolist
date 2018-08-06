// var obj = {
//     name: 'Kelsey',
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Kelsey","age": 28}';
// var personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('list.json', originalNoteString);

var noteString = fs.readFileSync('list.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);