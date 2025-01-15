import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const StyledHeader = ({ text }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    });

    const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const scaleProgress = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const rotateProgress = useTransform(scrollYProgress, [0, 0.1], [-45, 0]);

    return (
        <div className='flex items-center justify-center'>
            <motion.h1
                className='text-6xl font-bold text-[#2ecc71]'
                ref={ref}
                style={{
                    opacity: opacityProgress,
                    scale: scaleProgress,
                    rotate: rotateProgress,
                    transition: 'all 0.2s ease-out'
                }}
            >
                {text}
            </motion.h1>
        </div>
    );
};

StyledHeader.propTypes = {
    text: PropTypes.string.isRequired
};

export default StyledHeader;
