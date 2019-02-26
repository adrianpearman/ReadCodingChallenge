import React, { Component } from 'react'
import {} from 'react-redux'
import InputElement from './InputElement'

class AddPost extends Component {
  render() {
    return (
        <div className='mt-4'>
            <h2 className='my-5' style={{textAlign: 'center'}}>Add a new post</h2>
            <div className="form-group col-8 offset-2">
                <InputElement
                    name='Image Title'
                    type='text'
                    labelName='newPostTitle'
                    placeholder='Enter a title for the image'
                    errorMessage="Sorry, that username's taken. Try another?"
                />
                <InputElement
                    name='Image Link'
                    type='text'
                    labelName='newPostImageLink'
                    placeholder='Enter a link to the image'
                    errorMessage="Sorry, that email's taken. Try another?"
                />
                <button
                    className='btn btn-primary'
                    // onClick={this.onFormSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    )
  }
}

export default AddPost