// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const { title } = require("process");

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your Project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a desrciption of your project",
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Please write a table of contents",
    },
    {
        type: "input",
        name: "installation",
        message: "What is the installation process?",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe project usage",
    },
    {
        type: "choices",
        name: "license",
        message: "Please include all licensing",
        choices: [
            "MIT",
            "ISC",
            "Mozilla",
            "Apache",
            "Boost",
            "GNU",
        ]
    },
    {
        type: "input",
        name: "contibuting",
        message: "Please list all contributors of this project",
    },
    {
        type: "input",
        name: "tests",
        message: "what test have been done?",
    },
    {
        type: "input",
        name: "questions",
        message: "Please include any potential questions",
    },
])

//   License, Contributing, Tests, and Questions
// WHEN I enter my project title

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
