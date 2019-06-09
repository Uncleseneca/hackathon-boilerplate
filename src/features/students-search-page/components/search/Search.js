import React from 'react'
import { Form as AntForm, Button, InputNumber, Slider, Select } from 'antd'
import { useForm } from './hooks/useForm'
import { universities } from './universities'
import { skills } from './skills'

const { Option } = Select

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

const SearchForm = ({
  form: { getFieldDecorator, getFieldsError, validateFields }
}) => {
  // Only show error after a field is touched.
  const { handleSubmit } = useForm(validateFields)

  return (
    <AntForm layout="vertical" onSubmit={handleSubmit}>
      <AntForm.Item label="Рейтинг">
        {getFieldDecorator('rating')(
          <Slider range min={0} max={100} defaultValue={[60, 85]} />
        )}
      </AntForm.Item>
      <AntForm.Item label="Возраст">
        {getFieldDecorator('age')(
          <Slider range min={10} max={50} defaultValue={[20, 25]} />
        )}
      </AntForm.Item>
      <AntForm.Item label="Университет">
        {getFieldDecorator('university')(
          <Select>
            {universities.map(university => (
              <Option key={university} value={university}>
                {university}
              </Option>
            ))}
          </Select>
        )}
      </AntForm.Item>
      <AntForm.Item label="Навыки">
        {getFieldDecorator('university')(
          <Select mode="multiple">
            {skills.map(skill => (
              <Option key={skill} value={skill}>
                {skill}
              </Option>
            ))}
          </Select>
        )}
      </AntForm.Item>
      <AntForm.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={hasErrors(getFieldsError())}
        >
          Искать
        </Button>
      </AntForm.Item>
    </AntForm>
  )
}

export const Search = AntForm.create({ name: 'search' })(SearchForm)
