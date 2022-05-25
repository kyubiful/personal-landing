import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Tab } from './index.jsx'
import { BrowserRouter } from 'react-router-dom'

test('render Tab component correctly', () => {
  const to = 'test'
  const el = render(
    <Tab to={to} >
      Test.jsx
    </Tab>,
    { wrapper: BrowserRouter }
  )
  el.getByText('Test.jsx')
  expect(el.container.getElementsByTagName('a')[0].getAttribute('href')).toBe('/test')
})
