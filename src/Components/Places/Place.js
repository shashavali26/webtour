import React from 'react'
import "./Place.css"
import img7 from '../../Imglogo/img7.jpg'
import img8 from '../../Imglogo/img8.jpg'
import img9 from '../../Imglogo/img9.jpg'

const Place = () => {
  return (
    <div className='place'>
        <div className='gallery'>
            <div>
            <img src={img9} alt=''/>
            <h3>Delhi</h3></div> 
            <div>
            <img src={img8} alt=''/>
            <h3>Goa</h3></div>
            <div>
            <img src={img7} alt=''/>
            <h3>Paris</h3></div>

        </div>
    </div>
  )
}

export default Place