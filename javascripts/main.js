"use strict";

let myFamily = require("./family");

let apiKeys = {};


let newItem = {
	"name":"taylor s",
	"age":"26",
	"gender":"Male",
	"skills":["coding","drinking water"]
};


$(document).ready(()=>{
    
    myFamily.cred().then(function(keys){
      console.log("keys", keys);
      apiKeys = keys;
      firebase.initializeApp(apiKeys);
      // putTodoInDOM();
	    myFamily.list(apiKeys);
	    // myFamily.add(apiKeys, newItem).then(function(response){
	    // 	console.log("response from adding member: ", response)
	    // });

    });

    
    


});