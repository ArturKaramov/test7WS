import { IRow } from 'src/types/rows'

export function calculateLength(arr: Array<IRow>, newRow: boolean): number {
	if (!arr.length) {
		return newRow ? 1 : 0
	} else {
		let res = 1
		const queue = newRow ? [...arr, null] : [...arr]

		while (queue.length > 1) {
			const parent = queue.shift()
			res += 1
			if (parent && parent.child.length) {
				queue.unshift(...parent.child)
			}
		}

		return res
	}
}
