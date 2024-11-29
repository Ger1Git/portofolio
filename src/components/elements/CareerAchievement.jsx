import PropTypes from 'prop-types';

const CareerAchievement = ({ title, date, description, icon, index }) => {
    let isEven = index % 2 === 0;
    return (
        <>
            <div
                className={`w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#00bfa5] absolute left-[10px] right-auto top-[25px] lg:top-[35px] z-[20]
                ${isEven ? 'lg:left-auto lg:right-[-30px]' : 'lg:right-auto lg:left-[-30px]'}`}
            >
                <img src={icon} alt='no image' className='object-contain h-full w-full' />
            </div>
            <div
                className={`py-[20px] px-[30px] bg-white/50 hover:bg-white/80 hover:scale-105 ${
                    isEven ? 'lg:hover:translate-x-[-10px]' : 'lg:hover:translate-x-[10px]'
                } transition-transform duration-300 rounded-[6px] relative shadow-custom group`}
            >
                <h2 className='group-hover:text-green-500'>{title}</h2>
                <small className='text-[#cccccc] group-hover:text-black/50'>{date}</small>
                <p className='text-black'>{description}</p>
                <span
                    className={`absolute top-[30px] z-[30] h-0 w-0 group-hover:border-r-white/80 group-hover:scale-105
                        border-t-[15px] border-b-[15px] border-transparent border-r-[15px] border-r-white/50 left-[-15px]
                        ${
                            isEven
                                ? 'lg:right-[-15px] lg:left-auto lg:border-l-[15px] lg:border-l-white/50 lg:border-r-0 group-hover:border-l-white/80'
                                : 'lg:left-[-15px] lg:border-r-[15px] lg:border-r-white/50 lg:border-l-0'
                        }`}
                ></span>
            </div>
        </>
    );
};

CareerAchievement.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string,
    index: PropTypes.number
};

export default CareerAchievement;
