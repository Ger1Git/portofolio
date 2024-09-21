import { FaFacebookSquare, FaGithubSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>My Portfolio</h1>
                <p className='py-4'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.
                </p>
                <div className='flex justify-around my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaGithubSquare size={30} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
