import ArrowIcon from '../ui/icons/ArrowIcon'
import MenuIcon from '../ui/icons/MenuIcon'
import './Header.style.scss'

export default function Header() {
	return (
		<header className='header'>
			<nav className='header__nav'>
				<ul className='header__list'>
					<li className='header__icons'>
						<a>
							<MenuIcon />
						</a>
						<a>
							<ArrowIcon />
						</a>
					</li>
					<li className='header__sections'>
						<a className='header__sections_active'>Просмотр</a>
						<a>Управление</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
