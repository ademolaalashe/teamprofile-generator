// Define a class called Employee
class Employee {
    // Constructor method that sets the object properties
    constructor(name, id, email) {
      this.role = 'Employee'; // Set the role property to 'Employee'
      this.name = name; // Set the name property to the name parameter
      this.id = id; // Set the id property to the id parameter
      this.email = email; // Set the email property to the email parameter
    }

    //Method that returns the value of the role property
    getRole() {
        return this.role;
    }

    // Method that returns the value of the name property
    getName() {
        return this.name;
    }
    // Method that returns the value of the id property
    getId() {
        return this.id;
    }

    // Method that returns the value of the email property
    getEmail () {
        return this.email;
    }