function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function() {
        if (this.hungry) {
            console.log("Thanks for feeding me, homey.");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("Yo dawg, I ain't hungry!");
        };
    };
    this.sleep = function() {
        if (this.sleepy) {
            console.log("Zzzzz");
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        } else {
            console.log("No! I'm not going to bed! NONONONONO!!!!");
        };
    };
    this.play = function() {
        if (this.bored) {
            console.log("Ye, alright. Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("I ain't playin' with your lame butt.");
        };
    };
    this.increaseAge = function() {
        this.age ++;
        console.log("Another year older! I'm " + this.age + " years old!!");
    };
};

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function() {
    console.log("Woof Woof!");
};
dog.goOutside = function() {
    if (!this.outside) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else {
        console.log("Fool!! We're already outside!");
    };
};
dog.goInside = function() {
    if (this.outside) {
        console.log("Booooorring. Okay, we'll go inside.");
    } else {
        console.log("Dude! We're already inside! This isn't Inception.");
    };
};

var cat = new DigitalPal();
cat.houseCondition = 100;
cat.meow = function() {
    console.log("Meow ;)");
};
cat.destroyFurniture = function() {
    if (this.houseCondition > 1) {
        this.houseCondition -= 10;
        console.log("Muahahahahahaha!!! This house is going down!");
        this.bored = false;
        this.sleepy = true;
    } else {
        console.log("Heheheha I've already destroyed this house");
    };
};
cat.buyNewFurniture = function() {
    cat.houseCondition += 50;
    console.log("You know, it's just going to get destroyed anyway.");
};

cat.buyNewFurniture();
cat.destroyFurniture();
cat.meow();
dog.goInside();