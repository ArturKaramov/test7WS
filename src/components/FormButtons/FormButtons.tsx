import { Dispatch, SetStateAction } from 'react'
import { ListButton, TrashButton } from '../ui/buttons'
import './FormButtons.style.scss'

interface IFormButtons {
  level: number
  childs: number
  isChild: boolean
  onListClick?: () => void
  onTrashClick?: () => void | Dispatch<SetStateAction<boolean>>
}

const LEVEL_OFFTOP = 20

export default function FormButtons({
  level,
  childs,
  isChild,
  onListClick,
  onTrashClick
}: IFormButtons) {
  return (
    <div
      className={`buttons ${isChild && 'buttons__isChild'}`}
      style={{ left: (level - 1) * LEVEL_OFFTOP - 2 }}
    >
      <ListButton
        onClick={onListClick}
        extraClassName={`buttons__button ${
          childs && `buttons__withChild-${childs}`
        } ${isChild && 'buttons__withParent'}`}
      />
      <TrashButton
        extraClassName='buttons__button buttons__button_delete'
        onClick={onTrashClick}
      />
    </div>
  )
}
