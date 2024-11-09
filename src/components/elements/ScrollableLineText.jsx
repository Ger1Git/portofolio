import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';

const ScrollableLineText = ({ text, scrollRatio, startOfAnimation }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${startOfAnimation} end`, 'end start']
    });

    return (
        <motion.div
            ref={ref}
            className='overflow-hidden h-[300px] flex justify-center items-center lg:hidden bg-[#000300] text-green-500 text-4xl rotate-[-90deg] whitespace-nowrap relative'
        >
            <div>{text}</div>
            <motion.div
                style={{ width: useTransform(scrollYProgress, [0, scrollRatio], ['100%', '0%']) }}
                className='absolute top-0 left-0 h-full bg-[#000300]'
            />
        </motion.div>
    );
};

ScrollableLineText.propTypes = {
    text: PropTypes.string.isRequired,
    scrollRatio: PropTypes.number,
    startOfAnimation: PropTypes.string
};

export default ScrollableLineText;
