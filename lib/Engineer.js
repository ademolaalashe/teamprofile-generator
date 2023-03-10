// REquire the Employee class from the ./employee module
const Employee = require('./Employee');

// Define a class called Engineer tjat extends the Employee class 
class Engineer extends Employee {

    // Constructor method that sets the object properties

    constructor(name, id, email, github) {
        // Call the parent constructor with the name, id, and email parameters
        super(name, id, email);
        // Set the github property to te github parameter
        this.github = github;
        // Set the role property to 'Engineer'
        this.role = 'Engineer';
    }
     // Method that returns the value of the role property
  getRole() {
    return this.role;
  }

  // Method that returns the value of the github property
  getGithub() {
    return this.github;
  }
}

// Export the Engineer class to be used in other parts of the application
module.exports = Engineer;