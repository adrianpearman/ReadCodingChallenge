import React, { Component } from 'react'
import { } from 'react-redux'
import InputElement from './InputElement'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      emailError: null,
      passwordError: null,
    }

    this.onEmallInput = this.onEmallInput.bind(this)
    this.onPasswordInput = this.onPasswordInput.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onEmallInput = (event) => { this.setState({ email: event.target.value }) }
  onPasswordInput = (event) => { this.setState({ password: event.target.value }) }

  onFormSubmit = (event) => {
    event.preventDefault()
    const userInfo = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(userInfo)
  }

  render() {
    return (
      <div className='mt-4'>
        <div className="form-group col-8 offset-2">
          <InputElement
            name='Email address'
            type='text'
            labelName='userEmailInput'
            placeholder='Enter your email address'
            errorMessage="Sorry, that email's taken. Try another?"
          />
          <InputElement
            name='Password'
            type='password'
            labelName='userPasswordInput'
            placeholder='Create a password'
            errorMessage="Sorry, that username's taken. Try another?"
          />
          <button
            className='btn btn-primary'
            onClick={this.onFormSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default Login