import * as React from 'react'
import Header from '../../features/header'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div id="layout" className={styles.root}>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
