import { it, expect, describe, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tab } from './index.jsx'
import { BrowserRouter } from 'react-router-dom'

describe('Testing Tab component', () => {
  beforeEach(() => {
    const to = 'test'
    render(
      <Tab to={to} >
        Test.jsx
        <p>Test2</p>
      </Tab>,
      { wrapper: BrowserRouter }
    )
  })

  it('render tab name', () => {
    expect(screen.getByText('Test.jsx'))
  })

  it('render tab with url', () => {
    expect(screen.getByText('Test.jsx')).toHaveAttribute('href', '/test')
  })

  it('render tab children', () => {
    expect(screen.getByText('Test.jsx').innerHTML).equals('Test.jsx<p>Test2</p>')
  }
  )
})
