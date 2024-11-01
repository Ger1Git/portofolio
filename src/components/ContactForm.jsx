import { useState } from 'react';
import emailjs from 'emailjs-com';
import StyledHeader from './StyledHeader';
import FloatingLabelInput from './elements/FloatingLabelInput';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        offer: '',
        currency: 'RON',
        jobDescription: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = 'service_piytzuf';
        const templateID = 'template_souzf62';
        const userID = '9Z_Ibgmbvl-FXfXQa';

        try {
            await emailjs.send(serviceID, templateID, formData, userID);

            setFormData({
                companyName: '',
                email: '',
                offer: '',
                currency: formData.currency,
                jobDescription: '',
                message: ''
            });
        } catch (error) {
            alert('Failed to send email. Please try again.');
            console.log('FAILED...', error);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center mb-[50px] lg:mb-[100px]' id='contact'>
            <form onSubmit={handleSubmit} className='bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-lg p-8 w-full max-w-sm'>
                <StyledHeader text={'Contact'} />

                <div className='mt-8 flex flex-col gap-[10px]'>
                    <FloatingLabelInput type='text' name='companyName' placeholder='Company Name' value={formData.companyName} onChange={handleChange} />
                    <FloatingLabelInput type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
                    <FloatingLabelInput
                        type='text'
                        name='offer'
                        placeholder='Offer'
                        value={formData.offer}
                        selectvalue={formData.currency}
                        onChange={handleChange}
                    />
                    <FloatingLabelInput
                        type='text'
                        isTextArea={true}
                        name='jobDescription'
                        placeholder='Job Description'
                        value={formData.jobDescription}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type='submit'
                    className='w-full h-12 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-shadow duration-300 shadow-md'
                >
                    Send Mail
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
