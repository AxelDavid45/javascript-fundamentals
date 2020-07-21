function truthyValues(value) {
	return !!value;
}

console.group('False values');
console.log(truthyValues(''));
console.log(truthyValues(0));
console.log(truthyValues(-1));
console.log(truthyValues(NaN));
console.log(truthyValues(undefined));
console.log(truthyValues(false));
console.groupEnd();

console.group('True values');
console.log(truthyValues('hello'));
console.log(truthyValues(42));
console.log(truthyValues(true));
console.log(truthyValues([]));
console.log(truthyValues({ } ));
console.log(truthyValues(() => 'o'));
console.groupEnd()
