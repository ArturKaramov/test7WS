import { useRows } from 'src/hooks/useRows'
import FormItem from '../FormItem/FormItem'
import './BuildWork.style.scss'
import { AddRowItem } from '../AddRowItem'

export default function BuildWork() {
  const { rows, setRows } = useRows()

  return (
    <section className='build'>
      <div className='build__tabs'>
        <h2 className='build__title'>Строительно-монтажные работы</h2>
      </div>

      <div className='build__names'>
        <div className='build__name'>Уровень</div>
        <div className='build__name'>Наименование работ</div>
        <div className='build__name'>Основная з/п</div>
        <div className='build__name'>Оборудование</div>
        <div className='build__name'>Накладные расходы</div>
        <div className='build__name'>Сметная прибыль</div>
      </div>
      <ul className='build__list'>
        {rows?.length ? (
          rows.map((item, i) => (
            <li key={item.id}>
              <FormItem
                {...item}
                level={1}
                siblingsBelow={rows.length - 1 - i}
              />
            </li>
          ))
        ) : (
          <AddRowItem
            level={1}
            parentId={null}
          />
        )}
      </ul>
    </section>
  )
}
