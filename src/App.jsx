import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Skills from "./components/Skills";
import Accomplishments from "./components/Accomplishments";

const removeInputs = () => {
  const leftInputs = document.querySelectorAll('.left-inputs');
  leftInputs.forEach((input) => input.classList.add('invisible'));
}

const editInputs = () => {
  const leftInputs = document.querySelectorAll('.left-inputs');
  leftInputs.forEach((input) => input.classList.remove('invisible'))
}

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
        <div className="final-button-container">
          <button onClick={removeInputs} className="complete-resume">Complete Resume</button>
          <button onClick={editInputs} className="edit-resume">Edit Resume</button>
        </div>
      </div>
    </>
  )
}

export default App
