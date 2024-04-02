import React, { useRef } from 'react'
import './Package.css'
import img10 from '../../Imglogo/img10.jpg'
import img11 from '../../Imglogo/img11.jpg'
import img12 from '../../Imglogo/img12.jpg'
import img13 from '../../Imglogo/img13.jpg'
import img14 from '../../Imglogo/img14.jpg'
import icon5 from '../../Imglogo/icon5.png'
import icon6 from '../../Imglogo/icon6.png'


const Package = () => {
    const slider = useRef();
    let tx=0;
    const slidef =()=>{
        if(tx>-50){
            tx -= 25;
        }
        console.log(`${tx}`)
        slider.current.style.transform =`translateX(${tx}%)`;
    }
    const slideb =()=>{
        if(tx<0){
            tx += 25;
        }
        console.log(`${tx}`)
        slider.current.style.transform =`translateX(${tx}%)`;
        
    }
  return (
    <div className='package'>
        <img src={icon5} alt='' className='bbtn' onClick={slideb}/>
            <img src={icon6} alt='' className='fbtn' onClick={slidef}/>  
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='userinfo'>
                            <img src={img11} alt=''/>
                            <div>
                                <h1>Williamson</h1>
                              <span>USA,Newyork</span>
                            </div>
                        </div>
                        <p>The Experience i got by choosing this Tourist Explorer is pheneminol
                           
                        </p>
                        
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='userinfo'>
                            <img src={img12} alt=''/>
                            <div>
                                <h1>Kiara</h1>
                              <span>India,delhi</span>
                            </div>
                        </div>
                        <p>Enjoyed the experience throughout the journey
                            
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='userinfo'>
                            <img src={img13} alt=''/>
                            <div>
                                <h1>Sharma fam</h1>
                              <span>India,Mumbai</span>
                            </div>
                        </div>
                        <p>Feels very well and very excited
                            
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='userinfo'>
                            <img src={img14} alt=''/>
                            <div>
                                <h1>Klassen</h1>
                              <span>USA,Dallas</span>
                            </div>
                        </div>
                        <p>Its really a unique and fantastic experience
                        </p>
                        
                    </div>
                </li>
                
            </ul>
                  </div>
    </div>
  )
}

export default Package