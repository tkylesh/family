"use strict";

/*
  The functionality for adding, subtracting, multiplying, and dividing
  are broken out into individual modules. Require those into this module.
 */
const addMember = require("./addMember");
const deleteMember = require("./deleteMember");
const listMembers = require("./listMembers");

/* 
  Now, construct an object that contains a key/value pair for each
  of those modules that we pulled into this one
*/
let family = {
  addMember, deleteMember, listMembers
};

/*
  Every module needs to specify what its output is. Think of this as the
  return statement in a function. What are we returning for use by other
  modules in the application?
 */
module.exports = family;