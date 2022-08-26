import { render } from '@redwoodjs/testing/web'

import TeamMember from './TeamMember'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TeamMember', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamMember />)
    }).not.toThrow()
  })
})
