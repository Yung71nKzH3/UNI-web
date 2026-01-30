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

/*Question 1*/
function id() {
  // e.g. return "UP654321";
  return "UP2270781";
}

/*Question 2*/
function fn() {
  return 'Leonardo';
}

/*Question 3*/
function sn() {
  return 'Valenti';
}

/*Question 4*/
function add(a, b) {
  return a + b;
}

/*Question 5*/
function subtract(a, b) {
  return a - b;
}

/*Question 6*/
function checkObject(obj) {
  obj.checked = true;
}

/*Question 7*/
function checkObjectInside(obj) {
  if (obj.data) {
    obj.data.checked = true;
  }
}

/*Question 8*/
function arraySet(arr, i, n) {
  if (Number.isInteger(i) && i >= 0 && i < arr.length) {
    arr[i] = n;
  }
}

/*Question 9*/
function addAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/*Question 10*/
function larger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

/*Question 11*/
function largest(arr) {
  if (arr.length === 0) {
    return null;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/*Question 12*/
function compare(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

/*Question 13*/
function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr;
}

/*Question 14*/
let remembered;

function rememberThis(keepsake) {
  remembered = keepsake;
  return remembered;
}

/*Question 15*/
function nArray(n) {
  const arr = [1];
  for (let i = 1; i < n; i++) {
    arr.push(i + 1);
  }
  return arr;
}

/*Question 16*/
function addAllOpt(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Question 17
function divisors(arr, div) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % div === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Question 18
function multiples(n, m) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i * m);
  }
  return arr;
}


