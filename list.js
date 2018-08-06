const fs = require('fs');

var newListItem = (title) => {
    var list = [];
    var listItem = {
        title
    };

    try {
        var listString = fs.readFileSync('list-data.json');
        list = JSON.parse(listString);
    } catch (e) {

    }
    
    list.push(listItem);
    fs.writeFileSync('list-data.json', JSON.stringify(list));

};

var saveListItem = (title) => {
    console.log(`your title, ${title}, has been saved`);
};

var checkListItem = (title) => {
    console.log(`your title, ${title}, has been completed`);
};

var deleteListItem = (title) => {
    console.log(`your title, ${title}, has been deleted`);
};

module.exports = {
    newListItem,
    saveListItem,
    checkListItem,
    deleteListItem
};