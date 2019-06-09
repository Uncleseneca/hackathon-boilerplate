import { useThunk } from '@breadhead/thunk-utils'
import { fetchListAction } from 'domain/student/actions/fetchListAction'

export function useForm(validateFields) {
  const dispatch = useThunk()
  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        dispatch(fetchListAction(values))
        console.log('Received values of form: ', values)
      }
    })
  }
  return { handleSubmit }
}
