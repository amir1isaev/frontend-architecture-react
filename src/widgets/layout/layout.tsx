import { FC, ReactNode } from 'react'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'
import styles from './layout.module.css'

const Layout: FC<IProps> = (p) => {
	const { children } = p
	return (
		<div className={styles.layout}>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

interface IProps {
	children: ReactNode
}
export default Layout
