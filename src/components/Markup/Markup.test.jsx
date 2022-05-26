import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Markup } from './index.jsx'

describe('render Markup component', () => {
  it('render text', () => {
    const text = 'h1'
    render(<Markup text={text} />)
    expect(screen.getAllByText('h1').length).toBe(2)
    expect(screen.getAllByText('h1')[0]).toBeInTheDocument()
    expect(screen.getAllByText('h1')[1]).toBeInTheDocument()
  })
})
