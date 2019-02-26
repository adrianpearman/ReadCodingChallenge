import React from 'react'

const InputElement = (props) => {
  return (
    <div className='mb-3'>
        <label htmlFor={props.labelName}>
            {props.name}:
        </label>
        <input
            type={props.type}
            className={props.errorMessage ? 'form-control is-invalid' : 'form-control'}
            id={props.labelName}
            placeholder={props.placeholder}
            onChange={props.inputFunction}
        />
        {props.errorMessage ? <span className="invalid-feedback">{props.errorMessage}</span> : null}  
    </div>
  )
}



export default InputElement