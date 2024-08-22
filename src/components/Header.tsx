import React from 'react'
import { IoLocationSharp,IoMail  } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";


const Header:React.FC = () => {
  return (
    <>
    <div className="navbar-upside-color"></div>

    <nav className='navbar'>
      <div className="container">
      <div className="navbar-links ">
       <div className="navbar-link">
       <div className="navbar-location ">
        <IoLocationSharp  className='navbar-icon'/>
        <p>66 broklyn golden street. New York </p>
       


        </div>
       </div>
       <div className="navbar-link">
       <div className="navbar-mail ">
        <IoMail  className='navbar-icon'/>
        <a href="" className='text-decoration-none'><p>needhelp@company.com
        </p></a>
       


        </div>
       </div>
       <div className="navbar-link">
       <div className="navbar-clock ">
        <FaClock  className='navbar-icon-clock'/>
        <p>Mon - Sat 9:00 am to 6:00 pm </p>
       


        </div>
       </div>


      </div>
      <div className="social-media-icons">
        <a href="" className='text-decoration-none'>        <FaFacebook className='social-icon'/>
        </a>
        <a href="" className='text-decoration-none'>        <FaTwitter className='social-icon'/>
        </a>
        <a href="" className='text-decoration-none'>        <FaInstagram className='social-icon'/>
        </a>
        <a href="" className='text-decoration-none'>        <FaLinkedin className='social-icon'/>
        </a>
        <a href="" className='text-decoration-none'>        <FcGoogle />
        </a>
      </div>
      </div>

    
    </nav>

    
    <nav className="navbar navbar-2 py-5  navbar-expand-lg ">
      <div className="container">
        <div className="header-logo">
        <a className="navbar-brand" href="#"><img src="/assets/images/header-logo/logo-light.png" alt="" /></a>

        </div>
        <button 

          className="border-0 menu-buton"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <CiMenuBurger className='text-light border-0 menu'/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item rubik">
              <a className="nav-link text-light px-4" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item rubik">
              <a className="nav-link text-light px-4" href="#">About</a>
            </li>
            <li className="nav-item rubik ">
              <a className="nav-link text-light px-4" href="#">Our Courses</a>
            </li>
            <li className="nav-item rubik">
              <a className="nav-link text-light px-4" href="#">Pages</a>
            </li>
            <li className="nav-item rubik">
              <a className="nav-link text-light px-4" href="#">Blog</a>
            </li>
            <li className="nav-item rubik">
              <a className="nav-link text-light px-4" href="#">Contact</a>
            </li>
            <div className="search-linear"></div>
            <li className="nav-item rubik">
              <a className="nav-link text-light px-4" href="#"><CiSearch  className='search-icon'/>
              </a>
            </li>
         
           
          </ul>
       
        </div>
      </div>
    </nav>

    
    </>

  )
}

export default Header