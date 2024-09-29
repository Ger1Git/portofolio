import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AnimatedLine = ({ line }) => {
    const [ref, inView] = useInView({
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.5,
        triggerOnce: true // Only trigger once
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }} // Animate opacity based on inView
            transition={{ duration: 0.5 }}
            className='transition-opacity'
        >
            {line}
        </motion.div>
    );
};

AnimatedLine.propTypes = {
    line: PropTypes.string.isRequired
};

export default AnimatedLine;
