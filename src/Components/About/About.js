import React from 'react'
import './About.css'
import icon4 from '../../Imglogo/icon4.png'
import img6 from '../../Imglogo/img6.jpg'

const About = () => {
  return (
    <div className='About'>
        <div className='Abtl'>
            <img src={img6} alt='' className='abt-img'/>
            <img src={icon4} alt='' className='abt-icon'/>
        </div>
        <div className='Abt2'>
            <h1>Travel World With Us</h1>
            <p>Attractions visited: The number and significance of tourist attractions visited during the trip.
</p>
<p>Cultural immersion: The extent to which the tourist engaged with the local culture, traditions.
</p>
<p>Accommodation quality: The comfort, cleanliness, and amenities provided by the lodging.
</p>
<p>Interaction with locals: Positive interactions with locals, which could enhance the overall experience.
</p>
<p>Safety and security: Feeling safe and secure throughout the journey.

</p>
<p>Assigning numerical value and compare tourist experiences. However, it's important to note it</p>

        </div>
    </div>
  )
}

export default About