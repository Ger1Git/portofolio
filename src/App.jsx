import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
    return (
        <div className='flex flex-col justify-center text-white'>
            <Navbar />
            <AboutMe />
            <Skills />
        </div>
    );
}

export default App;
