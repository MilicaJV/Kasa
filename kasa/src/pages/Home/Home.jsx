import Banner from '../../components/Banner/Banner'
import CardList from '../../components/CardList/CardList'
import BannerImg from "../../assets/home-img.png"
import '../../components/Banner/Banner.css'
import '../../components/CardList/CardList.css'
import '../../styles/index.css'



function Home() {
	return (<div>
		<Banner imageUrl={BannerImg} text={"Chez vous, partout et ailleurs"} />
		<CardList />
	</div>)
}

export default Home
