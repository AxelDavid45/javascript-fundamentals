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

		if (user === getCredentials().validUser && token === getCredentials().validToken) {
			console.log('Login successful');
		}
	}

	//Secret method, you will never know how I get the credentials
	function getCredentials() {
	  return {
	    validUser: process.env.ALLOWED_USER,
      validToken: process.env.ALLOWED_TOKEN
    };
  }

	//Public API methods
	return {
		login: doLogin
	};
}

module.exports = User;
