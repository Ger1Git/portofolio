import AnimatedLine from './AnimatedLine';
import ProfileCard from './ProfileCard';

const AboutMe = () => {
    const text = `
    I'm a Full Stack Developer with expertise in front-end and back-end development. 
    I have a passion for problem-solving and a keen eye for detail, which enables me to craft
    seamless digital experiences that exceed expectations. In addition to having a good foundation in JavaScript,
    I have improved my skills in AngularJS and React during my professional experience. As I continue 
    to grow as a developer, I am eager to expand my knowledge and stay
    at the forefront of modern web technologies.
    `;

    const lines = text.split('\n').filter((line) => line.trim() !== '');

    return (
        <div className='text-center text-xl text-white'>
            <ProfileCard />
            <div className='px-[40px]'>
                {lines.map((line, index) => (
                    <AnimatedLine key={index} line={line} index={index} />
                ))}
            </div>
        </div>
    );
};

export default AboutMe;
