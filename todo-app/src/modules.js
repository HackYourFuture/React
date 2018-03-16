"use-strict";

const fs = require('fs');

let readFiles = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if (err) {
                if (err.code === "ENOENT") {
                    console.log(`Sorry, this file doesn't exist, but new file has been created : ${filename}`);
                    let fileContent = [];
                    let filePath = `${filename}.json`;
                    fs.writeFile(filePath, fileContent, (err) => {
                        if (err) throw err;
                    })
                } else if (err.code === "EACCES") {
                    // the user don't have a permission
                    console.log("Sorry, but you don't have permission.");
                } else {
                    // any other Error
                    console.log(` unknown error occurred: ${err.message}`);
                }
                reject();
            }
            resolve(data);

        })
    })

};

let writeFiles = (filename, dataAsString) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(FILENAMES.todo, dataAsString, (err) => {
            if (err) {
                if (err.code === "ENOENT") {
                    // No such file or directory
                    console.log("Sorry, this file doesn't exist.");
                } else if (err.code === "EACCES") {
                    // the user don't have a permission
                    console.log("Sorry, but you don't have permission.");
                } else {
                    // any other Error
                    console.log(` unknown error occurred: ${err.message}`);
                }
                console.log.exit();
            }
            resolve();
        })
    })
}

let addTodoItem = (filename, todoList, itemText) => {
    todoList.push({
        TODO_NUMBER: todoList.length + 1,
        TODO_TASK: itemText
    });
    writeFiles(filename, JSON.stringify(myTodoList))
        .then(() => console.log("\nDone Adding the task on your TODO list.\n\n"))
        .then(() => askingLoop());
}

let removeTodoItem = (filename, todoList, taskNumber) => {
    todoList.splice([taskNumber - 1], 1);
    for (let i = 0; i < todoList.length; i++) {
        todoList[i].TASK_NUMBER = i + 1;
    }
    writeFiles(filename, JSON.stringify(myTodoList))
        .then(() => console.log("\nDone Removing the task from your TODO list.\n"))
        .then(() => askingLoop());
}

let updateTodoItem = (filename, todoList, taskNumber, itemText) => {
    todoList[taskNumber - 1] = {
        TASK_NUMBER: taskNumber,
        TODO_TASK: itemText
    };
    writeFiles(filename, JSON.stringify(myTodoList))
        .then(() => console.log("\nDone Updating the task on your TODO list.\n"))
        .then(() => askingLoop());
}

let resetTodoItem = (filename, todoList) => {
    todoList = [];
}


module.exports = {
    readFiles,
    writeFiles,
    addTodoItem,
    removeTodoItem,
    updateTodoItem,
    resetTodoItem
}