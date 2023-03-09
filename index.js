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