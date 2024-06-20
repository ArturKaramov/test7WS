export interface IRow {
  child: Array<IRow>
  equipmentCosts: number
  estimatedProfit: number
  id: number
  machineOperatorSalary: number
  mainCosts: number
  materials: number
  mimExploitation: number
  overheads: number
  rowName: string
  salary: number
  supportCosts: number
  total: number
}
export type TRowUpdate = Omit<IRow, 'child' | 'id' | 'total'>
export type TRowCreate = TRowUpdate & { parentId: number | null }

export type FormValues = {
  rowName: string
  salary: string
  equipmentCosts: string
  overheads: string
  estimatedProfit: string
}

export type TRowForm = {
  rowName: string
  salary: string
  equipmentCosts: string
  overheads: string
  estimatedProfit: string
}
