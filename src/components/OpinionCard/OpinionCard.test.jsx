import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OpinionCard } from './index.jsx'

describe('render OpinionCard component', () => {
  beforeEach(() => {
    const opinion = {
      name: 'Project name',
      company: 'Company name',
      text: 'Opinion text',
      companyUrl: 'company.com'
    }

    render(
      <OpinionCard
        name={opinion.name}
        company={opinion.company}
        text={opinion.text}
        companyUrl={opinion.companyUrl}
      />
    )
  })

  it('render project name', () => {
    expect(screen.getByText('Project name')).toBeInTheDocument()
  })

  it('render company name', () => {
    expect(screen.getByText('Company name')).toBeInTheDocument()
  })

  it('render opinion text', () => {
    expect(screen.getByText('“Opinion text”')).toBeInTheDocument()
  })

  it('render company href', () => {
    expect(screen.getByTestId('companyUrl').getAttribute('href')).toBe('company.com')
  })
})
