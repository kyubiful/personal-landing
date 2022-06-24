import { Title } from '../../components/Title/index.jsx'
import { Markup } from '../../components/Markup/index.jsx'
import { ProjectCards } from '../../components/ProjectCards/index.jsx'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

export const Projects = () => {
  const [t] = useTranslation('global')

  const PROJECTS = t('projects.projects', { returnObjects: true })

  return (
    <>
      <Helmet>
        <title>Sergio Zabala 🧑🏻‍💻 | Projects</title>
        <meta name="description" content={t('projects.pageDescription')} />
      </Helmet>
      <div className="pb-2 pt-2 lg:pt-12 lg:pb-2 h-full flex flex-col">
        <div className="h-40 flex flex-col justify-between">
          <div>
            <Markup text="<html>" className="pl-1 lg:pl-10" />
            <Markup text="<body>" className="pl-3 lg:pl-12" />
          </div>
          <div>
            <Markup text="<section>" className="pl-5 lg:pl-14" />
            <Markup text="<h1>" className="pl-7 lg:pl-16" />
          </div>
        </div>
        <div className="flex flex-col h-auto max-w-5xl w-full m-auto pr-6 pl-6 animate-fade-in">
          <Title text={t('projects.title')} />
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
                  <div className="flex flex-col h-auto max-w-6xl w-full m-auto pr-6 pl-6 pt-4 pb-4 animate-fade-in">
                    <ProjectCards index={index} name={project.name} text={project.text} gitHubUrl={project.gitHubUrl} webUrl={project.webUrl} technologies={project.technologies} imageUrl={project.imageUrl} />
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
                <div className="flex flex-col h-auto max-w-6xl w-full m-auto pr-6 pl-6 pt-4 pb-4 animate-fade-in">
                  <ProjectCards index={index} name={project.name} text={project.text} gitHubUrl={project.gitHubUrl} webUrl={project.webUrl} technologies={project.technologies} imageUrl={project.imageUrl} />
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
            <Markup text="</section>" className="pl-5 lg:pl-14" />
          </div>
          <div>
            <Markup text="</body>" className="pl-3 lg:pl-12" />
            <Markup text="</html>" className="pl-1 lg:pl-10" />
          </div>
        </div>
      </div>
    </>
  )
}
