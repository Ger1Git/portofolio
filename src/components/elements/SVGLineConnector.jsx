import { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Custom component that accepts an object of refs
const SVGLineConnector = forwardRef(({ stroke, strokeWidth }, refs) => {
    const [pathD, setPathD] = useState('');
    const { startRef, endRef } = refs;

    useEffect(() => {
        if (startRef.current && endRef.current) {
            // Get positions of the elements
            const startRect = startRef.current.getBoundingClientRect();
            const endRect = endRef.current.getBoundingClientRect();

            // Calculate the center points of the elements
            const startX = startRect.x + startRect.width / 2;
            const startY = startRect.y + startRect.height / 2;
            const endX = endRect.x + endRect.width / 2;
            const endY = endRect.y + endRect.height / 2;

            // Define control point for a smooth curve
            const controlX = (startX + endX) / 2;
            const controlY = Math.min(startY, endY) - 100; // Adjust for curvature height

            // Set the SVG path data
            setPathD(`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`);
        }
    }, [startRef, endRef]); // Recalculate if refs change

    return (
        <svg className='absolute top-0 left-0 w-full h-full pointer-events-none'>
            <path d={pathD} fill='none' stroke={stroke} strokeWidth={strokeWidth} />
        </svg>
    );
});

SVGLineConnector.displayName = 'SVGLineConnector';

SVGLineConnector.propTypes = {
    stroke: PropTypes.string.isRequired,
    strokeWidth: PropTypes.number.isRequired
};

export default SVGLineConnector;
