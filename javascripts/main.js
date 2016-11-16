"use strict";

let myFamily = require("./family");

let apiKeys = {};


$(document).ready(()=>{
    
    myFamily.cred().then(function(keys){
      console.log("keys", keys);
      apiKeys = keys;
      firebase.initializeApp(apiKeys);
	    myFamily.list(apiKeys);
    });

    $('#listMembers').on('click', '.delete', function(){
    	let memberId = $(this).data("fbid");
    	console.log("memberId to delete: ", memberId);
    	myFamily.remove(apiKeys, memberId).then(function(){
    		myFamily.list(apiKeys);
    	});
    });

    $('#addMemberModal').on('click', '#addSubmit', function(){
      console.log('addSubmit Btn clicked');
      let newItem = {
        "name": $('#inputName').val(),
        "age": $('#inputAge').val(),
        "gender": $('.form-check-input').val(),
        "skills": $("#inputSkills").val().split(",")
      };

      for (let key in newItem) {
        if (newItem[key] === "") {
          window.alert("Please fill all fields!");
          return;
        }
      }
      
      myFamily.add(apiKeys, newItem).then(function(){
        myFamily.list(apiKeys);
        $('#addMemberModal').modal('toggle');
      });
    });
});