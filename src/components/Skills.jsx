import ScrollAnimation from './SVGAnimatedScroll';
import ScrollAnimationDesktop from './ScrollAnimationDesktop';

const Skills = () => {
    return (
        <div className='text-center text-4xl text-white relative lg:flex justify-center lg:pt-[40px]' id='skills'>
            <div className='lg:hidden'>
                <ScrollAnimation />
            </div>
            <div className='hidden lg:block h-[2000px] w-[95%] relative'>
                <ScrollAnimationDesktop />
            </div>
        </div>
    );
};

export default Skills;
