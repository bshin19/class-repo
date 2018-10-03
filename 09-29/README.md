# Loose Ends and More on Design

## Topics
+ Exceptions and error handling
+ Variadic functions and streams
+ concat and reduce
+ Javascript implementation

## Problem Conditions
In java there are two types of "problem conditions"
+ One is called an **error**. In java, errors represent serious problems that you shouldn't bother dealing with.
+ The other type of problem is called an **exception**. 

## Error and Exception
+ Java has error and exception classes specifically for making it easier to deal with such problem conditions

### Throwable cause
+ Exceptions can be created with a Throwable cause
+ Throwable is the superclass for Error and Exception
+ Exception(str, throwable cause) constructor is the means of creation

### Try/Catch
try { ... } tells Java: "run the code inside these brackets, if anything goes wrong, go to catch
catch (Exception e) { ... } tells Java: "if an exception causes a problem, run the code in this block to fix it."

## Variadic Functions and Streams

## Streams
+ Collections have a method, called *stream*, which turns the collection into a stream.
+ A collection is a group of things. A stream is a thing at a time.

> List<String> items = new ArrayList<String>();
> items.add("one");
> items.add("two");
> items.add("three");
> Stream<string> stream = items.stream();

Import necessary to use
> import static java.util.Arrays.* or Arrays.stream;

### Example 2 - Multi-line lambda expression
>stream(names)
>  .forEach((String name) -> {
>    System.out.println(String.format("Hello, %s!", name));

+ -> is a pointer

## stream Methods
There are foru major methods on Stream objects
+ *filter* removes elements from a list.
+ *map* turns each element into something different
+ *map* takes a stream as input; do something to each of its elements; and returns a new stream with the result.
+ *collect

Streams have a huge performance advantage over collections vbecause they are handled as they come

### Stream Methods: map
Uses a map to create a new string from an old one

map((int1 int2) -> int1 * int2)
Stream.of(1,3,4,5) creates a stream out of a list of values

### Reduce
Reduce provides a way to reduce a stream into a single value
