import './App.css'
import Project from './components/project'
import About from './components/about';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;