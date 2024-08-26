import React, { useRef, useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

export const Selling: React.FC = () => {
  const faizBarRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animasyon tetiklendikten sonra gözlemciyi devre dışı bırakır
        }
      },
      {
        threshold: 1, // Elementin %50'si görünür olduğunda tetiklenir
      }
    );

    if (faizBarRef.current) {
      observer.observe(faizBarRef.current);
    }

    return () => {
      if (faizBarRef.current) {
        observer.unobserve(faizBarRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="selling py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="selling-right-side col-12 col-md-6">
              <img src="/assets/images/online/image-10.jpg" alt="" className='w-100 selling-man' />
              <img src="/assets/images/online/shape-1.png" alt="" className='shape-figure' />
              <div className="bubble-div">
                <div className="bubble-text">
                  <h6 className='text-dark text-center my-5 py-2 poppins-bold'>We’re Experience Drivers</h6>
                </div>
              </div>
            </div>

            <div className="selling-left-side col-12 col-md-6">
              <div className="driver-linear"></div>
              <p className='py-4'>
                Get to Know More
                <h1 className='text-dark poppins-bold py-3'>We’ve Great Experience of Driving</h1>
                <h5 className='text-dark py-5'>
                  There are many variations of passages of but majority suffered alteration in some form by injected humour or not randomised words. Donec egestas purus eget fringilla.
                </h5>
              </p>

              <div className="trafic-skills-common-part">
                <div className="trafic-skills-common">
                  <div className="rider-skills d-flex align-items-center">
                    <FaArrowRight className='skills-right' />
                    <h5 className='poppins-bold'>Affordable Fee</h5>
                  </div>
                  <p className='py-4 text-dark'>Lorem ipsum dolor sit amet not <br /> consectetur notted.</p>
                </div>
                <div className="trafic-skills-common-2">
                  <div className="rider-skills d-flex align-items-center">
                    <FaArrowRight className='skills-right' />
                    <h5 className='poppins-bold'>Perfect Timing</h5>
                  </div>
                  <p className='py-4 text-dark'>Lorem ipsum dolor sit amet not <br /> consectetur notted.</p>
                </div>
              </div>
              
              <div ref={faizBarRef} className="faiz-text">
                <h3>Driving</h3>
                <h6>65%</h6>
                <div className="faiz-bar my-3">
                  <div className={`faiz-dolma my-3 ${isVisible ? 'active' : ''}`}></div>
                </div>
              </div>

              <div className="faiz-text my-5">
                <h3>Learning</h3>
                <h6>65%</h6>
                <div className="faiz-bar my-3">
                  <div className={`faiz-dolma my-3 ${isVisible ? 'active' : ''}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selling;
