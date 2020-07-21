function makeAdder(x) {
	//x is a inner variable
	//Closure add remembers the value of x
	function add(y) {
		return y + x;
	}
	return add;
}

let plusOne = makeAdder(1);
//We saved a reference (callback)
console.log(plusOne);
//Execute the callback adding 4 + 1
console.log(plusOne(4));

