import { expect, it, beforeEach, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCardLeft } from './index.jsx'

describe('render ProjectCarLeft component', () => {
  beforeEach(() => {
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

    render(
      <ProjectCardLeft
        text={project.text}
        name={project.name}
        gitHubUrl={project.gitHubUrl}
        webUrl={project.webUrl}
        technologies={project.technologies}
      />
    )
  })

  it('render project name', () => {
    expect(screen.getByText('Coach Web')).toBeInTheDocument()
  })

  it('render project info', () => {
    expect(screen.getByText('Aplicación web para ofrecer servicios de coach personal y ejecutivo con un blog personal.')).toBeInTheDocument()
  })

  it('render technologies list', () => {
    expect(screen.getByText('ReactJS')).toBeInTheDocument()
    expect(screen.getByText('Vercel')).toBeInTheDocument()
  })

  it('render webUrl', () => {
    expect(screen.getByTestId('webUrl').getAttribute('href')).toBe('kyubi.dev')
  })

  it('render gitHubUrl', () => {
    expect(screen.getByTestId('gitHubUrl').getAttribute('href')).toBe('github.com/kyubiful')
  })
})
