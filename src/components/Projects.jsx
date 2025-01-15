import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import StyledHeader from './StyledHeader';
import Logo from './elements/Logo';
import { projects, techIcons } from '../utils/constants';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='flex flex-col items-center' id='projects'>
            <StyledHeader text={'Projects'} />

            <div className='relative w-full mx-auto pt-16'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}" style="background: gray;"></span>`;
                        },
                        bulletClass: 'swiper-pagination-bullet'
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className='relative h-[520px] sm:h-[470px] py-8 max-w-[1240px]'
                >
                    {projects.map((project, index) => (
                        <SwiperSlide
                            key={index}
                            className='flex flex-col items-center justify-between relative w-[280px] h-[420px] rounded-2xl bg-gray-700/40 shadow-md overflow-hidden'
                        >
                            <div className='h-1/2 w-full'>
                                <img src={project.image} alt='project_image' className='w-full h-full object-cover object-center' />
                            </div>
                            <div className='h-1/ w-full text-center p-2 flex flex-col justify-center'>
                                <h2 className='text-2xl font-semibold'>{project.title}</h2>
                                <p className='mt-2'>{project.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className='swiper-button-prev hidden absolute top-1/2 left-0 z-10 w-[70px] h-[70px] lg:flex items-center justify-center text-white rounded-full shadow-md cursor-pointer hover:bg-gray-700 transition'></div>
                    <div className='swiper-button-next hidden absolute top-1/2 right-0 z-10 w-[70px] h-[70px] lg:flex items-center justify-center text-white rounded-full shadow-md cursor-pointer hover:bg-gray-700 transition'></div>
                </Swiper>

                <div className='swiper-pagination flex justify-center mt-4 space-x-2 relative z-10'></div>
                <div className='flex flex-col lg:flex-wrap items-center justify-center mt-4 gap-[20px]'>
                    <span className='mr-2 font-semibold text-md lg:text-2xl'>Technologies used:</span>
                    <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] w-[90%] lg:mt-[10px]'>
                        {projects[activeIndex]?.technologies.map((tech) => (
                            <>
                                <div key={tech} className='flex flex-col items-center'>
                                    <Logo
                                        key={tech}
                                        icon={techIcons[tech].icon}
                                        isRotating={techIcons[tech].isRotating}
                                        hasBackground={techIcons[tech].hasBackground}
                                        scaleAnimationStart={'-100%'}
                                    />
                                    <span className='text-sm lg:text-lg text-center mt-2'>{tech}</span>
                                </div>
                            </>
                        ))}
                    </div>
                    {projects[activeIndex]?.link && <a href={projects[activeIndex].link} target='_blank' rel='noopener noreferrer' className='relative cursor-pointer rounded-lg p-4 overflow-hidden bg-[#125c29] hover:bg-[#157a35]'>View Project</a>}
                </div>
            </div>
        </div>
    );
};

export default Projects;
