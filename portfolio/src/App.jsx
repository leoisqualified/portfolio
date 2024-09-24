import './App.css'
import Project from './components/project'
import About from './components/about';

function App() {
  return (
    <div className='App'>
      <About />
      <section id='projects'>
        <h1>Projects</h1>
        <Project title='#'
        description='#'
        link='#'/>
        <Project title='#'
        description='#'
        link='#'/>
        <Project title='#'
        description='#'
        link='#'/>
      </section>
    </div>
  );
}

export default App;