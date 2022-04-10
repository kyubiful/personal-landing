import { OpinionCard } from '../OpinionCard/index.jsx'

export const Opinions = () => {
  return (
    <div className="flex gap-4">
      <OpinionCard name="David Jimenez" company="ESL Spain" text="Sergio es una persona asdasd asdasd asdasdasda asdasdasd"/>
      <OpinionCard name="Iván ..." company="MistMeals" text="Sergio es una persona asdasd asdasd asdasdasda asdasdasd"/>
      <OpinionCard name="Héctor Ramón" company="Play Generations" text="Sergio es una persona asdasd asdasd asdasdasda asdasdasd"/>
      <OpinionCard name="Otra Persona" company="Otra compañia" text="Sergio es una persona asdasd asdasd asdasdasda asdasdasd"/>
    </div>
  )
}
