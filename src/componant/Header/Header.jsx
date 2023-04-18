import React from 'react'
import Logo from '../../assets/Logo.png'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
<img src={Logo} alt="" className='Logo' />

<ul className='header-menu'>
    <li>Home</li>
    <li>Program</li>
    <li>Why us</li>
    <li>Plans</li>
    <li>Testimonial</li>
</ul>
    </div>
  )
}

export default Header
