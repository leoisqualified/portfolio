import './App.css'
import Project from './components/project'
import About from './components/about';
import Navbar from './components/navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
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