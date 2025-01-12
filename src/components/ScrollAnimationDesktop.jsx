import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StyledHeader from './StyledHeader';
import LineConnector from './elements/LineConnector';
import Logo from './elements/Logo';
import react from '../public/react.svg';
import html from '../public/html.svg';
import css from '../public/css.svg';
import javascript from '../public/javascript.svg';
import typescript from '../public/typescript.svg';
import tailwind from '../public/tailwind.svg';
import bootstrap from '../public/bootstrap.svg';
import nodejs from '../public/nodejs.svg';
import expressjs from '../public/expressjs.svg';
import git from '../public/git.svg';
import jQuery from '../public/jquery.svg';
import angular from '../public/angular.svg';
import mongoDb from '../public/mongodb.svg';
import mysql from '../public/mysql.svg';

const SVGAnimatedScroll = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['20% end', 'end start']
    });

    const markupLogos = [
        { icon: html, label: 'HTML' },
        { icon: css, label: 'CSS' },
        { icon: tailwind, label: 'Tailwind' },
        { icon: bootstrap, label: 'Bootstrap' }
    ];

    const databasesLogos = [
        { icon: mongoDb, label: 'MongoDB' },
        { icon: mysql, label: 'MySQL' }
    ];

    const frontendLogos = [
        { icon: react, label: 'React' },
        { icon: angular, label: 'Angular' },
        { icon: jQuery, label: 'jQuery' }
    ];

    const backendLogos = [
        { icon: nodejs, label: 'NodeJS' },
        { icon: expressjs, label: 'Express.js' }
    ];

    const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
    const fadeInOnScroll = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0.2, 0.3], ['200%', '0%']);
    const lineWidth = useTransform(scrollYProgress, [0.2, 0.3], ['0%', '100%']);

    return (
        <div ref={ref} className='flex flex-col items-center justify-center sticky top-[5%] gap-[25px] overflow-hidden h-screen'>
            <StyledHeader text={'Skills'} />

            {/* <SVGLineConnector /> */}

            <div className='flex w-full'>
                <div className='flex flex-col flex-1 justify-center items-center gap-[50px]'>
                    <div className='relative hover:text-gray-300 transition-colors duration-200'>
                        <span className='italic text-blue-300 text-4xl relative inline-block p-2'>
                            Frontend
                            <motion.div className='absolute bottom-0 left-0 h-[1px] bg-blue-300' style={{ width: lineWidth }}></motion.div>
                        </span>
                    </div>
                    <div className='flex justify-center w-full text-3xl gap-[20px]'>
                        <motion.span
                            className='mt-[10px]'
                            style={{
                                opacity: opacity,
                                scale: scale
                            }}
                        >
                            Markup:
                        </motion.span>
                        {markupLogos.map(({ icon, label }) => (
                            <div key={label} className='flex flex-col gap-[10px]'>
                                <Logo icon={icon} right={-70} scaleAnimationStart={'400%'} />
                                <motion.span
                                    className='text-xl'
                                    style={{
                                        opacity: opacity,
                                        scale: scale
                                    }}
                                >
                                    {label}
                                </motion.span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col flex-1 justify-center gap-[50px]'>
                    <div className='relative hover:text-gray-300 transition-colors duration-200'>
                        <span className='italic text-[#FFC107] text-4xl relative inline-block p-2'>
                            Backend
                            <motion.div className='absolute bottom-0 left-0 h-[1px] bg-white' style={{ width: lineWidth }}></motion.div>
                        </span>
                    </div>
                    <div className='flex justify-center w-full gap-[20px] text-3xl'>
                        <motion.span
                            className='mt-[10px]'
                            style={{
                                opacity: opacity,
                                scale: scale
                            }}
                        >
                            Databases:
                        </motion.span>
                        {databasesLogos.map(({ icon, label }) => (
                            <div key={label} className='flex flex-col gap-[10px] items-center'>
                                <Logo icon={icon} hasBackground={true} scaleAnimationStart={'400%'} />
                                <motion.span
                                    className='text-xl'
                                    style={{
                                        opacity: opacity,
                                        scale: scale
                                    }}
                                >
                                    {label}
                                </motion.span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex-1 w-full flex gap-[50px]'>
                <div className='flex flex-col flex-1 gap-[50px] justify-center'>
                    {frontendLogos.map(({ icon, label }, index) => (
                        <>
                            <div key={label} className='flex flex-col gap-[5px] items-center'>
                                <Logo icon={icon} id={label} hasBackground={true} scaleAnimationStart={`${0 - index * 50}%`} />
                                <motion.span className='text-xl'>{label}</motion.span>
                            </div>
                            <LineConnector divAId='JavaScript' divBId={label} scaleAnimationStart={`${0 - index * 25}%`} />
                        </>
                    ))}
                </div>
                <div className='flex justify-center items-center flex-col flex-none'>
                    <div className='relative z-10'>
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: [1, 0] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'mirror'
                            }}
                        >
                            <Logo id='JavaScript' icon={javascript} scaleAnimationStart={'50%'} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: 'mirror'
                            }}
                            style={{ position: 'absolute', top: 0, left: 0 }}
                        >
                            <Logo icon={typescript} scaleAnimationStart={'50%'} />
                        </motion.div>
                    </div>
                    <motion.div
                        className='mt-[25px] text-2xl'
                        style={{
                            scale: scale,
                            transition: 'all 0.2s ease-out'
                        }}
                    >
                        JavaScript/TypeScript
                    </motion.div>
                </div>
                <div className='flex flex-col flex-1 gap-[50px] justify-center'>
                    {backendLogos.map(({ icon, label }, index) => (
                        <>
                            <div key={label} className='flex flex-col gap-[5px] items-center'>
                                <Logo icon={icon} id={label} hasBackground={true} scaleAnimationStart={`${0 - index * 50}%`} />
                                <motion.span className='text-xl'>{label}</motion.span>
                            </div>
                            <LineConnector divAId='JavaScript' divBId={label} scaleAnimationStart={`${-100 - index * 25}%`} />
                        </>
                    ))}
                </div>
            </div>

            <motion.div style={{ opacity: fadeInOnScroll, y }} className='sticky bottom-[10%] hidden lg:flex items-center justify-center z-10 w-full'>
                <motion.h1
                    className='text-3xl'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}
                >
                    Scroll Down
                </motion.h1>
            </motion.div>
        </div>
    );
};

export default SVGAnimatedScroll;
