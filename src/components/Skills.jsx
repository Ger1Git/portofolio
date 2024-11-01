import StyledHeader from './StyledHeader';
import ScrollAnimation from './SVGAnimatedScroll';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div className='text-center text-4xl text-white relative' id='skills'>
            <div className='mb-[50px] lg:mb-[100px]'>
                <StyledHeader text={'Skills'} />
            </div>
            <ScrollAnimation />
            <div className='absolute bottom-[-50px] hidden lg:flex items-center justify-center z-10 w-full'>
                <motion.h1
                    className='text-3xl'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}
                >
                    Scroll Down
                </motion.h1>
            </div>
        </div>
    );
};

export default Skills;
