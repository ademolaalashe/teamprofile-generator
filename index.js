const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];


// This function prompts the user to enter information about the manager

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email address:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number:",
        },
    ]);
}

// This function prompts the user to select a role for a new team member

function promptRole() {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please select a role for the new team member:",
            choices: ["Engineer", "Intern"],
        },

    ]);
}

// This function prompts the user to enter information about a new engineer 

function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:",
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:",
        },
    ]);
}

//This function prompts the user to enter information about a new intern

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address:",
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school name:",
        },
    ]);
}

// This function prompts the user to select an action to perform

function promptAction() {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["Add an engineer", "Add an intern", "Finish"],
        },
    ]);
}

// This function generates the HTML file based on the information provided

function generateHTML() {
    const html = render(teamMembers);
    fs.writeFileSync(outputPath, html);
    console.log("The team profile has been generated at ${outputPath}");
}

// This is the main function that runs the application

async function init() {
    console.log("Please enter the information about the team manager");
    const managerData = await promptManager();
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
}

