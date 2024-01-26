import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';
    
const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: ''
    });

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        mobile: false
    });

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        setRegistrationSuccess(false)
        e.preventDefault();
        let hasErrors = false;

        if (!formData.firstName.trim()) {
            setErrors(prev => ({ ...prev, firstName: true }));
            hasErrors = true;
        } else 
            setErrors(prev => ({ ...prev, firstName: false }));
        

        if (!formData.lastName.trim()) {
            setErrors(prev => ({ ...prev, lastName: true }));
            hasErrors = true;
        } else 
            setErrors(prev => ({ ...prev, lastName: false }));
        

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !formData.email.match(emailRegex)) {
            setErrors(prev => ({ ...prev, email: true }));
            hasErrors = true;
        } else 
            setErrors(prev => ({ ...prev, email: false }));
        

        const mobileRegex = /^\d{10}$/;
        if (!formData.mobile.trim() || !formData.mobile.match(mobileRegex)) {
            setErrors(prev => ({ ...prev, mobile: true }));
            hasErrors = true;
        } else 
            setErrors(prev => ({ ...prev, mobile: false }));
        

        if (!hasErrors) 
            toast.success("Registration successful!");
    };

    return (
        <div className='form-container'>
        <ToastContainer />
            <div className='form-header'>
                <h2 className='form-title'>Register for the Gaming Community</h2>
                {registrationSuccess && <p className="success-message">Registration successful!</p>}
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label className='form-label'>
                        <p className="label-text">First Name:</p>
                        <input 
                            className='form-input'
                            type="text"
                            name="firstName"
                            placeholder="Enter your first Name"
                            onChange={handleChange}
                        />
                        {errors.firstName && <p className="error-message">Enter your first Name</p>}
                    </label>
                </div>
                <div className='form-group'>
                    <label className='form-label'>
                        <p className="label-text">Last Name:</p>
                        <input
                            className='form-input'
                            type="text"
                            placeholder="Enter your last name"
                            name="lastName"
                            onChange={handleChange}
                        />
                        {errors.lastName && <p className="error-message">Enter your last Name</p>}
                    </label>
                </div>
                <div className='form-group'>
                    <label className='form-label'>
                        <p className="label-text">Email:</p>
                        <input
                            className='form-input'
                            type="text"
                            placeholder="Enter your Email"
                            onChange={handleChange}
                            name="email"
                        />
                        {errors.email && <p className="error-message">Invalid email</p>}
                    </label>
                </div>
                <div className='form-group'>
                    <label className='form-label'>
                        <p className="label-text">Mobile:</p>
                        <input 
                            className='form-input'
                            type="text"
                            placeholder="Enter your number"
                            onChange={handleChange}
                            name="mobile"
                        />
                        {errors.mobile && <p className="error-message">Invalid mobile number</p>}
                    </label>
                </div>
                <button className='form-button' type="submit">Register</button>
            </form>
        </div>
    );
};

export default Form;
