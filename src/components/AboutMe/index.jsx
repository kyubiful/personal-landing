export const AboutMe = () => {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-3xl min-w-max">Sobre mi</h1>
        <div className="ml-2 h-0.5 max-w-xs w-full bg-slate-200"/>
      </div>
      <div className="flex justify-between items-center">
        <div className="max-w-md w-full">
          <p>
            Mi nombre es Sergio Zabala, y soy un desarrollador web residente en Madrid, España.
            Tengo una gran pasión por el desarrollo de software.
          </p>
          <p className="mt-4">
            Aficionado a los videojuegos️ y la música.
          </p>
        </div>
        <div className="relative w-52 h-52 group flex justify-end">
          <div className="absolute mr-0 ml-auto w-52 h-52 inset-0.5 group-hover:inset-0 dark:group-hover:inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 opacity-50 group-hover:opacity-60 transition duration-900 rounded-full blur">
          </div>
          <img className="transform transition-all rounded-full w-52 h-52 p-1" src="assets/img/avatar.jpg"/>
        </div>
      </div>
    </>
  )
}
