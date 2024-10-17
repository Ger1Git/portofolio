import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Career from './components/Career';
import Projects from './components/Projects';

function App() {
    return (
        <div className='flex flex-col justify-center text-white'>
            <Navbar />
            <AboutMe />
            <Skills />
            <Career />
            <Projects />
        </div>
    );
}

export default App;
