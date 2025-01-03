import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const LineConnector = ({ divAId, divBId, parentRef }) => {
    const [pathData, setPathData] = useState('');
    const svgRef = useRef(null);
    const isInView = useInView(svgRef, { once: true });

    const { scrollYProgress } = useScroll({
        container: parentRef.current,
        target: svgRef,
        offset: ['start end', 'end start']
    });

    const pathLength = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    useEffect(() => {
        if (!isInView) return;

        const updatePathData = () => {
            const divA = document.getElementById(divAId);
            const divB = document.getElementById(divBId);

            if (divA && divB) {
                const rectA = divA.getBoundingClientRect();
                const rectB = divB.getBoundingClientRect();

                // Coordinates for divB (start point)
                const x1 = rectB.left + rectB.width / 2;
                const y1 = rectB.top + rectB.height / 2;

                // Coordinates for divA (end point)
                const x2 = rectA.left + rectA.width / 2;
                const y2 = rectA.top + rectA.height / 2;

                // Calculate control points for the curve
                const controlX1 = x1 + 100; // Curve out from divB
                const controlX2 = x2 - 100; // Curve into divA

                // Create the cubic Bezier path
                const path = `M ${x1} ${y1} C ${controlX1} ${y1}, ${controlX2} ${y2}, ${x2} ${y2}`;
                setPathData(path);
            }
        };

        updatePathData();
        window.addEventListener('resize', updatePathData);

        return () => {
            window.removeEventListener('resize', updatePathData);
        };
    }, [isInView, divAId, divBId]);

    return (
        <motion.svg
            ref={svgRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                width: '100%',
                height: '100%'
            }}
        >
            {isInView && pathData && (
                <motion.path
                    d={pathData}
                    stroke='#2ecc71'
                    fill='none'
                    strokeWidth='3'
                    style={{
                        pathLength: pathLength
                    }}
                />
            )}
        </motion.svg>
    );
};

LineConnector.propTypes = {
    divAId: PropTypes.string.isRequired,
    divBId: PropTypes.string.isRequired,
    parentRef: PropTypes.object
};

export default LineConnector;
