import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CounterPage } from 'pages/counter'
import { paths } from './paths'

const AppRoutes: FC<IProps> = () => {
	return (
		<Routes>
			<Route path={paths.INDEX} element={<CounterPage />} />
		</Routes>
	)
}

interface IProps {}
export default AppRoutes
