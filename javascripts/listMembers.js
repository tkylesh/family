"use strict";

	function listMembers apiKeys, uid() {
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



module.exports = listMembers;