# Java

## Java requires you to declare variable types
+ Java exposes many built-in types, but you will only need a subset for today's activities.
  * _String_ the data type used to indicate string
  * _int_: the data type used to indicate numbers between -2^31 and 2^32.
    * _long_: the data type allows you to store values beyond the int range
  * _double_: used to store decimal values (Floats).
  * _boolean_: a data type used to store boolean values.
  
## Basic Scanner Methods
+ _nextLine_: reads the user input
+ _next_ reads a single word of user input and returns it as a string
+ _nextInt_ attempts to parse user input as an integer and returns the result if successful
+ _nextDouble_ attempts to parse user input as a double and returns the result if successful.

*Java is a compiled language*

> public static *void* main()
+ This is referred to as the entry point.
+ Void means doesn't return anything
+ I N T E R P O L A T I O N

## When printing out in Java
+ System.out.println(String.format(
  * println stands for print line!
  * %s means string
  * %d means int
  * %f means double
+ System.out.print(...)
  + print doesn't add any linebreaks to the print.
  
  
+ nextLine waits for an e
## Echo Name and Confirmation to Console
> Scanner input = new Scanner(System.in);

## How to Compile Java Files *(Badly)* and run
+ Compile
> javac *.java

+ Run
> java -cp ../ console.ConsoleIO

## Syntax
+ *Arrays* must be created with a certain length and cannot be added to.
+ *ArrayList* behaves like an array but doesn't impose a length constraint
  * import java.util.ArrayList
+ HashMaps
  * Basically JavaScript objects, but you need to specify both the type of its keys and the values
  * When using HashMaps:
    * *Integer* is used over *int*; 
    * *Double* instead of *double*;
	* *Boolean* instead of *boolean*;
  * Basic HashMap methods: put, get, and getOrdefault
+ Remove with arrayName.remove(num)
+ Update with arrayName.set(num, val)
+ get with arrayName.get(num or value);
+ add with arrayName.add(value);
+ Put sets the key value with arrayName.put(num or value, newKeyVal);
+ package collections states that this file is a part of the package "collections"
+ variable.next() advances to the next conditional so that the app doesn't auto fail.
  
## Conditionals
* Java's conditional statements are the same as JS.
* Braces are optional in single-line statements
* C-style conditional statements
* Scanner objects offer a way for us to check if the 

## Java Functions
+ Functions can only exist inside a class--they're methods.
+ Methods must have a efined type for what is returned.

### Initialize an ArrayList of HashMaps
ArrayList
+ ArrayList<HashMap<String, String>> fullname = new ArrayList<>();

HashMaps
+ HashMap<String, String> fullname = new HashMap<>();
+ fullname.put("firstname", "bob");
+ fullname.put("lastname", "dobalina");

Add Hashmap to ArrayList
+ Arraylist.add(fullname);

### Infinite Loop Example
while (true) {
  System.out.print("Would you like more porridge? (Y/N) ");
  if (input.hasNext()) {
    confirmation = input.next();
	if (confirmation.equals("Y")) {
	  System.out.print("Here you are.");
	  continue;
	} else {
	  break;
	}
  }
}

## Classes and Objects
+ Java features powerful tools for object-oriented code
+ public class syntax that students have seen so much of, predictably, tells Java to create a class
+ Classes can be instantiated. You can use them to create new objects
+ We can declare member variables, or fields, inside of the class. These are properties that each object we instantiate will have.
+ Classes can have a constructor. like in JS this is a function that initializes an object
+ public methods are methods that anyone can use
+ private methoads are methods that can only be used inside of the class.

***Autoboxing***