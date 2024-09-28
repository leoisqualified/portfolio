import './App.css'
import Project from './components/project'
import About from './components/about';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Contact from './components/contact';
import Certificates from './components/certifications';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;