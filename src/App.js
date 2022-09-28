import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
	return (
		<div className='App'>
			<div className='BG-Glow'></div>
			<GlobalStyles />
			<NavBar />
			<Header />
		</div>
	)
}

export default App
