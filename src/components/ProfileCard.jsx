import profilePic from '../public/CV_Image_cut.jpg';
import { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { profileDescription } from '../utils/constants';
import Button from './elements/Button';
import SVG from './elements/SVG';
import linkedIn from '../public/linkedIn.svg';
import github from '../public/github.svg';
import CV from '../public/CV.pdf';

const ProfileCard = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const topPosition = element.offsetTop;
            const navbarHeight = 96;
            const adjustedPosition = sectionId === 'about-me' ? topPosition - navbarHeight : topPosition;

            animate(window.scrollY, adjustedPosition, {
                type: 'spring',
                stiffness: 40,
                damping: 30,
                onUpdate: (latest) => window.scrollTo(0, latest)
            });
        }
    };

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = profileDescription[currentWordIndex];
            const currentWordArray = Array.from(currentWord);

            if (isDeleting) {
                setDisplayedText((prev) => Array.from(prev).slice(0, -1).join(''));
                setSpeed(100);

                if (!displayedText.length) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % profileDescription.length);
                    setSpeed(150);
                }
            } else {
                setDisplayedText((prev) => currentWordArray.slice(0, Array.from(prev).length + 1).join(''));

                if (displayedText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, speed);
        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, speed, currentWordIndex]);

    return (
        <div className='relative flex flex-col lg:flex-row justify-center items-center p-8 rounded-lg shadow-lg' id='about-me'>
            <div className='relative flex justify-center items-center'>
                <motion.div
                    className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadow-[0_2px_20px_5px_rgba(20,83,45,0.8)] relative'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={profilePic} alt='No photo' className='w-full h-full object-cover' />
                </motion.div>
                <motion.div
                    className='absolute left-[-60px] lg:left-[-80px] flex flex-col items-center space-y-5'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <SVG link='https://www.linkedin.com/in/george-geru1099/' icon={linkedIn} />
                    <SVG link='https://github.com/Ger1Git' icon={github} />
                </motion.div>
            </div>
            <motion.div
                className='mt-[20px] lg:ml-[40px] text-center lg:text-left'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <h2 className='text-2xl lg:text-5xl font-bold'>Hello! I&#39;m George</h2>
                <h3 className='text-xl lg:text-2xl font-bold lg:mt-[10px] text-nowrap'>
                    <span>and I&#39;m a </span>
                    <span className='text-[#00df9a]'>{displayedText}</span>
                    <span className='blinking-cursor'></span>
                </h3>
                <div className='flex mt-8 lg:my-[40px] justify-center items-center gap-[30px]'>
                    <Button
                        onClickEvent={() => scrollToSection('contact')}
                        classes='relative cursor-pointer rounded-lg overflow-hidden glowButton glowShadow'
                        text='Contact Me'
                    />
                    <Button
                        href={CV}
                        classes='relative whitespace-nowrap cursor-pointer rounded-lg border border-green-500 overflow-hidden'
                        text='Download CV'
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default ProfileCard;
