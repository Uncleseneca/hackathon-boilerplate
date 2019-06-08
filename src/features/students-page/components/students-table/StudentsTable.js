import React from 'react'

import { Table } from 'antd'
import { columns } from './columns'
import { useMappedState } from 'redux-react-hook'
import { selectList } from 'domain/student/selectors/selectList'

export const StudentsTable = () => {
  const students = useMappedState(selectList)
  return (
    <div>
      <Table columns={columns} dataSource={students} />
    </div>
  )
}
