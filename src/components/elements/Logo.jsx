import PropTypes from 'prop-types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Logo = ({ icon, id, text, width, height, right, isRotating, hasBackground, scaleAnimationStart }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${scaleAnimationStart} end`, 'end start']
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <motion.div
            className={`relative z-10 flex justify-center items-center left-[2px] lg:left-0 ${hasBackground ? 'bg-white p-2 rounded-full' : ''}`}
            id={id}
            ref={ref}
            style={{
                scale: scaleProgress,
                transition: 'all 0.2s ease-out'
            }}
        >
            <motion.img
                src={icon}
                alt='icon'
                style={{ width: `${width}px`, height: `${height}px` }}
                className='filter drop-shadow-lg shadow-green-500 '
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
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string,
    text: PropTypes.string,
    right: PropTypes.number,
    isRotating: PropTypes.bool,
    hasBackground: PropTypes.bool,
    scaleAnimationStart: PropTypes.string
};

export default Logo;
