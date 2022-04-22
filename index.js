// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



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
        name: "installation",
        message: "What is the installation process?",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe project usage",
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
            "Boost",
            "GNU"
        ],
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
    {
        type: "input",
        name: "email",
        message: "Please enter your email",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github url",
    },
];




let fileName = "readme.md";
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
