import React from 'react'
import {  FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer:React.FC = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="social-medias">
                        <div className="social-media"><FaFacebook className='facacebook'/></div>
                        <div className="social-media">                        <FaTwitter className='fatwiter'/>
                        </div>
                        <div className="social-media">                        <FaInstagram className='fainsta'/>
                        </div>
                        <div className="social-media">                        <FaLinkedin className='falink'/>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-3 footer-link"> 
                    <h5>Our Courses</h5>
                    <h5 className='py-2'>Our Courses</h5>
                    <h5 className='py-2'>Our Courses</h5>
                    <h5>Our Courses</h5>
                </div>
                <div className="col-12 col-md-3 footer-link"> 
                    <h5>66 Broklyn Road Golden Street New York 8756. United States of Ameirca</h5>
                </div>
                <div className="col-12 col-md-3 footer-link"> 
                    <h5 className='text-light fotor'>+ 1-(246)333-0089 needhelp@company.com
                    Mon - Sat 9:00 am to 6:00 pm</h5>
                </div>
            </div>
        </div>
        <div className="py-5 "></div>
        <div className="orange-linear"></div>
        <div className="footer-final py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h6 className='text-light'>© Copyright 2022 by DrivingSchool.com
                        </h6>

                    </div>
                    <div className="col-12 col-md-4 header-logo">
                        <img src="/assets/images/header-logo/logo-light.png" alt="" />

                    </div>
                    <div className="col-12 col-md-4">
                        <a href='' className='text-light footer-deneme'>Terms & Condition
Privacy Policy
Help </a>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer