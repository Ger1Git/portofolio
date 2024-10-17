import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const StyledHeader = ({ text }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        rootMargin: '0px 0px -10% 0px',
        triggerOnce: true
    });

    const headerVariants = {
        hidden: {
            opacity: 0,
            y: -50,
            scale: 0.5,
            rotate: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1.5,
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <div className='flex items-center justify-center'>
            <motion.h1
                className='text-6xl font-bold text-[#2ecc71]'
                ref={ref}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={headerVariants}
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
