const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./src/page-template.js');
let team = [];

// This function prompts the user to enter information about the manager
function createManager() {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the manager's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the manager's employee ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email address:",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the manager's office number:",
      },
    ])
    .then((resp) => {
      const manager = new Manager(resp.name, resp.id, resp.email, resp.officeNumber);
      team.push(manager);
      addEmployee();
    });
}
// This function prompts the user to select a role for a new team member
function addEmployee() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What would you like to do?',
          choices: ['Engineer', 'Intern', 'Finish'],
        },
      ])
      .then((resp) => {
          if (resp.action === 'Engineer') {
          createEngineer();
        } else if (resp.action === 'Intern') {
          createIntern();
        } else {
          generateFile();
        }
      });
  }
  
// This function prompts the user to enter information about a new engineer
function createEngineer() {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's employee ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email address:",
      },
      {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's GitHub username:",
      },
    ])
    .then((resp) => {
      const engineer = new Engineer(
        resp.name,
        resp.id,
        resp.email,
        resp.github
      );
      team.push(engineer);
      addEmployee();
    });
}
//This function prompts the user to enter information about a new intern
function createIntern() {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: "Enter the intern's employee ID:",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email address:",
      },
      {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school name:",
      },
    ])
    .then((resp) => {
      const intern = new Intern(resp.name, resp.id, resp.email, resp.school);
      team.push(intern);
      addEmployee();
    });
}

function generateFile() {
  const html = render(team);
  fs.writeFile(outputPath, html, (err) => {
    if (err) throw err;
    console.log(`Team profile successfully generated at ${outputPath}`);
  });
}

// initiate
createManager();
