"use strict";
var FbAPI = (function(oldFirebase){

	oldFirebase.getMembers = function(apiKeys, uid){
		return new Promise((resolve, reject) => {
			$.ajax({
				method: 'GET',
				url:`${apiKeys.databaseURL}/items.json?orderBy="uid"&equalTo="${uid}"`
			}).then((response)=>{
				//turn the object response into an array with this code
				let items = [];
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					items.push(response[key]);
				});
				resolve(items);
			}, (error)=>{
				reject(error);
			});
		});
	};
	oldFirebase.addMember = function(apiKeys, newItem){
		return new Promise((resolve, reject) => {
			$.ajax({
				method: 'POST',
				url:`${apiKeys.databaseURL}/family.json`,
				data: JSON.stringify(newItem),
				dataType: 'json'
			}).then((response)=>{
				console.log("response from post: ",response);
				resolve(response);
			}, (error)=>{
				reject(error);
			});
		});
	};
	oldFirebase.deleteMember = function(apiKeys, itemId){
		return new Promise((resolve, reject) => {
			$.ajax({
				method: 'DELETE',
				url:`${apiKeys.databaseURL}/family/${itemId}.json`,
			}).then((response)=>{
				console.log("response from delete: ",response);
				resolve(response);
			}, (error)=>{
				reject(error);
			});
		});
	};

	oldFirebase.editMember = function(apiKeys, itemId, editedItem){
		return new Promise((resolve, reject) => {
			$.ajax({
				method: 'PUT',
				url:`${apiKeys.databaseURL}/family/${itemId}.json`,
				data: JSON.stringify(editedItem),
				dataType: 'json'
			}).then((response)=>{
				console.log("response from post: ",response);
				resolve(response);
			}, (error)=>{
				reject(error);
			});
		});
	};

	return oldFirebase;
})(FbAPI || {});
