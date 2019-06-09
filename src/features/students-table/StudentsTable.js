import React from 'react'

import { Table } from 'antd'
import { columns } from './columns'
import { useMappedState } from 'redux-react-hook'
import { selectList } from 'domain/student/selectors/selectList'

export const StudentsTable = () => {
  const students = useMappedState(selectList)
  console.log(students.slice(5))

  return (
    <div>
      <Table columns={columns} dataSource={students} />
    </div>
  )
}
