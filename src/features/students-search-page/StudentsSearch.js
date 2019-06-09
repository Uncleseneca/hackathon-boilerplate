import React from 'react'
import s from './StudentsSearch.module.css'
import { Search } from './components/search'
import { StudentsTable } from 'features/students-table'

export const StudentsSearchPage = () => {
  return (
    <div className={s.main}>
      <div className={s.search}>
        <Search />
      </div>

      <div className={s.result}>
        <StudentsTable />
      </div>
    </div>
  )
}
