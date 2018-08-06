////////////////////////////////////////////////////////////////////////////////////////////////////////////
//install node, make sure npm is installed (npm -v), call npm init on working directory, install required modules//
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;
const list = require('./list');

var command = argv._[0];

console.log(argv);

if (command === 'new'){
    list.newListItem(argv.title);
} else if (command === 'save') {
    list.saveListItem(argv.title);
    console.log('You saved it!');
} else if (command === 'check') {
    list.checkListItem(argv.title);
    console.log('You\'re so productive!');
} else if (command === 'delete') {
    list.deleteListItem(argv.title);
    console.log('Couldn\'t finish that thing today...hmm???');
} else {
    console.log('What?! That\'s not a thing. Try again slick.');
}
