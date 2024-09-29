import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ onClickEvent, classes, text, href }) => {
    if (href) {
        return (
            <motion.a
                href={href}
                className={`${classes} inline-block`}
                target='_blank'
                rel='noopener noreferrer'
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='relative z-10 px-4 py-2 whitespace-nowrap'>{text}</div>
            </motion.a>
        );
    }

    return (
        <motion.button className={`${classes}`} onClick={onClickEvent} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
            <div className='relative z-10 px-4 py-2 whitespace-nowrap'>{text}</div>
        </motion.button>
    );
};

Button.propTypes = {
    onClickEvent: PropTypes.func,
    classes: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string
};

export default Button;
