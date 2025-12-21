function solution(n, arr1, arr2) {
	binaryArr1 = arr1.map((el) => el.toString(2).padStart(n, "0"));
	binaryArr2 = arr2.map((el) => el.toString(2).padStart(n, "0"));

	const arr = [];

	for (let i = 0; i < n; i++) {
		let row = "";

		for (let j = 0; j < n; j++) {
			if (binaryArr1[i][j] === "1" || binaryArr2[i][j] === "1") {
				row += "#";
			} else {
				row += " ";
			}
		}

		arr[i] = row;
	}

	return arr;
}