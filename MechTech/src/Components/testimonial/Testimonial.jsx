import React from 'react'
import './testimonial.css'
import next  from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

function Testimonial() {
  return (
    <div className='testimonial'>
    {/* <img src={back} className='back-btn' />
    <img src={next} className='next-btn' /> */}
      <div className="slider">
        
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                        <div>
                            <h3>Robert </h3>
                            <span>Noida,India</span>
                        </div>
                    </div>
                    <p>
                    Overall, my experience at Edusity has been incredibly enriching. The academic environment fostered by dedicated faculty members and diverse peers has allowed me to delve deep into my chosen field of study while encouraging critical thinking and collaboration. The resources available, from state-of-the-art facilities to comprehensive libraries, have greatly supported my academic journey
                    </p>
                </div>
            
            
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                        <div>
                            <h3>William </h3>
                            <span>Lucknow,India</span>
                        </div>
                    </div>
                    <p>
                    Overall, my experience at Edusity has been incredibly enriching. The academic environment fostered by dedicated faculty members and diverse peers has allowed me to delve deep into my chosen field of study while encouraging critical thinking and collaboration. The resources available, from state-of-the-art facilities to comprehensive libraries, have greatly supported my academic journey
                    </p>
                </div>
    
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                        <div>
                            <h3>Sam </h3>
                            <span>Delhi,India</span>
                        </div>
                    </div>
                    <p>
                    Overall, my experience at Edusity has been incredibly enriching. The academic environment fostered by dedicated faculty members and diverse peers has allowed me to delve deep into my chosen field of study while encouraging critical thinking and collaboration. The resources available, from state-of-the-art facilities to comprehensive libraries, have greatly supported my academic journey
                    </p>
                </div>
            
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                        <div>
                            <h3> Smith </h3>
                            <span>Pune,India</span>
                        </div>
                    </div>
                    <p>
                    Overall, my experience at Edusity has been incredibly enriching. The academic environment fostered by dedicated faculty members and diverse peers has allowed me to delve deep into my chosen field of study while encouraging critical thinking and collaboration. The resources available, from state-of-the-art facilities to comprehensive libraries, have greatly supported my academic journey
                    </p>
                </div>
           
        
      </div>
    </div>
  )
}

export default Testimonial
