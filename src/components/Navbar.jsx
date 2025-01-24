import { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion, animate } from 'framer-motion';
import { navigationLinks } from '../utils/constants';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(null);
    const navbarRef = useRef(null);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const topPosition = sectionId === 'about-me' ? 0 : element.getBoundingClientRect().top + window.scrollY;

            animate(window.scrollY, topPosition, {
                type: 'spring',
                stiffness: 80,
                damping: 20,
                onUpdate: (latest) => window.scrollTo(0, latest)
            });
        }
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
            lastScrollY = scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div
                ref={navbarRef}
                className={`sticky top-0 z-50 bg-black bg-opacity-80 transform transition-transform duration-300 ${
                    scrollDirection === 'down' || nav ? '-translate-y-full' : 'translate-y-0'
                }`}
            >
                <motion.div
                    initial={{ y: '-100%' }}
                    animate={{ y: '0%' }}
                    transition={{ type: 'tween', duration: 0.5 }}
                    className='flex justify-between items-center h-[50px] px-4 lg:h-24 lg:px-4 text-gray-500'
                >
                    <button className='text-white text-xl lg:text-3xl whitespace-nowrap' onClick={() => scrollToSection('about-me')}>
                        <span className='w-full font-bold'>George G</span>
                        <span className='text-[#00df9a] font-bold'>.</span>
                    </button>
                    <ul className='hidden lg:flex'>
                        {navigationLinks.map((section, index) => (
                            <li
                                key={index}
                                className={`relative p-4 whitespace-nowrap cursor-pointer hover:text-white ${activeItem === index ? 'text-white' : ''}`}
                                onClick={() => {
                                    scrollToSection(section.id);
                                    setActiveItem(index);
                                }}
                            >
                                {section.text}
                                <motion.div
                                    className='absolute bottom-0 left-0 w-full h-[2px] bg-white origin-center'
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: activeItem === index ? 1 : 0 }}
                                    transition={{ type: 'tween', duration: 0.3 }}
                                    style={{ transformOrigin: 'center' }}
                                />
                            </li>
                        ))}
                    </ul>
                    <div onClick={() => setNav((prevNav) => !prevNav)} className='block lg:hidden'>
                        {!nav && <AiOutlineMenu size={20} color={'#00df9a'} />}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: nav ? 0.8 : 0 }}
                transition={{ duration: 0.3 }}
                className={`fixed inset-0 bg-black backdrop-blur-sm z-10`}
                onClick={() => setNav(false)}
                style={{ pointerEvents: nav ? 'auto' : 'none' }}
            />

            <motion.ul
                initial={{ x: '100%' }}
                animate={{ x: nav ? '0%' : '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className='fixed top-0 right-0 w-[60%] h-full border-l border-l-gray-900 bg-[#000300] shadow-xl shadow-gray-700 z-20 '
            >
                <div className='flex justify-between items-center w-full text-xl lg:text-3xl font-bold text-[#00df9a] p-4'>
                    <h1>My Portfolio</h1>
                    <AiOutlineClose className='cursor-pointer text-white' size={24} onClick={() => setNav(false)} />
                </div>
                {navigationLinks.map((section, index) => (
                    <li
                        key={index}
                        className='p-4 border-b text-white border-gray-600 text-left cursor-pointer text-sm'
                        onClick={() => {
                            setNav(false);
                            scrollToSection(section.id);
                        }}
                    >
                        {section.text}
                    </li>
                ))}
            </motion.ul>
        </>
    );
};

export default Navbar;
