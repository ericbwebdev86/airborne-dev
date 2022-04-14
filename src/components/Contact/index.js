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
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }
    }

    if(!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    
}
function handleSubmit(e) {
    e.preventDefault();
    console.log(formState)
}
    return(
        <div className="about-img">
    <div className="about-container container"> 
        <div className="border border-dark border-2 rounded-3 container bg-dark text-light col-6">
        <h2 className="mt-2 text-center">Contact Me</h2>
            <form className="mx-5 mb-5 text-start" onSubmit={handleSubmit}>
                
                <div className="mb-3 ">
                    <label for="nameInput" className="form-label text-start">Name</label>
                    <input type="name" name="name" className="form-control" id="nameInput" defaultValue={formState.name} placeholder="Arthas Menethil" onChange={handleChange}/>
                  </div>
                <div className="mb-3">
                    <label for="emailInput" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="emailInput" defaultValue={formState.email} placeholder="arthas.menethil@lordaeron.com"/>
                  </div>
                  <div className="mb-3">
                    <label for="textAreaInput" className="form-label">Your Message</label>
                    <textarea name="message" className="form-control" id="textAreaInput" rows="3" defaultValue={formState.message} placeholder="I would like to hire you..."></textarea>
                  </div>
                  <button className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
</div>
    )
}