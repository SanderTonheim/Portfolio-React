import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'
import { ExperienceSpacer } from './components/ExperienceSpacer'

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<NavBar />
			<Header />
			<Experience />
			<ExperienceSpacer />
		</div>
	)
}

export default App
