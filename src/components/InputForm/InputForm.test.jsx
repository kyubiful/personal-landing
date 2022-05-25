import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { InputForm } from './index.jsx'

test('render InputForm component correctly', () => {
  const data = {
    name: 'text',
    placeholder: 'placeholder',
    type: 'submit'
  }
  const el = render(
    <InputForm
      type={data.type}
      placeholder={data.placeholder}
      name={data.name}
    />
  )

  expect(el.container.getElementsByTagName('input')[0].getAttribute('type')).toBe('submit')
  expect(el.container.getElementsByTagName('input')[0].getAttribute('placeholder')).toBe('placeholder')
  expect(el.container.getElementsByTagName('input')[0].getAttribute('name')).toBe('text')
})
