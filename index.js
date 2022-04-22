// GIVEN a command-line application that accepts user input
// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under






// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const { left } = require("inquirer/lib/utils/readline");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
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
        name: "visual",
        message: "Please include link/pathway to your visual:",
    },
    {
        type: "input",
        name: "installation",
        message: "What is the installation process?",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe project usage:",
    },
    {
        type: "list",
        name: "license",
        message: "Please include all licensing",
        choices: [
            "MIT",
            "ISC",
            "Mozilla",
            "Apache",
        ],
    },
    {
        type: "input",
        name: "contibuting",
        message: "Please list all contributors of this project:",
    },
    {
        type: "input",
        name: "tests",
        message: "Tests you would like to include",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email:",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github url:",
    },
];



// let fileName = `${questions.title}.md`;
let fileName = "readme.md"
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("readMe has been generated!")
     });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => 
        writeToFile(fileName, generateMarkdown(data))
    )}

// Function call to initialize app
init();
