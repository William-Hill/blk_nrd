import React from 'react'
import Helmet from 'react-helmet'
import ico from '../img/favicon-32x32.png'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="The Blk Nrd" link={[
    { rel: 'shortcut icon', type: 'image/png', sizes: '32x32', href: `${ico}` }
    ]}/>
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
