import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Skills from "./components/Skills";
import Accomplishments from "./components/Accomplishments";

function App() {
  return (
    <>
      <div id="full-page">
        <Personal />
        <Education />
        <Experience />
        <Leadership />
        <Skills />
        <Accomplishments />
      </div>
    </>
  )
}

export default App
