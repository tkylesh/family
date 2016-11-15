"use strict";

/*
  The functionality for adding, subtracting, multiplying, and dividing
  are broken out into individual modules. Require those into this module.
 */
 const cred = require("./firebase");
const add = require("./addMember");
const remove = require("./deleteMember");
const list = require("./listMembers");

/* 
  Now, construct an object that contains a key/value pair for each
  of those modules that we pulled into this one
*/
let family = {
  cred, add, remove, list
};

/*
  Every module needs to specify what its output is. Think of this as the
  return statement in a function. What are we returning for use by other
  modules in the application?
 */
module.exports = family;