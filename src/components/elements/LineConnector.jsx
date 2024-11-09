import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const LineConnector = ({ firstElementRef, secondElementRef }) => {
    const [pathData, setPathData] = useState('');

    const updatePath = useCallback(() => {
        if (!firstElementRef.current || !secondElementRef.current) return;
        const firstElementBox = firstElementRef.current.getBoundingClientRect();
        const secondElementBox = secondElementRef.current.getBoundingClientRect();
        const startX = firstElementBox.right;
        const startY = firstElementBox.top + firstElementBox.height / 2;
        const endX = secondElementBox.left;
        const endY = secondElementBox.top + secondElementBox.height / 2;
        const controlPointX1 = startX + 50;
        const controlPointY1 = startY;
        const controlPointX2 = endX - 50;
        const controlPointY2 = endY;

        const newPathData = `M ${startX},${startY} C ${controlPointX1},${controlPointY1} ${controlPointX2},${controlPointY2} ${endX},${endY}`;
        setPathData(newPathData);
    }, [firstElementRef, secondElementRef]);

    useEffect(() => {
        updatePath();

        window.addEventListener('resize', updatePath);

        return () => {
            window.removeEventListener('resize', updatePath);
        };
    }, [updatePath]);

    return (
        <motion.svg
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
        >
            <motion.path d={pathData} fill='none' stroke='green' strokeWidth='2' />
        </motion.svg>
    );
};

LineConnector.propTypes = {
    firstElementRef: PropTypes.object.isRequired,
    secondElementRef: PropTypes.object.isRequired
};

export default LineConnector;
