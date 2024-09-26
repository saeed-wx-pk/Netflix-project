import React from 'react'
import './Navbar.css'
import downIcon from '../../icons/down.svg';

function Navbar() {
  
  return (
    <div>
      <header class="netflix-header">
      <img className='logo' src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png" alt="Logo" />
        <div class="buttons">
          <button class="language-button">EN  <img src={downIcon} alt=""  /></button>
          <button class="sign-in-button">Sign In</button>
        </div>
      </header>
    </div>
    
  )
}

export default Navbar
