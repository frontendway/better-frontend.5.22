var arr = [0, 1, 2, 3, 4, 5, 6, 7];
var index = 0;
var times = Math.ceil(arr.length / 3);
var newArr = [];
for (var i = 0; i < times; i++) {
	if (!newArr[i]) {
		newArr[i] = arr.slice(i * 3, i * 3 + 3)
	}
}

function aa(arr) {
	var newArr = [];
	arr.forEach((item, i) => {
		const page = Math.floor(i / 3);
		if (!newArr[page]) {
			newArr[page] = [];
		}
		newArr[page].push(item);
	})
	return newArr
}
