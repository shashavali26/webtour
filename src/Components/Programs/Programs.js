import React from 'react'
import "./Programs.css"
import img3 from "../../Imglogo/img3.jpg"
import img4 from "../../Imglogo/img4.jpg"
import img5 from "../../Imglogo/img5.jpg"
import icon1 from "../../Imglogo/icon1.png"
import icon2 from "../../Imglogo/icon2.png"
import icon3 from "../../Imglogo/icon3.png"


const Programs = () => {
  return (
    <div className='Programs'>
        <div className='progarm1'>
            <img src={img3} alt=''/>
            <div className='caps'>
                <img src={icon1} alt='' className='icon'/>
                <p>Friends Trip</p>
            </div>
        </div>
        <div className='progarm1'>
            <img src={img4} alt=''/>
            <div className='caps'>
                <img src={icon2} alt=''  className='icon'/>
                <p>Family Trip</p></div>
        </div>
        <div className='progarm1' >
            <img src={img5} alt=''/>
            <div className='caps'>
                <img src={icon3} alt=''  className='icon'/>
                <p>Solo Trip</p></div>
        </div>

    </div>
  )
}

export default Programs