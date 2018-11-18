import React from 'react';
import { Link } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';
import logo from '../img/Logo1.png';

library.add(fab);

export default class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section class="hero is-fullheight has-bg-img">
          <div class="hero-body">
            <div class="container" id="main_content">
              <div class="columns is-pulled-left">
                <div id="logo-column" class="column">
                  <Link to="/" id="index_link" className="navbar-item">
                    <figure className="image">
                      <img id="blk_nrd_logo" src={logo} alt="blk_nrd" style={{ width: '400px', height: '400px' }} />
                    </figure>
                  </Link>
                </div>
            </div>
              <div className="columns is-pulled-right">
                <div className="column">
                    <a href="https://www.facebook.com/theblknrd/?modal=admin_todo_tour"><FontAwesomeIcon className="social_icon" icon={['fab', 'facebook']} size="3x" color="white"/></a>
                </div>
                <div className="column">
                  <a href="https://www.instagram.com/theblknrd/?hl=en"><FontAwesomeIcon className="social_icon" icon={['fab', 'instagram']} size="3x" color="white"/></a>
                </div>
                <div className="column">
                  <a href="https://twitter.com/theblknrd"><FontAwesomeIcon className="social_icon" icon={['fab', 'twitter']} size="3x" color="white"/></a>
                </div>
                <div className="column">
                  <a href="https://www.youtube.com/channel/UCtrsF6jWS8_qG7mqwrD85JQ?view_as=subscriber"><FontAwesomeIcon className="social_icon" icon={['fab', 'youtube']} size="3x" color="white"/></a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>

    )
  }
}
