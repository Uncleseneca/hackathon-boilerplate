import React, { useEffect } from 'react'
import { Form as AntForm, Icon, Input, Button } from 'antd'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

const LoginForm = ({
  form: {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched,
    validateFields
  }
}) => {
  // Only show error after a field is touched.
  const emailError = isFieldTouched('email') && getFieldError('email')
  const passwordError = isFieldTouched('password') && getFieldError('password')
  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  useEffect(() => {
    validateFields()
    // eslint-disable-next-line
  }, [])

  return (
    <AntForm layout="vertical" onSubmit={handleSubmit}>
      <AntForm.Item
        validateStatus={emailError ? 'error' : ''}
        help={emailError || ''}
      >
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Введите email!' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="email"
          />
        )}
      </AntForm.Item>
      <AntForm.Item
        validateStatus={passwordError ? 'error' : ''}
        help={passwordError || ''}
      >
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Введите пароль!' }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </AntForm.Item>
      <AntForm.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={hasErrors(getFieldsError())}
        >
          Log in
        </Button>
      </AntForm.Item>
    </AntForm>
  )
}

export const Form = AntForm.create({ name: 'login' })(LoginForm)
