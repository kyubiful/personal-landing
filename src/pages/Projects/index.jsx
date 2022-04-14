import { Title } from '../../components/Title/index.jsx'
import { Markup } from '../../components/Markup/index.jsx'
import { ProjectCard } from '../../components/ProjectCard/index.jsx'

const PROJECTS = [
  {
    name: 'Coach Web',
    text: 'Aplicación web para ofrecer servicios de coach personal y ejecutivo con un blog personal.',
    gitHubUrl: '',
    webUrl: '',
    technologies: [
      'ReactJS',
      'MongoDB',
      'Express',
      'TailwindCSS',
      'Vercel'
    ]
  },
  {
    name: 'Coach Web',
    text: 'Aplicación web para ofrecer servicios de coach personal y ejecutivo con un blog personal.',
    gitHubUrl: '',
    webUrl: '',
    technologies: [
      'ReactJS',
      'MongoDB',
      'Express',
      'TailwindCSS',
      'Vercel'
    ]
  },
  {
    name: 'Coach Web',
    text: 'Aplicación web para ofrecer servicios de coach personal y ejecutivo con un blog personal.',
    gitHubUrl: '',
    webUrl: '',
    technologies: [
      'ReactJS',
      'MongoDB',
      'Express',
      'TailwindCSS',
      'Vercel'
    ]
  },
  {
    name: 'Coach Web',
    text: 'Aplicación web para ofrecer servicios de coach personal y ejecutivo con un blog personal.',
    gitHubUrl: '',
    webUrl: '',
    technologies: [
      'ReactJS',
      'MongoDB',
      'Express',
      'TailwindCSS',
      'Vercel'
    ]
  }
]

export const Projects = () => {
  return (
    <div className="pt-16 pb-6 h-auto flex flex-col">
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="<html>" className="pl-10" />
          <Markup text="<body>" className="pl-12" />
        </div>
        <div>
          <Markup text="<div>" className="pl-14" />
          <Markup text="<h1>" className="pl-16" />
        </div>
      </div>
      <div className="flex flex-col h-auto max-w-6xl w-full m-auto pr-6 pl-6">
        <Title title="Proyectos" />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <Markup text="</h1>" className="pl-16" />
          <Markup text="<div>" className="pl-16" />
        </div>
      </div>
      {
        PROJECTS.map((project, index) => {
          if (index !== 0) {
            return (
              <>
                <div className="flex flex-col justify-between">
                  <div>
                    <Markup text="<div>" className="pl-20" />
                  </div>
                </div>
                <div className="flex flex-col h-auto max-w-6xl w-full m-auto pr-6 pl-6">
                  <ProjectCard key={index} index={index} name={project.name} text={project.text} gitHubUrl={project.gitHubUrl} webUrl={project.webUrl} technologies={project.technologies} />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <Markup text="</div>" className="pl-20" />
                  </div>
                </div>
              </>
            )
          }
          return (
            <>
              <div className="flex flex-col justify-between">
                  <div>
                    <Markup text="<div>" className="pl-20" />
                  </div>
                </div>
              <div className="flex flex-col h-auto max-w-6xl w-full m-auto pr-6 pl-6">
                <ProjectCard key={index} index={index} name={project.name} text={project.text} gitHubUrl={project.gitHubUrl} webUrl={project.webUrl} technologies={project.technologies} />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <Markup text="</div>" className="pl-20" />
                </div>
              </div>
            </>
          )
        })
      }
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="</div>" className="pl-16" />
          <Markup text="</div>" className="pl-14" />
        </div>
        <div>
          <Markup text="</body>" className="pl-12" />
          <Markup text="</html>" className="pl-10" />
        </div>
      </div>
    </div>
  )
}
