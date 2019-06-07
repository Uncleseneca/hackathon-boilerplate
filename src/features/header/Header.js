import cx from 'classnames'
import * as React from 'react'
import styles from './Header.module.css'
import { Navigation } from 'features/navigation'

const Header = ({ className }) => {
  return (
    <header className={cx(styles.header, className)}>
      <Navigation />
      <nav className={styles.nav} />
    </header>
  )
}

export default Header
