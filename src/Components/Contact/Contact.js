import React from 'react'
import './Contact.css'
import insta from '../../Imglogo/insta.png'
import email from '../../Imglogo/email.png'
import whatsapp from '../../Imglogo/whatsapp.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='concol1'>
            <h3>Send us Message</h3>
            
            <ul>
                <li><img src={insta} alt='' className="ccimg"/> <span>:Toutist_Exploer</span></li>
                <li><img src={email} alt=''/> <span>:touristexplorer@gmail.com</span></li>
                <li><img src={whatsapp} alt=''/> <span>:+91 98998 899373</span></li>
            </ul>
        </div>
        <div>
            <form className='form'>
                <h1> Submit your review</h1>
                <div><label for='name'> Name :</label>
                <input type='text' id="name"></input></div>
               <div>
               <label for='name'> Email:</label>
                <input type='text' id="name"></input>
               </div>
                <div>
                <label for="textarea">Write description</label>
                <input type='text'></input>
                </div>
                <input type="submit" className='btn5'></input>
               
            </form>
        </div>
    </div>
  )
}

export default Contact