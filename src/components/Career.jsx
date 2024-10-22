import StyledHeader from './StyledHeader';
import CareerAchievement from './elements/CareerAchievement';
import { careerAchievements } from '../utils/constants';

const Career = () => {
    return (
        <div className='bg-[#2b2b2b] py-[50px] relative z-0' id='career'>
            <StyledHeader text={'Career'} />
            <div className='text-center text-xl text-white px-[20px] mt-[50px] relative flex justify-center'>
                <ul className='relative timeline mb-[50px]'>
                    {careerAchievements.map((details, index) => (
                        <li
                            key={index}
                            className={`w-full lg:w-1/2 pr-[25px] pl-[70px] lg:py-[10px] lg:px-[50px] relative animate-movedown ${
                                index % 2 === 0 ? 'left-0' : 'lg:left-1/2'
                            } ${index === 0 ? 'mb-[50px]' : index === careerAchievements.length - 1 ? 'mt-[50px]' : 'my-[50px]'}`}
                        >
                            <CareerAchievement title={details.title} date={details.date} description={details.description} icon={details.icon} index={index} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Career;
