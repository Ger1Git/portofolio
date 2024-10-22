import StyledHeader from './StyledHeader';
import ScrollAnimation from './SVGAnimatedScroll';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div className='text-center text-4xl text-white' id='skills'>
            <div className='mb-[50px] lg:mb-[100px]'>
                <StyledHeader text={'Skills'} />
            </div>
            <ScrollAnimation />
            <div className='hidden lg:block relative w-full h-screen'>
                <div className='h-screen flex items-center justify-center'>
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
        </div>
    );
};

export default Skills;
