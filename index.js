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

function id() {
  // e.g. return "UP654321";
  return "UP2270781";
}

function fn() {
  return 'Leonardo';
}

function sn() {
  return 'Valenti';
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function checkObject(obj) {
  obj.checked = true;
}

function checkObjectInside(obj) {
  if (obj.data) {
    obj.data.checked = true;
  }
}

function arraySet(arr, i, n) {
  if (Number.isInteger(i) && i >= 0 && i < arr.length) {
    arr[i] = n;
  }
}