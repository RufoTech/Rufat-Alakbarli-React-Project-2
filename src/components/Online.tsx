import React,{useEffect} from 'react'
import { FaCarOn } from "react-icons/fa6";
import { MdOutlineEmojiPeople } from "react-icons/md";
import AOS from 'aos';

const Online:React.FC = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
   <div className="online-section">
     <div className="container">
       <div className="row">
        <div data-aos="fade-up" className="online-left-side col-12 col-md-6">
            <div className="orange-linear"></div>
            <p className='py-2 poppins-bold'>Our Introduction            </p>
            <h1 className='poppins-bold'>Schedulse Your Driving
            Lessons with Us</h1>
            <h4 className='py-3'>Vestibulum odio nisl, euismod sed elit sed <br /> sagittis laoreet lacus.</h4>
            <p  className=''>There are many variations of passages of but majority is have suffered alteration in some form by injected humour or not randomised words. Donec egestas purus eget fringilla.</p>
            
            <div className="trafic-rules d-flex align-items-center">
             <div data-aos="fade-down" data-aos-duration="1500" className="car-logo-and-text d-flex align-items-center">
             <div className="car-logo ">
              <FaCarOn  className='car-icon'/>
              

              </div>
              <div className="car-logo-h5  ">
              <h4 className='car-logo-h4 poppins-bold ' >Online Traffic <br />
              School</h4>
              </div>
             </div>
             
             <div data-aos="fade-up" data-aos-duration="1500" className="car-logo-and-text   d-flex aling-items-center ">
             <div className="car-logo car-logos">
              <MdOutlineEmojiPeople  className='car-icon people-icon'/>
              

              </div>
              <div className="car-logo-h5">
              <h4 className='car-logo-h4 car-logo-text poppins-bold'>Online Traffic <br />
              School</h4>
              
              </div>
             </div>









          



            </div>



        </div>
        <div data-aos="fade-left"  data-aos-duration="1500" className="online-right-side col-12 col-md-6">
          <img src="/assets/images/online/rider-teacher.jpg" alt=""  className='altdaki-logo'/>
          <div className="ustdeki-logo d-flex align-items-center">
          <img src="/assets/images/online/image-1.jpg" alt="" className='ustdeki-logo-png' />
          <h3 className='more-than'>More than
8,800 license
issued</h3>

          </div>

        </div>
        <div className="contact">
          <div className="contact-linear "></div>
         <h2 className='py-5'> <span className='questions '>Have Questions?</span> + 1- (246) 333-0089</h2> </div>
       
       </div>
     </div>
   </div>
  )
}

export default Online