import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../Imglogo/img1.jpg"
import {Link} from 'react-scroll'
import hambg from '../../Imglogo/hamb.png'


const Navbar = () => {
  const [val,setVal]= useState(false);
  const click =()=>{
    val ? setVal(false):setVal(true);
    console.log(val)
  }

  return (
    <div className='container1'>
      <div className='tour'>
        <img className="img1"  src={logo} alt=''/> 
        <div>
        <h3>Tourist</h3>
         <p>Explorer</p>
        </div>
        </div>
        
        <ul className={val ? 'list1': 'list2'}>
        <li><Link to="header" smooth={500} offset={-200}> Home</Link></li>
        <li><Link to="Programs" smooth={500} offset={-200}>Programs</Link></li>
        <li><Link to="About" smooth={500} offset={-200}> About</Link></li>
        <li><Link to="package" smooth={500} offset={-250}> Reviews</Link></li>
        <li><Link to="contact" smooth={500} offset={-200} className='btn'> Contact us</Link></li>
        </ul>
        <div><img src={hambg} alt='' className='ham' onClick={click}></img></div></div>
        
  )
}

export default Navbar