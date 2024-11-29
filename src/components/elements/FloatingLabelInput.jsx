import PropTypes from 'prop-types';

const FloatingLabelInput = ({ type, name, placeholder, value, selectvalue, onChange, isTextArea = false }) => {
    const handleInputChange = (e) => {
        onChange(e);
    };

    const handleSelectChange = (e) => {
        const event = { target: { name: 'currency', value: e.target.value } };
        onChange(event);
    };

    return (
        <div className='relative mb-6'>
            {isTextArea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={handleInputChange}
                    required
                    className='p-4 block w-full bg-transparent border border-white/20 rounded-md text-white shadow-sm focus:ring-2 focus:ring-white placeholder-transparent peer h-32'
                ></textarea>
            ) : (
                <>
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={handleInputChange}
                        required
                        className='w-full h-12 bg-transparent border border-white/20 rounded-full text-white px-6 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white peer'
                    />
                    {selectvalue && (
                        <select
                            value={selectvalue}
                            onChange={handleSelectChange}
                            className='absolute right-4 top-0 bottom-0 my-auto h-full bg-transparent border-none text-white outline-none focus:ring-0'
                        >
                            <option value='RON' className='bg-black text-white'>
                                RON
                            </option>
                            <option value='USD' className='bg-black text-white'>
                                USD
                            </option>
                            <option value='EUR' className='bg-black text-white'>
                                EUR
                            </option>
                            <option value='GBP' className='bg-black text-white'>
                                GBP
                            </option>
                        </select>
                    )}
                </>
            )}
            <label
                htmlFor={name}
                className={`absolute left-4 top-1 bg-[#1a1d1a] text-white transition-all duration-300 transform text-md px-[2px]
            ${value ? '-translate-y-4' : 'translate-y-2'}
            peer-placeholder-shown:translate-y-1 peer-focus:-translate-y-5`}
            >
                {placeholder}
            </label>
        </div>
    );
};

FloatingLabelInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    selectvalue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isTextArea: PropTypes.bool
};

export default FloatingLabelInput;
