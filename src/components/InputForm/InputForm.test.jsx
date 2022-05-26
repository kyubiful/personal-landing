import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InputForm } from './index.jsx'

describe('render InputForm component', () => {
  beforeEach(() => {
    const data = {
      name: 'text',
      placeholder: 'placeholder',
      type: 'submit'
    }
    render(
      <InputForm
        type={data.type}
        placeholder={data.placeholder}
        name={data.name}
      />
    )
  })

  it('render type attribute', () => {
    expect(screen.getByTestId('inputForm').getAttribute('type')).toBe('submit')
  })

  it('render placeholder', () => {
    expect(screen.getByTestId('inputForm').getAttribute('placeholder')).toBe('placeholder')
  })

  it('render name attribute', () => {
    expect(screen.getByTestId('inputForm').getAttribute('name')).toBe('text')
  })
})
