"use strict";

let myFamily = require("./family");

myFamily.listMembers();


$(document).ready(()=>{
    
    FbAPI.firebaseCredentials().then(function(keys){
      console.log("keys", keys);
      apiKeys = keys;
      firebase.initializeApp(apiKeys);
      // putTodoInDOM();
    });

});