import { Breadcrumb } from 'antd'
import cx from 'classnames'
import * as React from 'react'
import ActiveLink from './ActiveLink'
import styles from './Navigation.module.css'
import { values } from './values'

export const Navigation = ({ className }) => {
  return (
    <nav className={cx(styles.nav, className)}>
      <Breadcrumb separator="">
        {values.map(value => (
          <Breadcrumb.Item key={value.name}>
            <ActiveLink href={value.href}>{value.name}</ActiveLink>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </nav>
  )
}
