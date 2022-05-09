import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {userid: '', pin: '', showLoginError: false, errorMsg: ''}

  onChangeUserId = event => {
    this.setState({userid: event.target.id})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({showLoginError: true, errorMsg})
  }

  onSubmit = async event => {
    const {userid, pin} = this.state
    event.preventDefault()

    const userDetails = {userid, pin}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const apiUrl = 'https://apis.ccbp.in/ebank/login'

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  renderUserId = () => {
    const {userid} = this.state
    return (
      <div>
        <label htmlFor="user" className="label">
          User Id
        </label>
        <input
          type="text"
          id="user"
          value={userid}
          className="input-element"
          onChange={this.onChangeUserId}
          placeholder="Enter User Id"
        />
      </div>
    )
  }

  renderPin = () => {
    const {pin} = this.state
    return (
      <div>
        <label htmlFor="pin" className="label">
          Pin
        </label>
        <input
          type="text"
          id="pin"
          value={pin}
          className="input-element"
          onChange={this.onChangePin}
          placeholder="Enter Pin"
        />
      </div>
    )
  }

  renderFromElement = () => {
    const {showLoginError, errorMsg} = this.state
    return (
      <>
        <form className="form-container" onSubmit={this.onSubmit}>
          {this.renderUserId()}
          {this.renderPin()}
          <button type="submit">Login</button>
          {showLoginError && <p className="error-message">{errorMsg}</p>}
        </form>
      </>
    )
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-left-side-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            className="login-image"
            alt="website login"
          />
        </div>
        <div className="login-right-side-section">
          <div className="login-card">
            <h1 className="welcome-back">Welcome Back!</h1>
            {this.renderFromElement()}
          </div>
        </div>
      </div>
    )
  }
}
export default Login
