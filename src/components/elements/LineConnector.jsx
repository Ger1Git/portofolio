import Xarrow from 'react-xarrows';
import PropTypes from 'prop-types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const LineConnector = ({ divAId, divBId, scaleAnimationStart }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['20% end', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                transition: 'all 0.2s ease-out'
            }}
        >
            <Xarrow start={divAId} end={divBId} color='#2ecc71' curveness='0.5' strokeWidth={3} headSize={0} endAnchor='middle' tailSize={0} path='smooth' />
        </motion.div>
    );
};

LineConnector.propTypes = {
    divAId: PropTypes.string.isRequired,
    divBId: PropTypes.string.isRequired,
    scaleAnimationStart: PropTypes.string
};

export default LineConnector;
