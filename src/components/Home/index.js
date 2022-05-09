import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="home-container">
      <div className="header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png "
          className="website-logo"
          alt="website logo"
        />
        <button type="button" onClick={onClickLogout} className="logout-button">
          Logout
        </button>
      </div>
      <div className="responsive-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          className="digital-card"
          alt="digital card"
        />
      </div>
    </div>
  )
}
export default Home
