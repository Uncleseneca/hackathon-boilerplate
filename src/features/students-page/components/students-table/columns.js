import React from 'react'
import { Tag, Avatar } from 'antd'

export const columns = [
  {
    title: 'Фото',
    dataIndex: 'photo',
    render: src => <Avatar icon="user" />
  },
  {
    title: 'ФИО',
    dataIndex: 'fullName',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: 'Дата рождения',
    dataIndex: 'birthDate',
    key: 'birthDate'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Скилы',
    key: 'skills',
    dataIndex: 'skills',
    render: tags => (
      <span>
        {tags.map(tag => {
          return (
            <Tag color="green" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </span>
    )
  },
  {
    title: 'Рейтинг',
    dataIndex: 'rating'
  }
]
