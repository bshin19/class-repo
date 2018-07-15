// // creates an object and sets it to bird
// var birds = {
//   // creates the property "flying" and sets it to true
//   flying: true,
//   // creates the property "noise" and sets it to "Tweet!"
//   noise: "Tweet!",
//   // creates the method "makeNoise", prints birds.noise   if flying is true
//   makeNoise: function() {
//   // i.e. this.flying refers to the flying property of 'this' particular object
//     if (this.flying === true) {
//       console.log('Bird says ' + this.noise + ' ' + this.noise);
//     }
//   }
// };

//birds.makeNoise();

function AnimalMaker(boolean, noise) {
  this.raining = boolean;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining) {
      console.log(noise);
    };
  };
};

var dog = new AnimalMaker(true, "Woof!");
var cat = new AnimalMaker(false, "Meow.");

console.log(cat);

cat.makeNoise();
dog.makeNoise();

function massHysteria() {
  if (cat.raining && dog.raining) {
    console.log("DOGS AND CATS LIVING TOGETHER!!! MASS HYSTERIA");
  } else {
    console.log("The world is fine.");
  };
};

massHysteria();

cat.raining = true;
cat.makeNoise();
massHysteria();