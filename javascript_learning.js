'use strict';

// ==========================================
// JavaScript Learning & Cheatsheet
// ==========================================

/*
   1. The 'add' function
   ---------------------
   Task: Create an add function that accepts a and b, and returns their sum.
*/

// JavaScript Version:
function add(a, b) {
   return a + b;
}

/*
   COMPARISON WITH PYTHON:
   -----------------------
   Python:
   def add(a, b):
       return a + b
   
   Differences:
   1. Keyword: 'function' (JS) vs 'def' (Py).
   2. Logic wrapping: { curly braces } (JS) vs indentation (Py).
   3. Statements: Semicolons ';' are used to end statements in JS (best practice).
*/


// ==========================================
// 2. Data Types in JavaScript
// ==========================================

/*
   JavaScript is dynamically typed (like Python). 
   You don't declare the type (int, string) when creating variables.
   Use 'let' or 'const' to declare variables.
*/

// --- Numbers ---
// In JS, integers and floats are all just "Number".
let myInteger = 10;
let myFloat = 10.5;
// Python: has int (10) and float (10.5) as separate types.

// --- Strings ---
let firstName = "Leonardo";  // Double quotes
let surname = 'Valenti';     // Single quotes (work the same)
let message = `Hello, ${firstName}!`; // Backticks for "Template Literals" (like Python f-strings)
// RECOMMENDATION: Use Backticks (``) whenever you mix text and variables. It is cleaner!
// Python: f"Hello, {first_name}!"

// --- Booleans ---
let isFun = true;
let isHard = false;
// Python: True / False (Capitalized)

// --- undefined vs null ---
let waitingForValue; // Value is 'undefined' (variable exists but has no value yet)
let emptyResult = null; // Value is 'null' (intentionally empty)
// Python: Uses 'None' for both concepts mostly.

// ==========================================
// 3. Comparisons & Equality (The "Strict" Tip)
// ==========================================

// In JavaScript, we have two ways to check equality:

// 1. Loose Equality (==) -> "Only checks value, ignores type"
// console.log(5 == "5"); // true (Because 5 looks like "5")

// 2. Strict Equality (===) -> "Checks value AND type"
// console.log(5 === "5"); // false (Number vs String)

// PRO TIP: ALWAYS use '===' (Triple Equals). 
// Be strictly typed like Python! Avoid '==' unless you know exactly why you want it.

// ==========================================
// 4. Testing Area
// ==========================================
// We can use console.log() to print to the terminal (like print() in Python)

// ==========================================
// 5. Objects (Like Python Dictionaries)
// ==========================================

/*
   In Python, you have Dictionaries:
   my_dict = {"name": "Leo", "score": 10}
   my_dict["active"] = True  # Adding a new key

   In JavaScript, we use Objects:
*/

let student = {
   name: "Leo",
   score: 10
};

// Accessing data (Dot notation is preferred!)
// console.log(student.name);   // "Leo"

// Adding new data (Just assign it!)
student.checked = true;      // ".checked" is just a new key (property) we made up! 
// It implies we are marking this object as "done" or "selected".
// It works exactly like student.isAwesome = true;

/*
   PYTHON ANALOGY:
   ----------------
   In a Python Class, you write:
       self.checked = True
   
   In JavaScript, 'student' IS 'self'. 
   So 'student.checked = true' is exactly the same concept!
   You are attaching an attribute to the object instance.
*/

// ==========================================
// 6. Testing Area
// ==========================================
// We can use console.log() to print to the terminal (like print() in Python)

console.log("--- Testing add function ---");
console.log("5 + 10 =", add(5, 10));
console.log("String concatenation:", add("Web", " Development"));
console.log("Object Test:", student);

// ==========================================
// 6. Nested Objects (Objects inside Objects)
// ==========================================

/*
   Just like you can have a Dictionary inside a Dictionary in Python:
   user = {
       "name": "Leo",
       "metadata": {
           "id": 123,
           "active": True
       }
   }
*/

let user = {
   name: "Leo",
   metadata: {
      id: 123,
      active: true
   }
};

// Accessing it? Chain the dots!
// console.log(user.metadata.active); // true

/*
   VISUALIZING THE LEVELS:
   -----------------------
   Think of it like Folders on your computer:
   
   📁 obj  (The main variable)
    |
    └── 📁 data  (A specific folder inside 'obj')
         |
         └── 📄 checked = true  (The file inside 'data')

   So 'checked' belongs to 'data', and 'data' belongs to 'obj'.
   That is why we write: obj.data.checked
*/

// ==========================================
// 7. Safety Checking (The "Does it exist?" check)
// ==========================================

/*
   If we try to access 'user.address.postcode', it will CRASH 
   because 'user.address' is undefined.

   In Python you might do: 
   if "address" in user:
   
   In JavaScript, we just use the "Truthy" check:
*/

if (user.metadata) {
   // This block ONLY runs if user.metadata exists (is not null/undefined)
   console.log("Metadata exists!");
}

// ==========================================
// 8. Testing Area (Consolidated)
// ========================================== 
console.log("--- Testing add function ---");
console.log("5 + 10 =", add(5, 10));
console.log("Object Test:", student);
console.log("User metadata is safe to access:", user.metadata.id);


// ==========================================
// 9. Checking Types (How to know what you have?)
// ==========================================

/*
   You asked: "If types are invisible, how do we enforce them?"
   Answer: We use helper functions!
*/

let x = 10;
let y = 10.5;
let z = "Hello";

// 1. The 'typeof' operator (Basic checks)
// console.log(typeof x); // "number"
// console.log(typeof z); // "string"

// 2. Specific Checks (like Integers)
// Since 'number' covers BOTH ints and floats, we need a special tool:
// Number.isInteger(value)

if (Number.isInteger(x)) {
   // True! 10 is an integer.
}

if (Number.isInteger(y)) {
   // False! 10.5 is a float (decimal).
}

/*
   So for your 'arraySet' function:
   You need to combine checks:
   1. Is it an integer? (Number.isInteger(i))
   2. Is it inside the bounds? (i >= 0 && i < arr.length)
*/


// ==========================================
// 10. Validating Arrays (Is it valid or just a String?)
// ==========================================

/*
   Often you will receive a variable 'arr', but it might be 'undefined', 'null',
   or even a 'string' (which also has a .length property!).

   BAD Check:
   if (arr.length > 0) { ... }
   // Fails because "Hello".length > 0 too! And you can't loop over a string like an array safely in all logic.

   GOOD Check (The Standard Way):
   Array.isArray(arr)
*/

// Example Logic:
let candidate = "I am a string, not an array";

if (Array.isArray(candidate)) {
   console.log("Safe to loop!");
} else {
   console.log("Stop! This is not an array.");
}

// combining Checks (Does it exist AND is it an array?)
function safeProcess(arr) {
   if (!arr || !Array.isArray(arr)) {
      return 0; // Guard Clause: Fail safe immediately
   }
   // Now we know it is 100% a real Array
   return arr.length;
}
