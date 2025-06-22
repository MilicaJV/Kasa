import Logofooter from '../../assets/footer-logo.png'


function Footer() {
  return (
    <footer className="footer">
      <div className="div-footer">
        <img src={Logofooter} alt="Logo de footer" className="logoFooter" />
        <p className='par-footer'>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
export default Footer

