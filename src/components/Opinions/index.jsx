import { OpinionCard } from '../OpinionCard/index.jsx'

const OPINION_LIST = [
  {
    name: 'David Jimenez',
    company: 'ESL Spain',
    text: 'Sergio es una persona asdasd asdasd asdasdasda asdasdasd',
    url: 'https://esl.gg'
  },
  {
    name: 'Iván ...',
    company: 'MistMeals',
    text: 'Sergio es una persona asdasd asdasd asdasdasda asdasdasd',
    url: 'https://mistmeals.com'
  },
  {
    name: 'Héctor Ramón',
    company: 'Play Generations',
    text: 'Sergio es una persona asdasd asdasd asdasdasda asdasdasd',
    url: 'https://playgenerations.com'
  },
  {
    name: 'Otra Persona',
    company: 'Otra compañía',
    text: 'Sergio no es una persona asdasd asdasd asdasdasda asdasdasd',
    url: 'https://google.es'
  }
]

export const Opinions = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {
        OPINION_LIST.map((opinion, index) => {
          return <OpinionCard key={index} name={opinion.name} company={opinion.company} text={opinion.text}/>
        })
      }
    </div>
  )
}
