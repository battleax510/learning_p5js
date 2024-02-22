// Define the Dog class
class Dog {
    // Constructor method to initialize attributes
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.isBarking = false;  // Additional attribute
    }

    // Method to make the dog bark
    bark() {
        if (!this.isBarking) {
            console.log(`${this.name} the ${this.breed} is barking! Woof woof!`);
            this.isBarking = true;
        } else {
            console.log(`${this.name} is already barking.`);
        }
    }

    // Method to stop the dog from barking
    stopBarking() {
        if (this.isBarking) {
            console.log(`${this.name} has stopped barking.`);
            this.isBarking = false;
        } else {
            console.log(`${this.name} is not currently barking.`);
        }
    }
}

// Create an object (instance) of the Dog class
const myDog = new Dog("Buddy", "Golden Retriever", 3);

// Access attributes and call methods of the object
console.log(`My dog is a ${myDog.age}-year-old ${myDog.breed} named ${myDog.name}.`);
myDog.bark();
myDog.stopBarking();