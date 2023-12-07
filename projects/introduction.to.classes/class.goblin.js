// Define the Goblin class
class Goblin {
    // Constructor method to initialize attributes
    constructor(name, profession, weapon) {
        this.name = name;
        this.profession = profession;
        this.weapon = weapon;
        this.isSneaky = false;  // Additional attribute
    }

    // Method for the Goblin to start being sneaky
    startSneaking() {
        if (!this.isSneaky) {
            console.log(`${this.name}, the ${this.profession}, is now sneaking with a ${this.weapon}!`);
            this.isSneaky = true;
        } else {
            console.log(`${this.name} is already sneaking.`);
        }
    }

    // Method for the Goblin to stop being sneaky
    stopSneaking() {
        if (this.isSneaky) {
            console.log(`${this.name} has stopped sneaking.`);
            this.isSneaky = false;
        } else {
            console.log(`${this.name} is not currently sneaking.`);
        }
    }
}

// Create an object (instance) of the Goblin class
const goblinRogue = new Goblin("Snik", "Rogue", "Dagger");

// Access attributes and call methods of the object
console.log(`Goblin rogue ${goblinRogue.name}, a ${goblinRogue.profession}, armed with a ${goblinRogue.weapon}.`);
goblinRogue.startSneaking();
goblinRogue.stopSneaking();