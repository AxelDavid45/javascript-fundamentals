//Example IIFE
(function myIIFE () {
	console.log('I\'m an IIFE');
})();

//IIFE returns a value
const x = (function returnX () {
	return 42;
})();
console.log(`X has a value of ${x}`);

