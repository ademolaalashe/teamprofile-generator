// Require the Employee class from the ./Employee module
const Employee = require("./Employee");

// Define a class called Manager that extends the Employee class
class Manager extends Employee {
  // Constructor method that sets the object properties
  constructor(name, id, email, officeNumber = 0) {
    // Call the parent constructor with the name, id, and email parameters
    super(name, id, email);
    // Set the officeNumber property to the officeNumber parameter (default value is 0)
    this.officeNumber = officeNumber;
  }

  // Method that returns the value of the officeNumber property
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Method that returns the string "Manager" to indicate the role of the object
  getRole() {
    return "Manager";
  }
}

// Export the Manager class to be used in other parts of the application
module.exports = Manager;
