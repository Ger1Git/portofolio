import { useState, useRef, useEffect } from 'react';
import Logo from './elements/Logo';
// import react from '../public/react.svg';
import html from '../public/html.svg';
import css from '../public/css.svg';
import javascript from '../public/javascript.svg';
import typescript from '../public/typescript.svg';
import tailwind from '../public/tailwind.svg';
import bootstrap from '../public/bootstrap.svg';
// import nodejs from '../public/nodejs.svg';
// import git from '../public/git.svg';
// import jQuery from '../public/jQuery.svg';
// import angular from '../public/angular.svg';
// import mongoDb from '../public/mongodb.svg';

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
        <div className='flex flex-col items-center justify-center mt-[50px] relative'>
            <div className='absolute h-full w-1 bg-green-500 left-1/2'></div>
            <div className='h-[200px]'>
                <Logo icon={html} text={'HTML'} width={75} height={75} right={-70} />
            </div>

            <div className='relative flex justify-center items-center h-[300px] w-[100%]'>
                <div className='absolute z-30 flex flex-col h-full left-[20px]'>
                    <div className='text-xl'>Frameworks</div>
                    <div className='flex flex-col justify-around h-[100%]'>
                        <div ref={logoRefTailwind} className='top-[-110px] left-[-140px] flex flex-col items-center text-xl'>
                            <Logo icon={tailwind} width={60} height={60} right={-200} />
                            Tailwind
                        </div>
                        <div ref={logoRefBootstrap} className='top-[-110px] left-[-140px] flex flex-col items-center text-xl'>
                            <Logo icon={bootstrap} width={60} height={60} right={-200} />
                            Bootstrap
                        </div>
                    </div>
                </div>

                <div ref={logoRefCSS}>
                    <Logo icon={css} text='CSS / SCSS' width={75} height={75} right={-110} />
                </div>
            </div>

            <div className='h-[200px] flex justify-center items-end relative'>
                <div className='relative z-10'>
                    <Logo icon={javascript} width={60} height={60} right={-120} />
                </div>
                <div className={`absolute z-20 transition-opacity duration-500 ease-in-out ${showTypeScript ? 'opacity-100' : 'opacity-0'}`}>
                    <Logo icon={typescript} width={60} height={60} />
                </div>
                <div className='absolute text-xl left-[80px] bottom-[15px]'>{jsLogoText}</div>
            </div>
        </div>
    );
};

export default SVGAnimatedScroll;
