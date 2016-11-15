"use strict";

	function deleteMember(apiKeys, memberId){
		return new Promise((resolve, reject) => {
			$.ajax({
				method: 'DELETE',
				url:`${apiKeys.databaseURL}/family/${memberId}.json`,
			}).then((response)=>{
				console.log("response from delete: ",response);
				resolve(response);
			}, (error)=>{
				reject(error);
			});
		});
	};

	module.exports = deleteMember;