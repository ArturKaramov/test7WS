import { IRow } from 'src/types/rows'

export function calculateLength(arr: Array<IRow>, newRow: boolean): number {
  if (!arr.length) {
    return newRow ? 1 : 0
  } else {
    let res = 1
    const stack = newRow ? [...arr, null] : [...arr]

    while (stack.length > 1) {
      const parent = stack.shift()
      res += 1
      if (parent && parent.child.length) {
        stack.unshift(...parent.child)
      }
    }

    return res
  }
}
