import { GitHubLogo } from '../Logos/GitHubLogo.jsx'
import { TextGradient } from '../TextGradient/index.jsx'

export const ProjectCard = ({ className, index = 0, name, text, gitHubUrl, webUrl, technologies = [] }) => {
  const num = index
  console.log(technologies)
  if (num % 2 === 0) {
    return (
      <div className={ 'flex h-80 justify-center ' + className}>
        <div className="max-w-xl relative w-full group p-1">
          <div className="absolute inset-0.5 group-hover:inset-0 dark:inset-1 dark:group-hover:inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 opacity-50 group-hover:opacity-60 transition duration-900 rounded-xl blur"/>
          <div className="transform transition-all rounded-xl w-full p-1 mb-2 bg-slate-400 h-full">Imagen</div>
        </div>
        <div className="flex flex-col items-start justify-center w-auto -ml-24">
          <div className="flex flex-col items-end">
            <h3 className="text-sm">Proyecto</h3>
            <TextGradient text={name} className="text-lg" />
            <div className="px-4 py-3 m-auto h-28 max-w-lg w-full bg-slate-600 rounded-xl flex flex-col justify-between z-20">
              <p className="max-w-md text-sm w-screen">{text}</p>
              <div className="flex justify-end w-full gap-2">
                <a href={gitHubUrl}>
                  <GitHubLogo className="fill-slate-200 w-6 hover:fill-white transition" />
                </a>
                <a href={webUrl}>
                  <GitHubLogo className="fill-slate-200 w-6 hover:fill-white transition" />
                </a>
              </div>
            </div>
            <div className="flex text-sm gap-2 p-2">
            {
              technologies.map((tech, index) => {
                return <p key={index}>{tech}</p>
              })
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
  if (num % 2 !== 0) {
    return (
      <div className={ 'flex h-80 justify-center ' + className}>
        <div className="flex flex-col items-start justify-center w-auto -mr-24">
          <div className="flex flex-col items-start">
            <h3 className="text-sm">Proyecto</h3>
            <TextGradient text={name} className="text-lg" />
            <div className="px-4 py-3 m-auto h-28 max-w-lg w-full bg-slate-600 rounded-xl flex flex-col justify-between z-20">
              <p className="max-w-md text-sm w-screen">{text}</p>
              <div className="flex justify-end w-full gap-2">
                <a href={gitHubUrl}>
                  <GitHubLogo className="fill-slate-200 w-6 hover:fill-white transition" />
                </a>
                <a href={webUrl}>
                  <GitHubLogo className="fill-slate-200 w-6 hover:fill-white transition" />
                </a>
              </div>
            </div>
            <div className="flex text-sm gap-2 p-2">
            {
              technologies.map((tech, index) => {
                return <p key={index}>{tech}</p>
              })
            }
            </div>
          </div>
        </div>
        <div className="max-w-xl relative w-full group p-1">
          <div className="absolute inset-0.5 group-hover:inset-0 dark:inset-1 dark:group-hover:inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 opacity-50 group-hover:opacity-60 transition duration-900 rounded-xl blur"/>
          <div className="transform transition-all rounded-xl w-full p-1 mb-2 bg-slate-400 h-full">Imagen</div>
        </div>

      </div>
    )
  }
}
