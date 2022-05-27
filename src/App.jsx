import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index.jsx'
import { About } from './pages/About/index.jsx'
import { Experience } from './pages/Experience/index.jsx'
import { Projects } from './pages/Projects/index.jsx'
import { Contact } from './pages/Contact/index.jsx'
import { Navbar } from './components/Navbar/index.jsx'
import { NavbarMobile } from './components/NavbarMobile/index.jsx'
import { BurgerMenu } from './components/BurgerMenu/index.jsx'
import { useState } from 'react'

function App () {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
    if (screenWidth > 1024 && menuMobileIsOpen === true) {
      setMenuMobileIsOpen(false)
    }
  })

  const toggleMenu = () => {
    setMenuMobileIsOpen(!menuMobileIsOpen)
  }

  return (
    <div className="App">
      <div className="bg-slate-900 text-slate-200 w-screen h-auto font-cascadia ">
        <header>
          { screenWidth < 1024 && <div onClick={() => toggleMenu()} className="fixed top-0 left-auto right-0 z-10"><BurgerMenu menuState={menuMobileIsOpen} /></div>}
          { screenWidth > 1024 ? <Navbar className='fixed bg-slate-900 z-40 w-full h-10 border-t border-slate-700'/> : <NavbarMobile setMenuMobileIsOpen={setMenuMobileIsOpen} menuMobileIsOpen={menuMobileIsOpen} isActive={menuMobileIsOpen}/>}
        </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </div>
  )
}

export default App
