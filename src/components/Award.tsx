import React from 'react'

const Award:React.FC = () => {
  return (
    <div className="awards py-5 my-5">
        <div className="container">
            <div className="row">
                <div className="award py-5 col-12 col-md-6 col-lg-3 text-center">
                    <img src="/assets/images/award/car-insurance.png" alt="" className='car-award-logo' />
                    <h1 className=''>8705</h1>
                    <p className='h5'>Licenses Issued</p>



                </div>
                
                <div className="award py-5 col-12 col-md-6 col-lg-3 text-center">
                    <img src="/assets/images/award/maintenance.png" alt="" className='car-award-logo' />
                    <h1 className=''>6803</h1>
                    <p className='h5'>Fixed Problem</p>
                    <div className="bridge-linear "></div>



                </div>
                <div className="award py-5 col-12 col-md-6 col-lg-3 text-center">
                    <img src="/assets/images/award/car-service.png" alt="" className='car-award-logo' />
                    <h1 className=''>3650</h1>
                    <p className='h5'>Car Cleaning</p>
                    <div className="bridge-linear bridge-tablet "></div>



                </div>
                <div className="award py-5 col-12 col-md-6 col-lg-3 text-center">
                    <img src="/assets/images/award/checklist.png" alt="" className='car-award-logo' />
                    <h1 className=''>7800
                    </h1>
                    <p className='h5'>Sucsessful Mission</p>
                    <div className="bridge-linear "></div>



                </div>

            </div>

            <div className="card-workers">
                <div className="worker-linear  my-4"></div>
                <h4 className=' text-center'>Courses We’re Offering
                </h4>
                <h1 className='text-center py-4 poppins-bold'>Our Driving Courses
                </h1>

                <div className="row">
                    <div className="worker-1 py-3 col-12 col-md-6 col-lg-4">
                    <div className="card ">
  <img src="/assets/images/award/image-3.jpg" className="card-img-top" alt="..."/>
  <img src="/assets/images/award/image-6.jpg" className="card-man" alt="... "/>

  <div className="card-body py-5 my-4">
    <h5 className="card-title poppins-bold text-center">Instructor</h5>
    <h4 className='poppins-bold card-name'>Kevin Martin
    </h4>
    <h2 className='text-center py-3 '>Highway
    Driving Lessons</h2>
    <h5 className="card-text text-center">Sed quia magni dolores eos
qui ratione voluptatem sequi
nesciunt eque porro.</h5>
<div className="worker-price py-3 my-5">
<h5 className='text-center '>Starts from: <span className='poppins-bold price-dollar'>$45 - $170</span></h5>
</div>
   </div>
  </div>

                    </div>
                    <div className="worker-1 py-3 col-12 col-md-6 col-lg-4">
                    <div className="card ">
  <img src="/assets/images/award/image-4.jpg" className="card-img-top" alt="..."/>
  <img src="/assets/images/award/image-7.jpg" className="card-man" alt="... "/>

  <div className="card-body py-5 my-4">
    <h5 className="card-title poppins-bold text-center">Instructor</h5>
    <h4 className='poppins-bold card-name'>Mark Jossef

    </h4>
    <h2 className='text-center py-3 '>Automatic Car
    Lessons</h2>
   
    <h5 className="card-text text-center">Sed quia magni dolores eos
qui ratione voluptatem sequi
nesciunt eque porro.</h5>
<div className="worker-price py-3 my-5">
<h5 className='text-center '>Starts from: <span className='poppins-bold price-dollar'>$45 - $170</span></h5>
</div>
   </div>
  </div>

                    </div>
                    <div className="worker-1 py-3 col-12 col-md-6 col-lg-4">
                    <div className="card ">
  <img src="/assets/images/award/image-5.jpg" className="card-img-top" alt="..."/>
  <img src="/assets/images/award/image-8.jpg" className="card-man" alt="... "/>

  <div className="card-body py-5 my-4">
    <h5 className="card-title poppins-bold text-center">Instructor</h5>
    <h4 className='poppins-bold card-name'>Robert Martin
    </h4>
    <h2 className='text-center py-3 '>For
  International Drivers</h2>
    <h5 className="card-text text-center">Sed quia magni dolores eos
qui ratione voluptatem sequi
nesciunt eque porro.</h5>
<div className="worker-price py-3 my-5">
<h5 className='text-center '>Starts from: <span className='poppins-bold price-dollar'>$45 - $170</span></h5>
</div>
   </div>
  </div>

                    </div>
                   
                </div>

            </div>
        </div>
    </div>
  )
}

export default Award