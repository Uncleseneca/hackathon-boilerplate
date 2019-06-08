import { Breadcrumb } from 'antd'
import cx from 'classnames'
import * as React from 'react'
import ActiveLink from './ActiveLink'
import s from './Navigation.module.css'
import { values } from './values'
import Link from 'redux-first-router-link'

export const Navigation = ({ className }) => {
  return (
    <nav className={cx(s.nav, className)}>
      <Link to="/">
        <h1 className={s.logo}>Сложнотрон</h1>
      </Link>
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
