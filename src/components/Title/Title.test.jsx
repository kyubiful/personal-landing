import { test } from 'vitest'
import { render } from '@testing-library/react'
import { Title } from './index.jsx'

test('render Title component correctly', () => {
  const text = 'Test'
  const el = render(<Title text={text}/>)
  el.getByText('Test')
})
