function Banner({ imageUrl, text }) {
  return (
    <div className="div-banner">
      <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default Banner