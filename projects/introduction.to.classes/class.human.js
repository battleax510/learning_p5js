// Define the Human class
class Human {
    // Constructor method to initialize attributes
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.isWorking = false;  // Additional attribute
    }

    // Method for the Human to start working
    startWorking() {
        if (!this.isWorking) {
            console.log(`${this.name}, ${this.age} years old, is now working as a ${this.occupation}.`);
            this.isWorking = true;
        } else {
            console.log(`${this.name} is already working.`);
        }
    }

    // Method for the Human to stop working
    stopWorking() {
        if (this.isWorking) {
            console.log(`${this.name} has stopped working.`);
            this.isWorking = false;
        } else {
            console.log(`${this.name} is not currently working.`);
        }
    }
}

// Create an object (instance) of the Human class
const workingPerson = new Human("John", 30, "Software Developer");

// Access attributes and call methods of the object
console.log(`Human ${workingPerson.name}, ${workingPerson.age} years old, working as a ${workingPerson.occupation}.`);
workingPerson.startWorking();
workingPerson.stopWorking();