import React from 'react'
import "./mailList.css"

const MailList = () => {
  return (
    <div className='mail'>
      <div className="mailList">
        <h1 className="mailTitle">Save time, save money!</h1>
        <span className="mailText">Sign up and we'll send the best deals to you</span>
        <div className="mailItem">
          <input type="text" placeholder='Your email address' className="mailInput" />
          <button className="mailBtn">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default MailList