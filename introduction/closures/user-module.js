"use strict"
//Module pattern with closures
function User () {
	//Private variables
	let user, token;

	//Private method
	function doLogin(usr, tkn) {
		user = usr;
		token = tkn;

		if (user === undefined || token === undefined) {
			throw new Error('Missing parameters');
		}

		if (user === process.env.ALLOWED_USER && token === process.env.ALLOWED_TOKEN) {
			console.log('Login successful');
		}
	}

	//Public API methods
	return {
		login: doLogin
	};
}

module.exports = User;