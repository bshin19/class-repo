# Callbacks and Constructors in the Wild


+ Sketch the Design of applications befoere you start to code
+ Use constructors to create objects
+ Callbacks (Closures, promises)
+ Node Checkpoint

## DOTENV:
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

## RECURSIVE APPROACH VS ITERATIVE

## Sketch Architecture in draw.io

## Callback
Callbacks are listeners that wait to act until after a function occurs.

FS example:
first, fs.appendfile adds the text into the file specified
then, depending on success or failure,
fs.appendFile hits the error and sends an error update
or fs.appendfile writes the data we want.