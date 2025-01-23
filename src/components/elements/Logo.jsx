import PropTypes from 'prop-types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Logo = ({ icon, id, text, right, isRotating, hasBackground, scaleAnimationStart, width, height }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${scaleAnimationStart} end`, 'end start']
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    const imageWidth = width || (hasBackground ? 'w-[24px] lg:w-[44px]' : 'w-[40px] lg:w-[60px]');
    const imageHeight = height || (hasBackground ? 'h-[24px] lg:h-[44px]' : 'h-[40px] lg:h-[60px]');

    return (
        <motion.div
            className={`relative z-10 flex justify-center items-center left-[2px] lg:left-0 ${hasBackground ? 'bg-white p-2 rounded-full' : ''}`}
            ref={ref}
            style={{
                scale: scaleProgress,
                transition: 'all 0.2s ease-out'
            }}
        >
            <motion.img
                src={icon}
                id={id}
                alt='icon'
                className={`filter drop-shadow-lg shadow-green-500 ${imageWidth} ${imageHeight}`}
                animate={isRotating ? { rotate: 360 } : {}}
                transition={{
                    duration: 3,
                    ease: 'linear',
                    repeat: isRotating ? Infinity : 0
                }}
            />
            <div className='absolute top-[30%] text-xl text-white' style={{ right: `${right}px` }}>
                {text}
            </div>
        </motion.div>
    );
};

Logo.propTypes = {
    icon: PropTypes.string.isRequired,
    id: PropTypes.string,
    text: PropTypes.string,
    right: PropTypes.number,
    isRotating: PropTypes.bool,
    hasBackground: PropTypes.bool,
    scaleAnimationStart: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default Logo;
