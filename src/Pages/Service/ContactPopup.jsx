import React from 'react'
import './ContactPopup.css'

function ContactPopup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Contact Details</h2>
        {/* Add your contact details here */}
        <p>Email: advotext8@gmail.com</p>
        <p>Phone: +9471 658 5977</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default ContactPopup