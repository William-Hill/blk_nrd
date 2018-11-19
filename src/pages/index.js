import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import logo from '../img/Logo1v4.png'
import ico from '../img/favicon-32x32.png'


library.add(fab);

export default class IndexPage extends React.Component {
  handleClick() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title="The Blk Nrd" link={[
      { rel: 'shortcut icon', type: 'image/png', sizes: '32x32', href: `${ico}` }
      ]}/>
        <section class="hero is-fullheight has-bg-img">
          <div class="hero-body">
            <nav id="main_content" className="navbar is-transparent">
                <div className="navbar-brand">
                  <Link to="/" className="navbar-item">
                    <figure className="image">
                      <img id="blk_nrd_logo" src={logo} alt="blk_nrd_logo" />
                    </figure>
                  </Link>
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" onClick={this.handleClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
                <div class="navbar-menu">
                  <div class="navbar-end">
                    <Link className="navbar-item has-text-white is-size-3" to="/about">
                      About
                    </Link>
                    <Link className="navbar-item has-text-white is-size-3" to="/blog">
                      Blog
                    </Link>
                  </div>
               </div>
            </nav>
          </div>
          <nav className="level is-mobile social_icon_nav">
            <div class="level-item has-text-centered">
              <div>
                <a href="https://www.facebook.com/theblknrd/?modal=admin_todo_tour"><FontAwesomeIcon className="social_icon" icon={['fab', 'facebook']} size="4x" color="white"/></a>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <a href="https://www.instagram.com/theblknrd/?hl=en"><FontAwesomeIcon className="social_icon" icon={['fab', 'instagram']} size="4x" color="white"/></a>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <a href="https://twitter.com/theblknrd"><FontAwesomeIcon className="social_icon" icon={['fab', 'twitter']} size="4x" color="white"/></a>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <a href="https://www.youtube.com/channel/UCtrsF6jWS8_qG7mqwrD85JQ?view_as=subscriber"><FontAwesomeIcon className="social_icon" icon={['fab', 'youtube']} size="4x" color="white"/></a>
              </div>
            </div>
          </nav>

        </section>
      </React.Fragment>

    );
  }
}
