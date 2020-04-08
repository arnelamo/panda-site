import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaAlignRight, FaTimes } from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  const itemClasses = toggle ? 'item active' : 'item'
  const icon = toggle ? <FaTimes /> : <FaAlignRight /> 

  return (
    <nav>
      <ul className="menu">
        <li className="logo"><h3><Link to="/">Sigrid & Pappa</Link></h3></li>
        <li className={itemClasses}><Link to="/my-files">Filer</Link></li>
        <li className={itemClasses}><Link to="/about">Om Oss</Link></li>
        <li className="toggle"><button onClick={toggleMenu}>{icon}</button></li>
      </ul>
    </nav>
  )
}

export default Navbar