// Define the Orc class
class Orc {
    // Constructor method to initialize attributes
    constructor(name, level, weapon) {
        this.name = name;
        this.level = level;
        this.weapon = weapon;
        this.isRaging = false;  // Additional attribute
    }

    // Method for the Orc to start raging
    startRaging() {
        if (!this.isRaging) {
            console.log(`${this.name}, level ${this.level}, is now raging with a ${this.weapon}!`);
            this.isRaging = true;
        } else {
            console.log(`${this.name} is already raging.`);
        }
    }

    // Method for the Orc to stop raging
    stopRaging() {
        if (this.isRaging) {
            console.log(`${this.name} has stopped raging.`);
            this.isRaging = false;
        } else {
            console.log(`${this.name} is not currently raging.`);
        }
    }
}

// Create an object (instance) of the Orc class
const orcWarrior = new Orc("Grommash", 60, "Greatsword");

// Access attributes and call methods of the object
console.log(`Orc warrior ${orcWarrior.name}, level ${orcWarrior.level}, equipped with a ${orcWarrior.weapon}.`);
orcWarrior.startRaging();
orcWarrior.stopRaging();