import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LineWorkText } from './index.jsx'

describe('render LineWorkText component', () => {
  beforeEach(() => {
    const job = {
      jobName: 'Job name',
      company: 'Company name',
      start: '2021',
      end: '2022'
    }

    render(
      <LineWorkText
        jobName={job.jobName}
        company={job.company}
        start={job.start}
        end={job.end}
      />
    )
  })

  it('render job name', () => {
    expect(screen.getByText('Job name')).toBeInTheDocument()
  })

  it('render company name', () => {
    expect(screen.getByText('Company name')).toBeInTheDocument()
  })

  it('render start and end year', () => {
    expect(screen.getByText('2021 - 2022')).toBeInTheDocument()
  })
})
