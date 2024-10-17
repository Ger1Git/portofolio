const Timeline = () => {
    return (
        <div className='my-[50px] relative max-w-5xl mx-auto lg:my-[100px] timeline'>
            <div className='w-full lg:w-1/2 pr-[25px] pl-[70px] lg:py-[10px] lg:px-[50px] relative left-0 animate-movedown'>
                <div className='w-[40px] h-[40px] rounded-full bg-[#00df9a] absolute left-[10px] top-[25px]'>
                    <img src='src/public/machinas.svg' alt='no image' width='40px' />
                </div>
                <div className='py-[20px] px-[30px] bg-white/50 rounded-[6px] relative'>
                    <h2>Alphabet Inc.</h2>
                    <small>2018-2020</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iste.</p>
                    <span className='absolute top-[30px] left-[-15px] z-[30] h-0 w-0 border-t-[15px] border-b-[15px] border-transparent border-r-[15px] border-r-white/50'></span>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
