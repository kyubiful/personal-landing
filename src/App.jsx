import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index.jsx'
import { About } from './pages/About/index.jsx'
import { Experience } from './pages/Experience/index.jsx'
import { Projects } from './pages/Projects/index.jsx'
import { Contact } from './pages/Contact/index.jsx'
import { Navbar } from './components/Navbar/index.jsx'

function App () {
  return (
    <div className="App">
      <div className="bg-slate-900 text-slate-200 w-screen h-screen font-cascadia">
        <header>
          <Navbar />
        </header>
        <div className="flex justify-center mt-40">
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
    </div>
  )
}

export default App
