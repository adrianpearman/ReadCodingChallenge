import React, { Component } from 'react'
import {} from 'react-redux' 
import InputElement from './InputElement'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
      nameError: null,
      emailError: null,
      passwordError: null,
      confirmPasswordError: null
    }

    this.onNameInput = this.onNameInput.bind(this)
    this.onEmallInput = this.onEmallInput.bind(this)
    this.onPasswordInput = this.onPasswordInput.bind(this)
    this.onConfirmPasswordInput = this.onConfirmPasswordInput.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onNameInput = (event) => {this.setState({name: event.target.value})}
  onEmallInput = (event) => {this.setState({email: event.target.value})}
  onPasswordInput = (event) => {this.setState({password: event.target.value})}
  onConfirmPasswordInput = (event) => {this.setState({confirmPassword: event.target.value})}
    

  onFormSubmit = (event) => {
    event.preventDefault()
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }
    console.log(newUser)
  }

  render() {
    return (
      <div className='mt-4'>
        <div className="form-group col-8 offset-2">
          <InputElement 
            name='Name'
            type='text'
            labelName='userNameInput'
            placeholder='Enter your name'
            errorMessage="Sorry, that username's taken. Try another?"
            inputFunction={this.onNameInput}
          />
          <InputElement 
            name='Email address'
            type='email'
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
          <InputElement 
            name='Confirm Password'
            type='password'
            labelName='userPasswordInputConfirm'
            placeholder='Confirm your password'
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

export default Register
