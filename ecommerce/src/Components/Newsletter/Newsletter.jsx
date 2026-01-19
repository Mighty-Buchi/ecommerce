import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers Through Your Email</h1>
        <p>Subscribe to our news letter and stay updated.</p>
        <div className="input">
            <input type="email" placeholder='Enter your Email' name="" id="" />
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Newsletter