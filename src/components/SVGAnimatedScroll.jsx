import { useState, useRef, useEffect } from 'react';
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
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollableLineText from './elements/ScrollableLineText';
import StyledHeader from './StyledHeader';

const SVGAnimatedScroll = () => {
    const greenLineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: greenLineRef,
        offset: ['10% end', 'end start']
    });
    const logoRefCSS = useRef(null);
    const logoRefTailwind = useRef(null);
    const logoRefBootstrap = useRef(null);
    const [jsLogoText, setJsLogoText] = useState('JavaScript');
    const [showTypeScript, setShowTypeScript] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setJsLogoText((prevText) => (prevText === 'JavaScript' ? 'TypeScript' : 'JavaScript'));
            setShowTypeScript((prev) => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='mb-[50px]'>
                <StyledHeader text={'Skills'} />
            </div>
            <div ref={greenLineRef} className='flex flex-col items-center justify-center mt-[50px] relative'>
                <motion.div
                    className='absolute w-1 bg-green-500 left-1/2 top-[30px]'
                    style={{ height: useTransform(scrollYProgress, [0, 0.8], ['0%', '98%']) }}
                ></motion.div>
                <div className='h-[200px]'>
                    <Logo icon={html} text={'HTML'} right={-70} scaleAnimationStart={'300%'} width={'w-[60px]'} height={'h-[60px]'}/>
                </div>
                <div className='relative flex justify-center items-center h-[200px] w-[100%]'>
                    <motion.div className='pb-[75px]' style={{ height: useTransform(scrollYProgress, [0, 0.8], ['0%', '50%']) }} ref={logoRefCSS}>
                        <Logo icon={css} text='CSS / SCSS' right={-110} scaleAnimationStart={'300%'} width={'w-[60px]'} height={'h-[60px]'}/>
                    </motion.div>
                    <div className='absolute z-30 flex flex-col h-full left-[20px]'>
                        <div className='text-xl'>Frameworks</div>
                        <div className='flex flex-col justify-around h-[100%]'>
                            <div ref={logoRefTailwind} className='top-[-110px] left-[-140px] flex flex-col items-center text-xl'>
                                <Logo icon={tailwind} right={-200} scaleAnimationStart={'300%'} width={'w-[60px]'} height={'h-[60px]'}/>
                                Tailwind
                            </div>
                            <div ref={logoRefBootstrap} className='top-[-110px] left-[-140px] pt-[25px] flex flex-col items-center text-xl'>
                                <Logo icon={bootstrap} right={-200} scaleAnimationStart={'300%'} width={'w-[60px]'} height={'h-[60px]'}/>
                                Bootstrap
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[200px] flex justify-center items-end relative group hover:scale-120 transition-all duration-300'>
                    <div className='relative z-10'>
                        <Logo icon={javascript} right={-120} scaleAnimationStart={'300%'} width={'w-[60px]'} height={'h-[60px]'}/>
                    </div>
                    <div className={`absolute z-20 transition-opacity duration-500 ease-in-out ${showTypeScript ? 'opacity-100' : 'opacity-0'}`}>
                        <Logo icon={typescript} scaleAnimationStart={'300%'} width={'w-[60px]'} height={'h-[60px]'}/>
                    </div>
                    <motion.div
                        className='absolute text-xl left-[80px] bottom-[15px]'
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]), scale: useTransform(scrollYProgress, [0, 0.2], [0, 1]) }}
                    >
                        {jsLogoText}
                    </motion.div>
                </div>
                <ScrollableLineText text={'Frontend'} scrollRatio={0.2} startOfAnimation={'110%'} />
                <div className='h-[200px] flex items-center relative flex-col w-[100%]'>
                    <div className='relative z-10 flex justify-center items-center group hover:scale-120  transition-all duration-300'>
                        <Logo icon={react} text={'React'} right={-70} isRotating={true} hasBackground={true} scaleAnimationStart={'300%'} width={'60px'} height={'h-[60px]'}/>
                    </div>
                </div>
                <div className='h-[200px] flex z-10 justify-center items-start'>
                    <Logo icon={angular} text={'Angular'} right={-80} scaleAnimationStart={'275%'} width={'w-[60px]'} height={'h-[60px]'}/>
                </div>
                <div className='h-[100px] flex z-10 justify-center items-start'>
                    <div className='relative z-10 flex justify-center items-start group hover:scale-120  transition-all duration-300'>
                        <Logo icon={jQuery} text={'jQuery'} right={-80} hasBackground={true} scaleAnimationStart={'300%'} width={'w-[60px]'} height={'h-[60px]'}/>
                    </div>
                </div>
                <ScrollableLineText text={'Backend'} scrollRatio={0.1} startOfAnimation={'90%'} />
                <div className='h-[200px] flex items-center relative flex-col'>
                    <div className='relative z-10 flex justify-center items-center group hover:scale-120  transition-all duration-300'>
                        <Logo icon={nodejs} text={'NodeJS'} right={-80} hasBackground={true} scaleAnimationStart={'300%'} width={'w-[60px]'} height={'h-[60px]'}/>
                    </div>
                </div>
                <div className='h-[100px] flex z-10 items-start'>
                    <div className='relative z-10 flex justify-center items-start group hover:scale-120  transition-all duration-300'>
                        <Logo icon={expressjs} text={'Express.js'} right={-100} hasBackground={true} scaleAnimationStart={'300%'} width={'w-[60px]'} height={'h-[60px]'}/>
                    </div>
                </div>
                <ScrollableLineText text={'Databases'} scrollRatio={0.2} startOfAnimation={'80%'} />
                <div className='h-[200px] flex items-center relative flex-col'>
                    <div className='relative z-10 flex justify-center items-center group hover:scale-120  transition-all duration-300'>
                        <Logo icon={mongoDb} text={'MongoDB'} right={-110} hasBackground={true} scaleAnimationStart={'200%'} width={'w-[60px]'} height={'h-[60px]'}/>
                    </div>
                </div>
                <div className='h-[200px] flex z-10 justify-center items-start'>
                    <div className='relative z-10  flex justify-center items-start group hover:scale-120  transition-all duration-300'>
                        <Logo icon={mysql} text={'MySQL'} right={-80} hasBackground={true} scaleAnimationStart={'200%'} width={'w-[60px]'} height={'h-[60px]'}/>
                    </div>
                </div>
                <ScrollableLineText text={'Version Control'} scrollRatio={0.2} startOfAnimation={'70%'} />
                <div className='h-[200px] flex justify-end items-center relative flex-col'>
                    <div className='relative z-10 flex justify-center items-center group hover:scale-120 transition-all duration-300 '>
                        <Logo icon={git} text={'Git'} right={-50} hasBackground={true} scaleAnimationStart={'200%'} width={'w-[60px]'} height={'h-[60px]'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SVGAnimatedScroll;
