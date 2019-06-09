import React from 'react'
import { head } from 'lodash'
import { Tag, Avatar } from 'antd'
import { format } from 'date-fns'

export const columns = [
  {
    title: 'Фото',
    dataIndex: 'photo',
    render: src => <Avatar icon="user" />
  },

  {
    title: 'Рейтинг',
    dataIndex: 'rating'
  },
  {
    title: 'Университет',
    dataIndex: 'university'
  },
  {
    title: 'Компания',
    dataIndex: 'employer',
    render: employer => <a href="javascript:;">{head(employer)}</a>
  },
  {
    title: 'ФИО',
    dataIndex: 'fullName',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: 'Дата рождения',
    dataIndex: 'birthDate',
    key: 'birthDate',
    render: text => format(new Date(text), 'DD/MM/YYYY')
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
  }
]
