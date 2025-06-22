import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown'
import Slideshow from '../../components/Slideshow/Slideshow'
import '../Accommodation/Accommodation.css'
import '../../components/Dropdown/Dropdown.css'
import '../../components/Slideshow/Slideshow.css'
import '../../styles/index.css'

const Accommodation = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Accommodation not found')
        }
        return res.json();
      })
      .then((data) => {
        if (!data || !data.pictures) {
          setNotFound(true);
        } else {
          setAccommodation(data)
        }
      })
      .catch((err) => {
        console.error('Erreur :', err)
        setNotFound(true);
      })
      .finally(() => setIsLoading(false))
  }, [id]);

  if (isLoading) {
    return <div>Chargement...</div>
  }

  if (notFound) {
    return <Navigate to="*" />
  }


  return (
    <>
      <Slideshow pictures={accommodation.pictures} />
      <div className="accommodation-page">
        <div className="left">
          <h1>{accommodation.title}</h1>
          <p>{accommodation.location}</p>
          <div className="tags">
            {accommodation.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="host-info">
            <p>{accommodation.host.name}</p>
            <img
              src={accommodation.host.picture}
              alt={accommodation.host.name} />
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} style={{ color: i < accommodation.rating ? '#ff6060' : '#e3e3e3' }}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="dropdown-accommodation">
        <div className="dropdown-wrapper" style={{ display: 'flex' }}>
          <div className="dropdown-box" >
            <Dropdown
              title="Description"
              content={<p>{accommodation.description} </p>}
            />
          </div>
          <div className="dropdown-box" >
            <Dropdown
              title="Équipements"
              content={
                <ul>
                  {accommodation.equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accommodation











