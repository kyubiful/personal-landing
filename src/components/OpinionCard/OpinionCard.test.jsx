import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { OpinionCard } from './index.jsx'

test('render OpinionCard component correctly', () => {
  const opinion = {
    name: 'Project name',
    company: 'Company name',
    text: 'Opinion text',
    companyUrl: 'company.com'
  }

  const el = render(
    <OpinionCard
      name={opinion.name}
      company={opinion.company}
      text={opinion.text}
      companyUrl={opinion.companyUrl}
    />
  )

  el.getByText('Project name')
  el.getByText('Company name')
  expect(el.container.getElementsByTagName('p')[0].textContent).toBe('“Opinion text”')
  expect(el.container.getElementsByTagName('a')[0].getAttribute('href')).toBe('company.com')
})
