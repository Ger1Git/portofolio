import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Career from './components/Career';
import Projects from './components/Projects';
import Contact from './components/ContactForm';
import Lenis from 'lenis';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

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
