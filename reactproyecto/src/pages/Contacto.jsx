import React from "react";
import emailjs from '@emailjs/browser';
import './Contacto.css';
import cincosoles from './assets/cincosoles.png';
import { Link } from "react-router-dom";


const Contacto = ({CONTACTO}) => {
    const sendEmail = (event) => {
        event.preventDefault();
    
        emailjs.sendForm('service_d5n5bte','template_x2cqih8',event.target,'Zjo6mNYvNam9PYTZC')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }

      return (
        <div className='div-form' id="contenedor">
             <img className="img" src= {cincosoles} alt=''/>
          <h1 className='title-form'>CONTACT US</h1>
          <form className='form-mail' onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name='user_name' />
            <hr />
            <label>Email</label>
            <input type="email" name='user_email' />
            <hr />
            <label>Message</label>
            <textarea name="user_message" id="" cols="30" rows="8"></textarea>
            <hr />
            <button> Send ✉ </button>
            <p></p>
            <button className="btn-retorno">
                <Link to="/" >
                 <span  className="btn-retorno">← Return</span>
                 </Link>
            </button>
          </form>
        </div>
      )
    }
export default Contacto; 

