import { TRowForm } from 'src/types/rows'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormButtons from '../FormButtons/FormButtons'
import './AddRowItem.style.scss'
import InputNumber from '../ui/inputs/InputNum'
import { useCreateRow } from 'src/hooks/useAddRow'
import { additionalKeys } from '../../utils/constants'
import { Dispatch, SetStateAction } from 'react'

interface IFormItem {
  parentId: number | null
  level: number
  onTrashClick?: Dispatch<SetStateAction<boolean>>
  onSubmitForm?: () => void
}

export default function AddRowItem({
  level,
  parentId,
  onTrashClick,
  onSubmitForm
}: IFormItem) {
  const { register, handleSubmit, watch } = useForm<TRowForm>({
    defaultValues: {
      rowName: '',
      salary: '',
      equipmentCosts: '',
      overheads: '',
      estimatedProfit: ''
    }
  })

  const { createRow } = useCreateRow()

  const onSubmit: SubmitHandler<TRowForm> = data => {
    const newData = {
      rowName: data.rowName,
      salary: +data.salary.replace(' ', ''),
      equipmentCosts: +data.equipmentCosts.replace(' ', ''),
      overheads: +data.overheads.replace(' ', ''),
      estimatedProfit: +data.estimatedProfit.replace(' ', ''),
      parentId: parentId
    }

    createRow({ ...newData, ...additionalKeys })
    onSubmitForm && onSubmitForm()
  }

  return (
    <>
      <form
        className='addForm'
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormButtons
          level={level}
          childs={0}
          isChild={level !== 1}
          onTrashClick={() => {
            onTrashClick && onTrashClick(false)
          }}
        />
        <input
          className='addForm__input'
          {...register('rowName')}
        />
        <InputNumber
          extraClassName='addForm__input'
          {...register('salary')}
        />
        <InputNumber
          extraClassName='addForm__input'
          {...register('equipmentCosts')}
        />
        <InputNumber
          extraClassName='addForm__input'
          {...register('overheads')}
        />
        <InputNumber
          extraClassName='addForm__input'
          {...register('estimatedProfit')}
        />
        <input
          type='submit'
          className='addForm__submit'
        />
      </form>
    </>
  )
}
