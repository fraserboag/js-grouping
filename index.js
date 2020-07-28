const groupArrayElements = (inputArray, numGroups = 1) => {

	if (!Array.isArray(inputArray)) return;
	if (!Number.isInteger(numGroups)) return;

	const groupedArray = [];
	
	for (let i = numGroups; i > 0; i--) {
		const numElementsToPush = Math.ceil(inputArray.length / i);
		groupedArray.push(inputArray.splice(0, numElementsToPush));
	}
	
	return groupedArray;
	
}

console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3));