import { useState } from 'react'
import DropMenuIcon from '../ui/icons/DropMenuIcon'
import NavIcon from '../ui/icons/NavIcon'
import './Sidebar.style.scss'
import { navTitles } from 'src/utils/constants'

export default function Sidebar() {
	const [visible, setVisible] = useState<boolean>(true)
	const [active, setActive] = useState<number>(4)

	const handleClick = () => {
		setVisible(prevValue => !prevValue)
	}

	return (
		<aside className='aside'>
			<div className='aside__titleBlock'>
				<h2 className='aside__title'>Название проекта</h2>
				<span className='aside__abbrev'>Аббревиатура</span>
				<button
					className={`aside__button ${!visible && 'aside__button_rotate'}`}
					onClick={handleClick}
				>
					<DropMenuIcon />
				</button>
			</div>
			{visible && (
				<nav>
					<ul>
						{navTitles.map(({ name, key }) => (
							<li
								key={key}
								onClick={() => setActive(key)}
							>
								<a
									href='#'
									className={`aside__navItem ${
										active === key && 'aside__navItem_activeNav'
									}`}
								>
									<NavIcon />
									{name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			)}
		</aside>
	)
}
