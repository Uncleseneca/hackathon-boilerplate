import React from 'react'
import s from './StudentsSearch.module.css'
import { Search } from './components/search'

export const StudentsSearchPage = () => {
  return (
    <div className={s.main}>
      <Search />
    </div>
  )
}
