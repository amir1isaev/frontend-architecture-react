import { withProviders } from './providers'
import './styles/index.scss'
import AppRoutes from './routes'

const App = () => {
	return <AppRoutes />
}

export default withProviders(App)
