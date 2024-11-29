import { useRef } from 'react';
import StyledHeader from './StyledHeader';
import CareerAchievement from './elements/CareerAchievement';
import FadeInOnScroll from './elements/FadeInOnScroll';
import { careerAchievements } from '../utils/constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Career = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['20% end', 'end start']
    });
    const lineHeight = useTransform(scrollYProgress, [0, 0.7], ['0%', '100%']);

    return (
        <div className='bg-[#2b2b2b] py-[50px] relative z-0 lg:-mt-[100px]' id='career'>
            <StyledHeader text={'Career'} />

            <div className='text-center text-xl text-white px-[20px] mt-[50px] relative flex justify-center'>
                <ul className='relative timeline-wrapper mb-[50px]' ref={ref}>
                    <motion.div
                        className='timeline'
                        style={{
                            height: lineHeight
                        }}
                    />

                    {careerAchievements.map((details, index) => (
                        <FadeInOnScroll key={index} startOfAnimation={`${index * 50}%`}>
                            <li
                                className={`w-full lg:w-1/2 pr-[25px] pl-[70px] lg:py-[20px] lg:px-[50px] relative ${
                                    index % 2 === 0 ? 'left-0' : 'lg:left-1/2'
                                } ${index === 0 ? 'mb-[50px]' : index === careerAchievements.length - 1 ? 'mt-[50px]' : 'my-[50px]'}`}
                            >
                                <CareerAchievement
                                    title={details.title}
                                    date={details.date}
                                    description={details.description}
                                    icon={details.icon}
                                    index={index}
                                />
                            </li>
                        </FadeInOnScroll>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Career;
