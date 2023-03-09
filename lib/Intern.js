// Require the Employee class from the ./Employee module
const Employee = require("./Employee");

// Define a class called Intern that extends the Employee class
class Intern extends Employee {
  // Constructor method that sets the object properties
  constructor(name, id, email, school) {
    // Call the parent constructor with the name, id, and email parameters
    super(name, id, email);
    // Set the school property to the school parameter
    this.school = school;
  }

  // Method that returns the value of the school property
  getSchool() {
    return this.school;
  }

  // Method that returns the string "Intern" to indicate the role of the object
  getRole() {
    return "Intern";
  }
}

// Export the Intern class to be used in other parts of the application
module.exports = Intern;
