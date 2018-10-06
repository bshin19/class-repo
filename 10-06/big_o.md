# Big O Analysis

Express the running times of the following algorithms in Big O notation. Justify your responses.

Some of these are just review. A few apply Big O to algorithms we saw before.

Assume the _worst case_ running time—i.e., consider only the _maximum_ number of instructions the algorithm could take.

What is the running time of...

* Selection sort? O(n^2)

* Insertion sort? O(n^2)

* Linear search? O(n)

* Binary search? O(log n)

* Finding duplicates in an array? O(n^2)

### BONUSES

If you're mathematically inclined, you might find these interesting. If not, feel free to take a stab anyway, but don't worry too much about proving your solution.

What is the running time for an algorithm that—

* Finds all triplets `(x, y, z)` such that `x + y + z = n`, where `n` is specified by the user?

  * E.g.: `threeSum(list, search)` will find all possible triplets of numbers in `list` that sum to `search`.

* Same question, but for doubles?

  * In general, what is the running time for finding n-tuples in `list` that sum to `search`?

## Data Structure
As applications grow and we incorporate larger quantities of information, memory can be limiting.

A data structure is a way of storing data so that it can be used efficiently by the computer.

+ Arrays are an example of a data structure
  * In most programming languages, arrays are immutable. Unlike JS w/ push etc.

## Stacks
+ Stacks are another common data structure
+ They are similar to arrays in that they are a sequenced order of numbers
+ However, **they only allow access to the top element**.
  * This is called "LIFO" Last-in-First-out. New elements are placed at the top and items removed are taken from the top.
  * Stacks are an abstraction for how data can be arranged
  
## Queues
+ Another common data structure.
+ Difference between stack and queue is that queues are first in first out.

## Linked Lists
+ Linked lists are data structures in which each element of the list is sequentially joined to the next element.
+ The list elements are not stored contiguously in memory.
+ These linked lists keep track of the position of elements using pointers which explicitly point to the "connected item".
+ Nodes track both the item and the "next items" position.
  * Linked lists are like trains.

## Dictionaries (Maps)
In computer science on a general level, object literals are called dictionaries or maps

## Trees
+ Trees are a favorite data structure for computer scientists because they are extremely efficient.
+ They are a non-sequential data structure made of **parent-child** relationships.
+ The top node of a tree is the **root**.
+ Trees have **internal nodes and external nodes**.
+ Each node has **ancestors and descendants**.

In a **Binary Tree**, nodes have two children at most. Left and Right.
+ Left is lesser numbers, right is higher number

## Graphs
