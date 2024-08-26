import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { FaCarOn } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";


const Teacher:React.FC = () => {
  return (
    <div className="teacher">
        <div className="container">
            <div className="row">
                <div className="teacher-text-left-side col-12 col-md-6">
                    <div className="teacher-linear"></div>
                    <p className='poppins-bold py-2'>Ready to Learn Driving?
                    </p>
                   
                   <h1 className='poppins-bold '>We Help Students to Pass
Test & Get a License on the
First Try</h1>

                </div>
                <div className="teacher-text-right-side col-12 col-md-6 ">
                <div className="right-side-text">
                <FaRegCirclePlay  className='player-button text-light'/>
                <h2 className='text-light poppins-bold'>Road Test <br />
Dui Quis <br />
Place.</h2>
                </div>
                



                </div>
            </div>
            <div className="linear"></div>

          <div className="row">
          <div className="academic-award-1 py-5 col-12 col-md-4 ">
           <div className="academic-skills d-flex align-items-center">
            <div className="academic-logo">
            <HiAcademicCap className='text-light academic-papka'/>

            </div>
            <h2 className='text-light px-4 poppins-bold'>A to Z Driving
            Skills</h2>
           </div>
           <h5 className='lorem-h5 py-5'>Lorem ipsum dolor sit a consete sadip scing elitr sed diam nonumy eirmod tempor invidunt.
           </h5>

           </div>

          <div className="academic-award-1 py-5 col-12 col-md-4 ">
           <div className="academic-skills d-flex align-items-center">
            <div className="academic-logo">
              
            <FaCarSide className='text-light academic-papka'/>

            </div>
            <h2 className='text-light px-4 poppins-bold'>Courses for
            Everyone
           </h2>
           </div>
           <h5 className='lorem-h5 py-5'>Lorem ipsum dolor sit a consete sadip scing elitr sed diam nonumy eirmod tempor invidunt.
           </h5>


           </div>
          <div className="academic-award-1 py-5 col-12 col-md-4 ">
           <div className="academic-skills d-flex align-items-center">
            <div className="academic-logo">
            <FaCarOn className='text-light academic-papka'/>

            </div>
            <h2 className='text-light px-4 poppins-bold'>Car for Driving
            Tests
          </h2>
           </div>
           <h5 className='lorem-h5  py-5'>Lorem ipsum dolor sit a consete sadip scing elitr sed diam nonumy eirmod tempor invidunt.
           </h5>


           </div>
          
          </div>
        </div>
    </div>
  )
}

export default Teacher