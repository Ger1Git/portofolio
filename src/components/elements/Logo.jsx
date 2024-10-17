import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Logo = ({ icon, text, width, height, right }) => {
    return (
        <motion.div className='relative z-10 flex justify-center items-center' whileHover={{ scale: 1.2 }}>
            <img src={icon} alt='icon' style={{ width: `${width}px`, height: `${height}px` }} className='filter drop-shadow-lg shadow-green-500' />
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
    right: PropTypes.number
};

export default Logo;
