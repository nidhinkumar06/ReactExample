//this globally
this.table = "window table";
console.log(this.table);
this.garage = {
    car: 'Audi'
}
console.log(this.garage.car);

//this inside an onject
let jonhsRoom = {
    table: 'has table'
}
console.log(this.jonhsRoom); //will return undefined since the var is defined as private
console.log(jonhsRoom.table);

//this inside a method
let raguRoom = {
    bed: 'available',
    cleanRoom() {
        console.log(`Cleaning ${this.bed}`);
    }
}

raguRoom.cleanRoom();

//call function

this.television = "Watching moview";

const switchTV = function() {
    console.log(`Rafel is ${this.television}`); //it won't work bcoz it won't know what is this.television
}

switchTV.call(this);

// switchTV();

//this inside a inner function
this.fridge = "cooling started";

const FridgeWakes = function() {
    // // let that = this; //1
    // const CoolingStarted = function() {
    //     console.log(`Freezer ${this.fridge}`); //this won't return the value for that we need to use either 1 or 2
    // }
    // // CoolingStarted();
    // CoolingStarted.call(this); //2

    const CoolingStarted = () => {
        console.log(`Freezer ${this.fridge}`); //this won't return the value for that we need to use either 1 or 2
    }
    // CoolingStarted();
    CoolingStarted(); //2
}

// FridgeWakes();

//this inside a constructor

const CreateRoom = function(name) {
    console.log(`${name}s Room`);
}

const HenRoom = new CreateRoom('Hen');

//this inside a class
