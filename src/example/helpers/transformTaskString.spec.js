import { transformTaskString } from './transformTaskString'

describe('transformTsks works', () => {
  test.skip('should add id when id isnt present ', () => {
    const test = `<Task> <Gap  /> <Gap id='aa' taskId='bb' /> <Gap id='cc' taskId='dd' />  </Task>`.replace(
      /<Task(.|\n)+?\/>/g,
      transformTaskString(1)
    )

    expect(test).toBe(
      "<Task taskId='1'> <Gap  /> <Gap id='aa' taskId='bb' /> <Gap id='cc' taskId='dd' />  </Task>"
    )
  })
  test('should not add id when id is present ', () => {
    const test = "<Task taskId='1'> <Gap  /> <Gap id='aa' taskId='bb' /> <Gap id='cc' taskId='dd' />  </Task>".replace(
      /<Task(.|\n)+?\/>/g,
      transformTaskString(1)
    )

    expect(test).toBe(
      "<Task taskId='1'> <Gap  /> <Gap id='aa' taskId='bb' /> <Gap id='cc' taskId='dd' />  </Task>"
    )
  })
})
