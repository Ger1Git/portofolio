import { useState, useRef, useEffect } from 'react';
import { ArcherContainer, ArcherElement } from 'react-archer';
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
import jQuery from '../public/jQuery.svg';
import angular from '../public/angular.svg';
import mongoDb from '../public/mongodb.svg';
import mysql from '../public/mysql.svg';

const SVGAnimatedScroll = () => {
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
        <ArcherContainer endMarker={false} strokeWidth={4} strokeColor={'rgb(34 197 94)'}>
            <div className='flex flex-col items-center justify-center mt-[50px] relative'>
                <div className='absolute h-full w-1 bg-green-500 left-1/2'></div>
                <div className='h-[200px]'>
                    <Logo icon={html} text={'HTML'} width={75} height={75} right={-70} />
                </div>
                <div className='relative flex justify-center items-center h-[200px] w-[100%]'>
                    <ArcherElement
                        id='CSS'
                        relations={[
                            {
                                targetId: 'tailwind-logo',
                                sourceAnchor: 'left',
                                targetAnchor: 'right'
                            },
                            {
                                targetId: 'bootstrap-logo',
                                sourceAnchor: 'left',
                                targetAnchor: 'right'
                            }
                        ]}
                    >
                        <div ref={logoRefCSS}>
                            <Logo icon={css} text='CSS / SCSS' width={75} height={75} right={-110} />
                        </div>
                    </ArcherElement>
                    <div className='absolute z-30 flex flex-col h-full left-[20px]'>
                        <div className='text-xl'>Frameworks</div>
                        <div className='flex flex-col justify-around h-[100%]'>
                            <ArcherElement id='tailwind-logo'>
                                <div ref={logoRefTailwind} className='top-[-110px] left-[-140px] flex flex-col items-center text-xl'>
                                    <Logo icon={tailwind} width={60} height={60} right={-200} />
                                    Tailwind
                                </div>
                            </ArcherElement>
                            <ArcherElement id='bootstrap-logo'>
                                <div ref={logoRefBootstrap} className='top-[-110px] left-[-140px] flex flex-col items-center text-xl'>
                                    <Logo icon={bootstrap} width={60} height={60} right={-200} />
                                    Bootstrap
                                </div>
                            </ArcherElement>
                        </div>
                    </div>
                </div>
                <div className='h-[200px] flex justify-center items-end relative group hover:scale-120 transition-all duration-300'>
                    <div className='relative z-10'>
                        <Logo icon={javascript} width={60} height={60} right={-120} isHoverDisabled={true} />
                    </div>
                    <div className={`absolute z-20 transition-opacity duration-500 ease-in-out ${showTypeScript ? 'opacity-100' : 'opacity-0'}`}>
                        <Logo icon={typescript} width={60} height={60} isHoverDisabled={true} />
                    </div>
                    <div className='absolute text-xl left-[80px] bottom-[15px]'>{jsLogoText}</div>
                </div>
                <div className='h-[300px] flex justify-center items-center lg:hidden bg-[#000300] text-green-500 text-4xl rotate-[-90deg]'>Frontend</div>
                <div className='h-[200px] flex items-center relative flex-col w-[100%]'>
                    <div className='relative z-10 flex justify-center items-center group hover:scale-120  transition-all duration-300'>
                        <Logo icon={react} text={'React'} width={50} height={50} right={-70} isHoverDisabled={true} isRotating={true} hasBackground={true} />
                    </div>
                </div>
                <div className='h-[200px] flex z-10 justify-center items-start'>
                    <Logo icon={angular} text={'Angular'} width={60} height={60} right={-80} />
                </div>
                <div className='h-[100px] flex z-10 justify-center items-start'>
                    <div className='relative z-10 flex justify-center items-start group hover:scale-120  transition-all duration-300'>
                        <Logo icon={jQuery} text={'jQuery'} width={50} height={50} right={-80} isHoverDisabled={true} hasBackground={true} />
                    </div>
                </div>
                <div className='h-[300px] flex justify-center items-center lg:hidden bg-[#000300] text-green-500 text-4xl rotate-[-90deg]'>Backend</div>
                <div className='h-[200px] flex items-center relative flex-col'>
                    <div className='relative z-10 flex justify-center items-center group hover:scale-120  transition-all duration-300'>
                        <Logo icon={nodejs} text={'NodeJS'} width={50} height={50} right={-80} isHoverDisabled={true} hasBackground={true} />
                    </div>
                </div>
                <div className='h-[100px] flex z-10 items-start'>
                    <div className='relative z-10 flex justify-center items-start group hover:scale-120  transition-all duration-300'>
                        <Logo icon={expressjs} text={'Express.js'} width={50} height={50} right={-100} isHoverDisabled={true} hasBackground={true} />
                    </div>
                </div>
                <div className='h-[300px] flex justify-center items-center lg:hidden bg-[#000300] text-green-500 text-4xl rotate-[-90deg]'>Databases</div>
                <div className='h-[200px] flex items-center relative flex-col'>
                    <div className='relative z-10 flex justify-center items-center group hover:scale-120  transition-all duration-300'>
                        <Logo icon={mongoDb} text={'MongoDB'} width={50} height={50} right={-110} isHoverDisabled={true} hasBackground={true} />
                    </div>
                </div>
                <div className='h-[200px] flex z-10 justify-center items-start'>
                    <div className='relative z-10  flex justify-center items-start group hover:scale-120  transition-all duration-300'>
                        <Logo icon={mysql} text={'MySQL'} width={60} height={60} right={-80} isHoverDisabled={true} hasBackground={true} />
                    </div>
                </div>
                <div className='h-[200px] flex justify-center items-center lg:hidden bg-[#000300] text-green-500 text-4xl rotate-[-90deg] text-nowrap'>
                    Version control
                </div>
                <div className='h-[200px] flex justify-end items-center relative flex-col'>
                    <div className='relative z-10 flex justify-center items-center group hover:scale-120 transition-all duration-300 '>
                        <Logo icon={git} text={'Git'} width={50} height={50} right={-50} isHoverDisabled={true} hasBackground={true} />
                    </div>
                </div>
            </div>
        </ArcherContainer>
    );
};

export default SVGAnimatedScroll;
