import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { TextGradient } from './index.jsx'

test('render TextGradient component correctly', () => {
  const title = 'Test'
  const className = 'test'
  const el = render(<TextGradient text={title} className={className}/>)
  el.getByText('Test')
  expect(el.getByText('Test').classList.contains('test')).toBe(true)
})
