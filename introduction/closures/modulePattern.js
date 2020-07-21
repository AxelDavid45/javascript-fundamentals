"use strict"
const modulePattern = require('./user-module');

const adminUser = modulePattern();

//We have an object with the API
console.log(adminUser);

//Using the method in the object perform the login
adminUser.login('axel', '123');
