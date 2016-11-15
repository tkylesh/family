"use strict";
const get = require("./getMembers");

function listMembers(apiKeys){
	get(apiKeys).then(function(members){
		console.log("family members from FB", members);
		$('#listMembers').html('');
		let DOM = "";
		members.forEach(function(member){
			DOM += '<div class="panel panel-default">';
			  DOM +='<div class="panel-body">';
			  DOM += `<div class="col-xs-3 col-xs-offset-3">${member.name}</div>`;
              DOM += `<div class="col-xs-1">${member.age}</div>`;
              DOM += `<div class="col-xs-1">${member.gender}</div>`;
              DOM += `<div class="col-xs-3">${member.skills.toString()}</div>`;
              DOM += `<div><button class="btn btn-danger delete" data-fbid="${member.id}">Delete</button></div>`;
              DOM += "</div>";
            DOM += "</div>";
		});
		//list family members in dom
		$('#listMembers').append(DOM);
	})
}



module.exports = listMembers;