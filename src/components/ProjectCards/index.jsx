import { ProjectCardLeft } from '../ProjectCardLeft/index.jsx'
import { ProjectCardRight } from '../ProjectCardRight/index.jsx'
import { ProjectCardMobile } from '../ProjectCardMobile/index.jsx'
import { useState } from 'react'

export const ProjectCards = ({ index, name, text, gitHubUrl, webUrl, technologies = [] }) => {
  const [screenWidthProject, setScreenWidthProject] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setScreenWidthProject(window.innerWidth)
  })

  const num = index
  if (num % 2 === 0) {
    if (screenWidthProject > 1024) {
      return (
        <ProjectCardRight name={name} text={text} gitHubUrl={gitHubUrl} webUrl={webUrl} technologies={technologies} />
      )
    } else {
      return (
        <ProjectCardMobile name={name} text={text} gitHubUrl={gitHubUrl} webUrl={webUrl} technologies={technologies} />
      )
    }
  }
  if (num % 2 !== 0) {
    if (screenWidthProject > 1024) {
      return (
        <ProjectCardLeft name={name} text={text} gitHubUrl={gitHubUrl} webUrl={webUrl} technologies={technologies} />
      )
    } else {
      return (
        <ProjectCardMobile name={name} text={text} gitHubUrl={gitHubUrl} webUrl={webUrl} technologies={technologies} />
      )
    }
  }
}
