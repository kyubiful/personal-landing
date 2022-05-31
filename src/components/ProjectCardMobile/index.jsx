import { TextGradient } from '../TextGradient/index.jsx'
import { GitHubLogo } from '../Logos/GitHubLogo.jsx'
import { LinkIcon } from '../Icons/LinkIcon.jsx'

export const ProjectCardMobile = ({ className, index, name, text, gitHubUrl, webUrl, technologies = [], imageUrl }) => {
  return (
    <div className={ 'flex flex-col h-96 justify-center items-center ' + className}>
      <TextGradient text={name} className="text-lg" />
      <div className="max-w-sm relative w-full group p-1 h-52">
          <div className="absolute inset-0.5 group-hover:inset-0 dark:inset-1 dark:group-hover:inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 opacity-50 group-hover:opacity-60 transition duration-900 rounded-xl blur"/>
          <img src={imageUrl} className="transform transition-all rounded-xl w-full bg-slate-400 h-full grayscale hover:grayscale-0" />
        </div>
        <div className="flex flex-col items-start justify-center w-auto -mt-20 max-w-sm items-center p-4">
          <div className="flex flex-col items-end">
            <div className="px-4 py-3 m-auto h-28 max-w-lg w-full bg-slate-600 rounded-xl flex flex-col justify-between z-20">
              <p className="max-w-md text-xs w-full">{text}</p>
              <div className="flex justify-end items-center w-full gap-2">
                <a data-testid="gitHubUrl" className="focus:outline-none" href={gitHubUrl} rel="noreferrer" target="_blank">
                  {gitHubUrl !== '' && <GitHubLogo className="fill-slate-200 w-6 hover:fill-white transition" />}
                </a>
                <a data-testid="webUrl" className="focus:outline-none" href={webUrl} rel="noreferrer" target="_blank">
                  {webUrl !== '' && <LinkIcon className="fill-slate-200 w-6 hover:fill-white transition" />}
                </a>
              </div>
            </div>
            <div className="flex text-xs gap-2 p-2">
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
