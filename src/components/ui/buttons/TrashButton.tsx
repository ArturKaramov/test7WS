import TrashIcon from '../icons/TrashIcon'
import { IButton } from './types'

export default function TrashButton({ extraClassName, onClick }: IButton) {
	return (
		<button
			type='button'
			className={extraClassName}
			onClick={onClick}
		>
			<TrashIcon />
		</button>
	)
}
