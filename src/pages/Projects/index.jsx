import { Title } from '../../components/Title/index.jsx'
import { Markup } from '../../components/Markup/index.jsx'
import { ProjectCards } from '../../components/ProjectCards/index.jsx'

const PROJECTS = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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

export const Projects = ({ setMenuMobileIsOpen, menuMobileIsOpen }) => {
  return (
    <div className="pb-2 pt-2 lg:pt-12 lg:pb-2 h-full flex flex-col">
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="<html>" className="pl-1 lg:pl-10" />
          <Markup text="<body>" className="pl-3 lg:pl-12" />
        </div>
        <div>
          <Markup text="<div>" className="pl-5 lg:pl-14" />
          <Markup text="<h1>" className="pl-7 lg:pl-16" />
        </div>
      </div>
      <div className="flex flex-col h-auto max-w-6xl w-full m-auto pr-6 pl-6">
        <Title text="Proyectos" />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <Markup text="</h1>" className="pl-7 lg:pl-16" />
          <Markup text="<div>" className="pl-7 lg:pl-16" />
        </div>
      </div>
      {
        PROJECTS.map((project, index) => {
          if (index !== 0) {
            return (
              <div key={project.id}>
                <div className="flex flex-col justify-between">
                  <div>
                    <Markup text="<div>" className="pl-9 lg:pl-20" />
                  </div>
                </div>
                <div className="flex flex-col h-auto max-w-6xl w-full m-auto pr-6 pl-6">
                  <ProjectCards index={index} name={project.name} text={project.text} gitHubUrl={project.gitHubUrl} webUrl={project.webUrl} technologies={project.technologies} />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <Markup text="</div>" className="pl-9 lg:pl-20" />
                  </div>
                </div>
              </div>
            )
          }
          return (
            <div key={project.id}>
              <div className="flex flex-col justify-between">
                  <div>
                    <Markup text="<div>" className="pl-9 lg:pl-20" />
                  </div>
                </div>
              <div className="flex flex-col h-auto max-w-6xl w-full m-auto pr-6 pl-6">
                <ProjectCards index={index} name={project.name} text={project.text} gitHubUrl={project.gitHubUrl} webUrl={project.webUrl} technologies={project.technologies} />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <Markup text="</div>" className="pl-9 lg:pl-20" />
                </div>
              </div>
            </div>
          )
        })
      }
      <div className="h-40 flex flex-col justify-between">
        <div>
          <Markup text="</div>" className="pl-7 lg:pl-16" />
          <Markup text="</div>" className="pl-5 lg:pl-14" />
        </div>
        <div>
          <Markup text="</body>" className="pl-3 lg:pl-12" />
          <Markup text="</html>" className="pl-1 lg:pl-10" />
        </div>
      </div>
    </div>
  )
}
