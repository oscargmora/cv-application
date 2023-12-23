import './App.css'
import Personal from './components/personal/Personal'
import Education from './components/education/Education'
import Work from './components/work/Work'
import Leadership from './components/leadership/Leadership'
import Skills from './components/skills/Skills'
import Accomplishments from './components/accomplishments/Accomplishments'

function App() {
  return (
    <>
      <div>
        <Personal />
        <Education />
        <Work />
        <Leadership />
        <Skills />
        <Accomplishments />
      </div>
    </>
  )
}

export default App
