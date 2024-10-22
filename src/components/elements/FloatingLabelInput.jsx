import PropTypes from 'prop-types';
import { useState } from 'react';

const FloatingLabelInput = ({ type, name, placeholder, value, onChange, isTextArea = false }) => {
    const [currency, setCurrency] = useState('RON');

    return (
        <div className='relative mb-6'>
            {isTextArea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    className='p-4 block w-full bg-transparent border border-white/20 rounded-md text-white shadow-sm focus:ring-2 focus:ring-white placeholder-transparent peer h-32'
                    placeholder={placeholder}
                ></textarea>
            ) : (
                <>
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required
                        className='w-full h-12 bg-transparent border border-white/20 rounded-full text-white px-6 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white peer'
                        placeholder={placeholder}
                    />
                    {name === 'offer' && (
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none text-white outline-none focus:ring-0'
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
                className={`absolute left-4 top-2 bg-[#1a1d1a] text-white transition-all transform text-md px-[2px]
            ${value ? '-translate-y-6' : 'translate-y-2'}
            peer-placeholder-shown:translate-y-1 peer-focus:-translate-y-6`}
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
    onChange: PropTypes.func.isRequired,
    isTextArea: PropTypes.bool
};

export default FloatingLabelInput;
