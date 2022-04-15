import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers'


export default function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage ] = useState('');
    const { name, email, message} = formState;
function handleChange(e) {
    if(e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        if(!isValid) {
            setErrorMessage('Your Email is Invalid!');
        } else {
                setErrorMessage('')
            
        }
    } else {
        if(!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required`)
        } else {
            setErrorMessage('');
        }
    }

    if(!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
    }
    
}
function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
        console.log('Form Submitted', formState);
    }
};
    return(
        <div className="about-img">
    <div className="about-container container"> 
        <div className="border border-dark border-2 rounded-3 container bg-dark text-light col-6">
        <h2 className="mt-2 text-center">Contact Me</h2>
            <form className="mx-5 mb-5 text-start" onSubmit={handleSubmit}>
                
                <div className="mb-3 ">
                    <label htmlFor="name" className="form-label text-start">Your Name</label>
                    <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange}/>
                  </div>
                <div className="mb-3">
                    <label htmlFor="email"  className="form-label">Email address</label>
                    <input className="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} className="form-control"></textarea>
                  </div>
                  {errorMessage && (
          <div>
            <p className="text-warning">{errorMessage}</p>
          </div>
        )}
                  <button className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
</div>
    )
}