import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const FadeInOnScroll = ({ children, startOfAnimation }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${startOfAnimation} end`, 'end start']
    });
    const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                opacity: opacityProgress,
                transition: 'all 0.2s ease-out'
            }}
        >
            {children}
        </motion.div>
    );
};

FadeInOnScroll.propTypes = {
    children: PropTypes.node,
    startOfAnimation: PropTypes.string
};

export default FadeInOnScroll;
