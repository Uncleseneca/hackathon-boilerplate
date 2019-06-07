import React from 'react'
import Link from 'redux-first-router-link'

const ActiveLink = ({ children, href }) => {
  return <Link to={href}>{children}</Link>
}

export default ActiveLink
