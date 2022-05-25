import { test } from 'vitest'
import { render } from '@testing-library/react'
import { LineWorkText } from './index.jsx'

test('render LineWorkText component correctly', () => {
  const job = {
    jobName: 'Job name',
    company: 'Company name',
    start: '2021',
    end: '2022'
  }

  const el = render(
    <LineWorkText
      jobName={job.jobName}
      company={job.company}
      start={job.start}
      end={job.end}
    />
  )

  el.getByText('Job name')
  el.getByText('Company name')
  el.getByText('2021 - 2022')
})
