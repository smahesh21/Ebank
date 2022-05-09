import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      className="not-found-image"
      alt="not found"
    />
    <h1 className="heading">Page Not Found</h1>
    <p className="description">
      We are sorry, the page you are requested could not be found
    </p>
  </div>
)
export default NotFound
