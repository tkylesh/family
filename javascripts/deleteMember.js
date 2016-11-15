"use strict";

	function deleteMember(apiKeys, itemId){
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

	module.exports = deleteMembers;