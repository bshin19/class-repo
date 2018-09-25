// convert the code below to use the array methods instead of for loops
// you'll need to use the filter, reduce, map, and forEach methods

const princesses = [{ name: "Rapunzel", age: 18 }, { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 }, { name: "Moana", age: 16 }];

// log the name of each princess, follow by a colon, followed by their age
// can be replaced with forEach
princesses.forEach((princess) => {
  console.log(`${princess.name}: ${princess.age}`);
});

// create an array of princess names from the existing array
// can be replaced with map
// const names = [];
// princesses.forEach((princesss) => {
//   names.push(princesss.name);
// });

// Map
const names = [];
princesses.map((princesss) => {
  return princesss.name;
});

console.log("names: ", names);


// using the `names` array, get only those names that start with an 'M'
// can be replaced with filter

// const mNames = [];
// names.forEach((mname) => {
//   if (mname.startsWith("M")) {
//     mNames.push(mname);
//   }
// });

const mNames = [];
names.filter((mname) => {
  return mname.startsWith("M");
});

console.log("m-names: ", mNames);


// get a single value from the data: the average age of all of the princesses
// Can be replaced with reduce

// let sum = 0;
// for (let i = 0; i < princesses.length; i++) {
//   sum += princesses[i].age;
// }

const sum = princesses.reduce((sum, princess) => {
  return sum + princess.age;
}, 0);

const average = sum / princesses.length;
console.log("average age: ", average);


// BONUS: get the average age of all princesses whose name includes an 'l'
const lNames = [];
princesses.forEach((lname) => {
    if (lname.name.includes("l")) {
    lNames.push(lname.name);
    }
});
console.log("l-names: ", lNames);
