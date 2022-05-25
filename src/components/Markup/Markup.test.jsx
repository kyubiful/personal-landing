import { test } from 'vitest'
import { render } from '@testing-library/react'
import { Markup } from './index.jsx'

test('renders Markup component correctly', () => {
  const text = 'h1'

  const el = render(
    <Markup text={text} />
  )

  el.getAllByText('h1')
})
