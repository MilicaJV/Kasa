import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './pages/About/About/'
import Accommodation from './pages/Accommodation/Accommodation/'
import Home from './pages/Home/Home/'
import './components/Header/Header.css'
import './components/Footer/Footer.css'
import './styles/App.css'
import './components/Error/Error.css'
import Error from './components/Error/Error'

function App() {

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/accommodation/:id" element={<Accommodation />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
