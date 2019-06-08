import { transformGapString } from './transformGapString'

describe('transformTsks works', () => {
  test.skip('should transform', () => {
    const test = "<Task> <Gap  /> <Gap id='aa' taskId='bb' /> <Gap id='cc' taskId='dd' />  </Task>".replace(
      /<Gap(.|\n)?\/>/g,
      transformGapString(1)
    )

    expect(test).toBe(
      "<Task> <Gap taskId='1' id='1'  /> <Gap id='aa' taskId='bb' /> <Gap id='cc' taskId='dd' />  </Task>"
    )
  })
})
