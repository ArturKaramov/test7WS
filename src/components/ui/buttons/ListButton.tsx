import ListIcon from '../icons/ListIcon'
import { IButton } from './types'

export default function ListButton({ extraClassName, onClick }: IButton) {
	return (
		<button
			type='button'
			onClick={onClick}
			className={extraClassName}
		>
			<ListIcon />
		</button>
	)
}
