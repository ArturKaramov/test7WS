export function formatNumber(num: number): string {
	if (num < 1000) return num.toString()
	const newNum = Math.floor(num)

	const arr = newNum.toString().split('').reverse()
	for (let i = 3; i < arr.length; i += 3) {
		arr[i] += ' '
	}

	return num % 1 === 0
		? arr.reverse().join('')
		: arr.reverse().join('') + '.' + num.toString().split('.')[1]
}
