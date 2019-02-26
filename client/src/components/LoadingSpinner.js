import React from 'react'
import '../style/loading.css'

export default function LoadingSpinner() {
  return (
      <div className='mr-auto ml-auto my-5 spinner'>
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
  )
}
