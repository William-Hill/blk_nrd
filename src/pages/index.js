import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
// var FontAwesome = require('react-fontawesome')
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGhost)

export default class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section class="hero is-fullheight has-bg-img">
          <div class="hero-body">
            <div class="container" id="main_content">
              <div class="columns is-pulled-left">
                <div class="column">
                  <span class="title has-text-light is-size-1" id="page_title">
                    The Blk Nrd
                  </span>
                </div>
            </div>
              <div class="columns is-pulled-right">
                <div class="column">
                    <a href="https://www.facebook.com/theblknrd/?modal=admin_todo_tour"><FontAwesomeIcon className="social_icon" icon={['fab', 'facebook']} size="4x" color="white"/></a>
                </div>
                <div class="column">
                  <a href="https://www.instagram.com/theblknrd/?hl=en"><FontAwesomeIcon className="social_icon" icon={['fab', 'instagram']} size="4x" color="white"/></a>
                </div>
                <div class="column">
                  <a href="https://twitter.com/theblknrd"><FontAwesomeIcon className="social_icon" icon={['fab', 'twitter']} size="4x" color="white"/></a>
                </div>
                <div class="column">
                  <a href="https://www.youtube.com/channel/UCtrsF6jWS8_qG7mqwrD85JQ?view_as=subscriber"><FontAwesomeIcon className="social_icon" icon={['fab', 'youtube']} size="4x" color="white"/></a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>

    )
  }
}
