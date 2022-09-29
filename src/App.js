import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<NavBar />
			<Header />
			<Experience />
		</div>
	)
}

export default App
