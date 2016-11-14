"use strict";

let apiKeys = {};
let uid = "";

function listMembers () {
	FbAPI.getMembers(apiKeys, uid).then(function(members){
		console.log("members from FB", members);
		$('#listMembers').html('');
	});
}


module.exports = listMembers;