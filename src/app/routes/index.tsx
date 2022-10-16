import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { paths } from './paths'
import PostsListPage from 'pages/posts-list'

const AppRoutes: FC<IProps> = () => {
	return (
		<Routes>
			<Route path={paths.INDEX} element={<PostsListPage />} />
		</Routes>
	)
}

interface IProps {}
export default AppRoutes
