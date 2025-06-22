import BadPage from '../../assets/error-404.png'
import { Link } from 'react-router-dom'

function Error() {
	return (
		<div className="div-error">
			<img src={BadPage} alt="error404" className="error-img" />

			<h1 className="error-text">Oups! La page que vous demandez n'existe pas.</h1>

			<Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
		</div>
	)
}

export default Error
