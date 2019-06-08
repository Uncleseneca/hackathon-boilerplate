import { useEffect } from 'react'
import { useThunk } from '@breadhead/thunk-utils'
import { signInAction } from 'domain/user/actions/signInAction'

export function useForm(isFieldTouched, getFieldError, validateFields) {
  const dispatch = useThunk()
  const emailError = isFieldTouched('email') && getFieldError('email')
  const passwordError = isFieldTouched('password') && getFieldError('password')
  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        dispatch(signInAction(values.email, values.password))
        console.log('Received values of form: ', values)
      }
    })
  }
  useEffect(() => {
    validateFields()
  }, [])
  return { handleSubmit, emailError, passwordError }
}
