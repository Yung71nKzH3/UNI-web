/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

/*Question 2*/
function id() {
  // e.g. return "UP654321";
  return "UP2270781";
}

/*Question 3*/
function fn() {
  return 'Leonardo';
}

/*Question 4*/
function sn() {
  return 'Valenti';
}

/*Question 5*/
function add(a, b) {
  return a + b;
}

/*Question 6*/
function subtract(a, b) {
  return a - b;
}

/*Question 7*/
function checkObject(obj) {
  obj.checked = true;
}

/*Question 8*/
function checkObjectInside(obj) {
  if (obj.data) {
    obj.data.checked = true;
  }
}

/*Question 9*/
function arraySet(arr, i, n) {
  if (Number.isInteger(i) && i >= 0 && i < arr.length) {
    arr[i] = n;
  }
}

/*Question 10*/
function addAll(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

/*Question 11*/
function larger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

/*Question 12*/
function largest(arr) {
  if (arr.length === 0) {
    return null;
  }
  return arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
}

/*Question 13*/
function compare(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  return a.every((element, i) => element === b[i]);
}

/*Question 14*/
function addToAll(arr, n) {
  arr.forEach((_, i) => {
    arr[i] += n;
  });
  return arr;
}

/*Question 15*/
let remembered;

function rememberThis(keepsake) {
  remembered = keepsake;
  return remembered;
}

/*Question 16*/
function nArray(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

/*Question 17*/
function addAllOpt(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}

/*Question 18*/
function divisors(arr, div) {
  return arr.filter(element => element % div === 0);
}

/*Question 19*/
function multiples(n, m) {
  return Array.from({ length: n }, (_, i) => (i + 1) * m);
}


