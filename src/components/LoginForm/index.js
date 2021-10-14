// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {errorMsg} = this.state
    this.setState({
      errorMsg: '',
      username: '',
      password: '',
    })
    const {history} = this.props
    history.replace('/')
  }

  onChangingUsername = event => {
    const {username} = this.state
    this.setState({
      username: event.target.value,
    })
  }

  onChangingPassword = event => {
    const {password} = this.state
    this.setState({
      password: event.target.value,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password, errorMsg} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        errorMsg: '*username is not found',
      })
    }
  }

  render() {
    const {errorMsg, username, password} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="loginpage-img"
        />
        <div className="login-form">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="websiteLogo"
          />
          <form className="form-element" onSubmit={this.submitForm}>
            <label className="forlabel">
              USERNAME <br />
              <input
                type="text"
                placeholder="Username"
                className="inputEl"
                onChange={this.onChangingUsername}
                value={username}
              />
            </label>
            <br />
            <label className="forlabel">
              PASSWORD <br />
              <input
                type="password"
                placeholder="Password"
                className="inputEl"
                onChange={this.onChangingPassword}
                value={password}
              />
            </label>
            <button type="submit" className="loginButton">
              Login
            </button>
            <p className="errorMsg">{errorMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
