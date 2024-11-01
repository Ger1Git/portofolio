import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Logo = ({ icon, text, width, height, right, isHoverDisabled, isRotating, hasBackground }) => {
    return (
        <motion.div
            className={`relative z-10 flex justify-center items-center left-[2px] ${hasBackground ? 'bg-white p-2 rounded-full' : ''}`}
            whileHover={isHoverDisabled ? undefined : { scale: 1.2 }}
        >
            <motion.img
                src={icon}
                alt='icon'
                style={{ width: `${width}px`, height: `${height}px` }}
                className='filter drop-shadow-lg shadow-green-500'
                animate={isRotating ? { rotate: 360 } : {}}
                transition={{
                    duration: 3,
                    ease: 'linear',
                    repeat: isRotating ? Infinity : 0
                }}
                whileHover={isHoverDisabled ? undefined : { scale: 1.2 }}
            />
            <div className='absolute top-[30%] text-xl text-white' style={{ right: `${right}px` }}>
                {text}
            </div>
        </motion.div>
    );
};

Logo.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string,
    right: PropTypes.number,
    isHoverDisabled: PropTypes.bool,
    isRotating: PropTypes.bool,
    hasBackground: PropTypes.bool
};

export default Logo;
