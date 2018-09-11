// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sing(){
  let verse1 = 'To the window';
  console.log(verse1)
  function singMore(){
    let verse2 = `${verse1}, to the wall`;
    console.log(verse2);
  }
  singMore();
}

// ==== Challenge 2: Create a counter function ====
let num = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  function counting(){
    num++;
  } 
  counting();
  return num;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

// ======== IIFE =========
const myTeam = (function(){
  let team = 'Pittsburgh Steelers';
  return team;
})();