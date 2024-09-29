import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SVG = ({ link, icon }) => {
    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <motion.div
                className='w-[50px] h-[50px]
             flex justify-center items-center'
                whileHover={{ scale: 1.2 }}
            >
                <img src={icon} alt='icon' className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] filter drop-shadow-lg shadow-green-500' />
            </motion.div>
        </a>
    );
};

SVG.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.string.isRequired
};

export default SVG;
