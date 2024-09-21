import profilePic from '../public/CV_Image_cut.jpg';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profileDescription } from '../utils/constants';

const ProfileCard = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

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
        <div className='flex flex-col lg:flex-row justify-center items-center p-8 rounded-lg shadow-lg mx-auto lg:mt-[30px]'>
            <motion.div
                className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadow-[0_2px_20px_5px_rgba(20,83,45,0.8)] relative'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img src={profilePic} alt='No photo' className='w-full h-full object-cover' />
            </motion.div>

            <motion.div
                className='mt-[20px] lg:ml-[40px] text-white text-center lg:text-left'
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
            </motion.div>
        </div>
    );
};

export default ProfileCard;
