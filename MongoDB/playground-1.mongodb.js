/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

// Insert a few documents into the course collection.
db.getCollection('Course').insertMany([
  {
    "name": "java",
    "price": 20000,
    "instructor": "Akash"
  },
  {
    "name": "python",
    "price": 18000,
    "instructor": "John"
  },
  {
    "name": "javascript",
    "price": 15000,
    "instructor": "Maya"
  },
  {
    "name": "data science",
    "price": 25000,
    "instructor": "Sara"
  },
  {
    "name": "machine learning",
    "price": 30000,
    "instructor": "Raj"
  },
  {
    "name": "web development",
    "price": 22000,
    "instructor": "Alice"
  }
]
);

// Print a message to the output window.
console.log(`Done with the Database Creating`);