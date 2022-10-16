import { FC } from 'react'
import styles from './header.module.css'

const Header: FC<IProps> = () => {
	return (
		<header className="flex items-center gap-2 justify-between py-2 px-4">
			<div className="logo">logo</div>
			<nav className="menu">menu</nav>
		</header>
	)
}

interface IProps {}
export default Header
