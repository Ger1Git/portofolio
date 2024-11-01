import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const FadeInOnScroll = ({ children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['20% end', 'end start']
    });
    const opacityProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const scaleProgress = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                opacity: opacityProgress,
                scale: scaleProgress,
                transition: 'all 0.2s ease-out'
            }}
        >
            {children}
        </motion.div>
    );
};

FadeInOnScroll.propTypes = {
    children: PropTypes.node
};

export default FadeInOnScroll;
