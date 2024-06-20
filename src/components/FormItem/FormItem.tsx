import { IRow, TRowForm } from 'src/types/rows'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormButtons from '../FormButtons/FormButtons'
import './FormItem.style.scss'
import InputNumber from '../ui/inputs/InputNum'
import { useState } from 'react'
import { formatNumber } from 'src/utils/functions'
import { useUpdateRow } from 'src/hooks/useUpdateRows'
import AddRowItem from '../AddRowItem/AddRowItem'
import { useDeleteRow } from 'src/hooks/useDeleteRow'
import { calculateLength } from './index'

interface IFormItem extends IRow {
	level: number
	siblingsBelow: number
}

export default function FormItem(props: IFormItem) {
	const {
		child,
		rowName,
		salary,
		equipmentCosts,
		overheads,
		estimatedProfit,
		level,
		siblingsBelow,
		id,
		total,
		...rest
	} = props

	const [newRow, setNewRow] = useState<boolean>(false)

	const { register, handleSubmit, watch } = useForm<TRowForm>({
		defaultValues: {
			rowName: rowName,
			salary: formatNumber(salary),
			equipmentCosts: formatNumber(equipmentCosts),
			overheads: formatNumber(overheads),
			estimatedProfit: formatNumber(estimatedProfit)
		}
	})

	const { updateRow } = useUpdateRow(id)
	const { deleteRow } = useDeleteRow()

	const onSubmit: SubmitHandler<TRowForm> = data => {
		const newData = {
			rowName: data.rowName,
			salary: +data.salary.split(' ').join(''),
			equipmentCosts: +data.equipmentCosts.split(' ').join(''),
			overheads: +data.overheads.split(' ').join(''),
			estimatedProfit: +data.estimatedProfit.split(' ').join('')
		}
		updateRow({ id: id, data: { ...newData, ...rest } })
	}

	return (
		<>
			<form
				className='form'
				onSubmit={handleSubmit(onSubmit)}
			>
				<FormButtons
					onListClick={() => setNewRow(prev => !prev)}
					onTrashClick={() => deleteRow(id)}
					level={level}
					childs={
						newRow
							? calculateLength(child, true)
							: calculateLength(child, false)
					}
					isChild={level !== 1}
				/>
				<input
					className='form__input'
					{...register('rowName')}
				/>
				<InputNumber
					extraClassName='form__input'
					{...register('salary')}
				/>
				<InputNumber
					extraClassName='form__input'
					{...register('equipmentCosts')}
				/>
				<InputNumber
					extraClassName='form__input'
					{...register('overheads')}
				/>
				<InputNumber
					extraClassName='form__input'
					{...register('estimatedProfit')}
				/>
				<input
					type='submit'
					className='form__submit'
				/>
			</form>
			{child.length > 0 && (
				<ul>
					{child.map((item, i) => (
						<li key={item.id}>
							<FormItem
								{...item}
								level={level + 1}
								siblingsBelow={0}
							/>
						</li>
					))}
				</ul>
			)}
			{newRow && (
				<AddRowItem
					level={level + 1}
					parentId={id}
					onSubmitForm={() => setNewRow(false)}
					onTrashClick={() => setNewRow(false)}
				/>
			)}
		</>
	)
}
