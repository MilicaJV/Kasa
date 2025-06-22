
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const CardList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erreur de chargement des données :", err))
  }, [])

  return (
    <div className='home-container'>
      {data.map((item) => (
        <Link key={item.id} to={`/accommodation/${item.id}`}>  
        <div className='div-card' >
          <img src={item.cover} alt={item.title} />
          <div className='card-title'>{item.title}</div>
        </div>
        </Link>
      ))}
    </div>
  );
};
export default CardList;