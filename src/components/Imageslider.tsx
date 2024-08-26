import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from './Button';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

const Imageslider:React.FC = () => {
  return (
   <>
   <div className="images-sliders">
   <Swiper navigation={true} modules={[Navigation,Autoplay]}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
     speed={1300}
        className="mySwiper"
      >


<SwiperSlide className='siper'> <div className='image-slider'>
        <div className="container">
            <div  className="text d-flex align-items-center justify-content-center flex-direction-column">
                <h3 data-aos="fade-up" data-aos-duration="2500" className='rubik'>Get Driving Lessons For Skills</h3>
                <h1 data-aos="fade-down" data-aos-duration="2000"  className='text-light roboto-bolds py-4'>We’re Here To Make <br /> You Expert Drivers  </h1>

                <Button  inTextBtn='DISCOVER MORE' klassAdi='discover-btn roboto-bolds'/>
              
                
            </div>

        
        </div>

       
    </div>
</SwiperSlide>
<SwiperSlide> <div className='image-slider-1'>
        <div className="container">
            <div className="text d-flex align-items-center justify-content-center flex-direction-column">
                <h3 data-aos="fade-up" data-aos-duration="2500" className='rubik'>Get Driving Lessons For Skills</h3>
                <h1 data-aos="fade-down" data-aos-duration="2000" className='text-light roboto-bolds py-4'><span className='px-5'>Learn To Drive</span><br /> With Confidence  </h1>
                <Button inTextBtn='DISCOVER MORE' klassAdi='discover-btn roboto-bolds'/>

                
            </div>

        
        </div>

       
    </div>
    </SwiperSlide>

              </Swiper>
  
   </div>

   
   </>
    
  )
}

export default Imageslider