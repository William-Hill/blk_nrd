import React from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import logo from '../img/Logo2.png'

library.add(fab)

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img id="navbar_logo" src={logo} alt="blk_nrd_logo" style={{ width: '350px', height: '400px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
