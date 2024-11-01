import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import StyledHeader from './StyledHeader';
import { projects } from '../utils/constants';
import Logo from './elements/Logo';

// Import SVG icons
import reactIcon from '../public/react.svg';
import htmlIcon from '../public/html.svg';
import cssIcon from '../public/css.svg';
import javascriptIcon from '../public/javascript.svg';
import typescriptIcon from '../public/typescript.svg';
import tailwindIcon from '../public/tailwind.svg';
import bootstrapIcon from '../public/bootstrap.svg';
import nodejsIcon from '../public/nodejs.svg';
import expressjsIcon from '../public/expressjs.svg';
import gitIcon from '../public/git.svg';
import jQueryIcon from '../public/jQuery.svg';
import angularIcon from '../public/angular.svg';
import mongoDbIcon from '../public/mongodb.svg';
import mysqlIcon from '../public/mysql.svg';

// Map technology names to icons
const techIcons = {
    React: { icon: reactIcon, isRotating: true, hasBackground: false },
    HTML: { icon: htmlIcon, isRotating: false, hasBackground: false },
    CSS: { icon: cssIcon, isRotating: false, hasBackground: false },
    JavaScript: { icon: javascriptIcon, isRotating: false, hasBackground: false },
    TypeScript: { icon: typescriptIcon, isRotating: false, hasBackground: false },
    Tailwind: { icon: tailwindIcon, isRotating: false, hasBackground: false },
    Bootstrap: { icon: bootstrapIcon, isRotating: false, hasBackground: false },
    NodeJS: { icon: nodejsIcon, isRotating: false, hasBackground: false },
    ExpressJS: { icon: expressjsIcon, isRotating: false, hasBackground: true },
    Git: { icon: gitIcon, isRotating: false, hasBackground: true },
    jQuery: { icon: jQueryIcon, isRotating: false, hasBackground: true },
    Angular: { icon: angularIcon, isRotating: false, hasBackground: false },
    MongoDB: { icon: mongoDbIcon, isRotating: false, hasBackground: false },
    MySQL: { icon: mysqlIcon, isRotating: false, hasBackground: true }
};

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='flex flex-col items-center' id='projects'>
            <StyledHeader text={'Projects'} />

            <div className='relative w-full mx-auto px-4 pt-16'>
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
                            className='flex flex-col items-center justify-center relative w-[370px] h-[420px] sm:w-[280px] sm:h-[360px] rounded-2xl bg-gray-700/40 shadow-md overflow-hidden'
                        >
                            <div className='h-1/2 w-full'>
                                <img src={project.image} alt='project_image' className='w-full h-full object-cover' />
                            </div>
                            <div className='text-center p-2'>
                                <h2 className='text-2xl font-semibold'>{project.title}</h2>
                                <p className='mt-2'>{project.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className='swiper-button-prev absolute top-1/2 left-0 z-10 w-[70px] h-[70px] flex items-center justify-center text-white rounded-full shadow-md cursor-pointer hover:bg-gray-700 transition'></div>
                    <div className='swiper-button-next absolute top-1/2 right-0 z-10 w-[70px] h-[70px] flex items-center justify-center text-white rounded-full shadow-md cursor-pointer hover:bg-gray-700 transition'></div>
                </Swiper>

                <div className='swiper-pagination flex justify-center mt-4 space-x-2 relative z-10'></div>

                <div className='flex flex-col lg:flex-row lg:flex-wrap items-center justify-center mt-4 gap-[20px]'>
                    <span className='mr-2 font-semibold text-xl'>Technologies used:</span>
                    <div className='flex flex-row flex-wrap items-center justify-center gap-[20px]'>
                        {projects[activeIndex]?.technologies.map((tech) => (
                            <div key={tech} className='flex flex-col items-center'>
                                <Logo
                                    key={tech}
                                    icon={techIcons[tech].icon}
                                    width={40}
                                    height={40}
                                    isRotating={techIcons[tech].isRotating}
                                    hasBackground={techIcons[tech].hasBackground}
                                />
                                <span className='text-sm text-center mt-2'>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
