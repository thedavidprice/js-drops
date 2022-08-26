import { render } from '@redwoodjs/testing/web'

import TeamPage from './TeamPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TeamPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeamPage />)
    }).not.toThrow()
  })
})
