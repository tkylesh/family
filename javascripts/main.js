"use strict";

let myFamily = require("./family");

let apiKeys = {};




$(document).ready(()=>{
    
    myFamily.cred().then(function(keys){
      console.log("keys", keys);
      apiKeys = keys;
      firebase.initializeApp(apiKeys);
      // putTodoInDOM();
      myFamily.list(apiKeys).then(function(response){
      	console.log("list of family members: ", response);
      });
    });

});