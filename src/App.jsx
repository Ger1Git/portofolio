import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Career from './components/Career';
import Projects from './components/Projects';
import Contact from './components/ContactForm';

function App() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center text-white gap-[50px] lg:gap-[100px]'>
                <AboutMe />
                <Skills />
                <Career />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default App;
