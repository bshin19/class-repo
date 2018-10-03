// Linear Search Simple

var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var randomValue = stuff[ Math.floor( Math.random() * 14 ) ];

for (var i = 0; i < stuff.length; i++) {

	if (stuff[i] === randomValue) {
    	console.log("stuff[" + i + "] Equals " + randomValue);
  	}
  	else{
  		console.log("stuff[" + i + "] Does Not Equal "  + randomValue);
  	}
  	
}