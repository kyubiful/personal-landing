import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { ProjectCardLeft } from './index.jsx'

test('render ProjectCardLeft correctly', () => {
  const project = {
    id: 0,
    name: 'Coach Web',
    text: 'Aplicación web para ofrecer servicios de coach personal y ejecutivo con un blog personal.',
    gitHubUrl: 'github.com/kyubiful',
    webUrl: 'kyubi.dev',
    technologies: [
      'ReactJS',
      'Vercel'
    ]
  }

  const el = render(
    <ProjectCardLeft 
      text={project.text} 
      name={project.name} 
      gitHubUrl={project.gitHubUrl} 
      webUrl={project.webUrl} 
      technologies={project.technologies}
    />
  )

  el.getByText('Coach Web')
  el.getByText('Aplicación web para ofrecer servicios de coach personal y ejecutivo con un blog personal.')
  el.getByText('ReactJS')
  el.getByText('Vercel')
  expect(el.container.getElementsByTagName('a')[0].getAttribute('href')).toBe('github.com/kyubiful')
  expect(el.container.getElementsByTagName('a')[1].getAttribute('href')).toBe('kyubi.dev')
})
