import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Card:React.FC = () => {
  return (
    <>
    <div className='boss-card '>
     
            <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        className="mySwiper"
      >
          <SwiperSlide> <div className="card-boss  py-5 ">
                <div className="card-mudur ">
 <div className="container">
 <div className="card-body ">
    <h5 className="card-title  card-boss-title ">I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</h5>
    <div className="boss d-flex py-5 ">
        <img src="/assets/images/award/image-6.jpg" alt="" />
        <div className="boss-texts  px-4">
            <h5 className='poppins-bold'>Mike Hardson</h5>
            <p>Student</p>
        </div>
    </div>
  </div>
 </div>
</div>
                </div></SwiperSlide>
          <SwiperSlide> <div className="card-boss  py-5 ">
                <div className="card-mudur ">
 <div className="container">
 <div className="card-body ">
    <h5 className="card-title  card-boss-title ">I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</h5>
    <div className="boss d-flex py-5 ">
        <img src="/assets/images/award/image-6.jpg" alt="" />
        <div className="boss-texts  px-4">
            <h5 className='poppins-bold'>Mike Hardson</h5>
            <p>Student</p>
        </div>
    </div>
  </div>
 </div>
</div>
                </div></SwiperSlide>
          <SwiperSlide> <div className="card-boss  py-5 ">
                <div className="card-mudur ">
 <div className="container">
 <div className="card-body ">
    <h5 className="card-title  card-boss-title ">I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</h5>
    <div className="boss d-flex py-5 ">
        <img src="/assets/images/award/image-6.jpg" alt="" />
        <div className="boss-texts  px-4">
            <h5 className='poppins-bold'>Mike Hardson</h5>
            <p>Student</p>
        </div>
    </div>
  </div>
 </div>
</div>
                </div></SwiperSlide>
          <SwiperSlide> <div className="card-boss  py-5 ">
                <div className="card-mudur ">
 <div className="container">
 <div className="card-body ">
    <h5 className="card-title  card-boss-title ">I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia.</h5>
    <div className="boss d-flex py-5 ">
        <img src="/assets/images/award/image-6.jpg" alt="" />
        <div className="boss-texts  px-4">
            <h5 className='poppins-bold'>Mike Hardson</h5>
            <p>Student</p>
        </div>
    </div>
  </div>
 </div>
</div>
                </div></SwiperSlide>
         </Swiper>
       
        
              
               
            </div>
      
   

    </>
  )
}

export default Card