import React from 'react'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import logo from '../img/Logo2v2.png'

library.add(fab)


const Navbar = () => {
  const handleClick = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  };
  return (
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img id="blk_nrd_logo" src={logo} alt="blk_nrd_logo" />
            </figure>
          </Link>
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={handleClick}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item is-size-3" to="/about">
              About
            </Link>
            <Link className="navbar-item is-size-3" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
