import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Title } from './index.jsx'

describe('Testing Title component', () => {
  it('render title', () => {
    const text = 'Test'
    render(<Title text={text}/>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
