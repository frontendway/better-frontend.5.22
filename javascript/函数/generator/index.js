/* 
	迭代器
		作用 循环可迭代的对象
		拥有迭代器的对象被称为可迭代的对象(即该对象有Symbol(Symbol.iterator)函数
		迭代器遵循迭代协议
		迭代协议
			迭代器必须是函数且返回对象值
		具备迭代器的数据类型都可以使用 for of 循环
*/

	var obj = {
		name: 1
	}

	Object.prototype[Symbol.iterator] = function () {
		let index = 0
		const _this = this,
		keys = Object.keys(_this)

		return {
			next () {
				return {
					value: { key: keys[index], value: _this[keys[index]] },
					done: index++ === keys.length
				}
			}
		}
	}
	// next 函数被调用2次、第二次 done 为 true 时本次值不打印  

	for (let {k, v} of obj) {
		console.log(k, v)
	}

/* 
	let arr = [1, 2, 3, 4];

	function each (data) {
		// 生成迭代器
		let iterator = data[Symbol.iterator]();
		let item = {done: false};
		while (!item.done) {
			item = iterator.next();
			if (!item.done) console.log(item)
		}
	}

	each(arr) 
*/
