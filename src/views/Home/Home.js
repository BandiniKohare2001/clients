import React from 'react'

import ithea from "./ithea.png"
import poster from "./poster.png"
import "./Home.css"
import ServiceCards from '../../components/ServiceCard/ServicesCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <Navbar/>
    
      <div>
      <section className="px-5 py-5 top-space-padding bg-gradient-very-light-gray overflow-hidden position-relative lg-pb-30px" style={{
        // backgroundColor:"#ffcccc" 
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundImage:"url('https://img.freepik.com/free-photo/young-man-indicating-up_23-2148320014.jpg?t=st=1719159779~exp=1719163379~hmac=943ce2e3be72551ba7028a88f08f040745f88df0e8768fac368da66543bbb113&w=740')"

      }}>
      <div className=" container hero-section h-100">
        <div className="hea-home row align-items-center h-100 md-mt-50px">
          <div className=" ms-5 col-xl-6 col-lg-6 mb-9 position-relative z-index-1" style={{width:"500px"}} data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div className="d-flex align-items-start align-items-sm-center alt-font mb-30px mt-5 ">
              <div className="flex-shrink-0 bg-cabaret-red fw-600 text-white text-uppercase ps-20px pe-20px fs-7  border-radius-100px">
                <span style={{color: 'white', backgroundColor: 'green', borderRadius: '50px', fontSize:"10px"}} className='px-4 py-2'>IT Tech Services</span>
              </div>
              <span className="fs-18 fw-500" data-fancy-text='{ "effect": "rotate", "string": ["Custom Solutions for Your IT Needs", "Cutting-edge Technology Implementation", "Experience Excellence in IT Services"], "speed": 50, "duration": 3500 }'></span>
            </div>
            <h1 className="alt-font text-dark-gray ls-minus-2px mb-20" style={{fontWeight:"bold", fontSize:"60px", color:"white", textAlign:"start"}}>Empowering IT Solutions<span className="text-highlight"><span className="bg-cabaret-red opacity-3 h-12px bottom-15px"></span></span></h1>
            <div className=" alt-font fw-500 fs-19 w-85 sm-w-100 mb-35px xs-mb-25px" style={{fontWeight:"400"}}><p style={{color:"whitesmoke"}}>Enhance your business with our innovative IT services tailored to your needs.</p></div>
            <Link to="/about" >
              <div className="btn-dark-gray1 px-5 py-3 btn mt-3 btn-extra-large  btn-hover-animation-switch btn-round-edge btn-box-shadow btn-icon-left me-25px">
                <span className="btn-text">Learn More</span>
                </div>
            </Link>
         
            {/* <div style={{marginTop: '-400px'}} >
              <img src={ithea} alt="IT Tech Services" style={{ marginLeft: '560px'}}/>
            </div> */}
          </div>
          
        </div>
        <div className='500px ms-5 '><img className='hero-section-img ms-5' src={ithea} alt="IT Tech Services" style={{height:"500px" , width:"100%", marginTop:"-50px"}}/></div>
      </div>
    </section>



    <section className="position-relative pb-0" style={{marginTop: '100px'}}>
      <img src="images/it-tech-bg.png" className="position-absolute top-50px lg-top-120px left-0px lg-w-50" data-bottom-top="transform: translateY(150px)" data-top-bottom="transform: translateY(-150px)" alt=""/>
      <div className="container position-relative">
        <div className="row align-items-center mb-4 sm-mb-25px">
          <div className="col-xl-6 col-lg-6 text-center text-lg-start md-mb-30px" data-anime='{ "translate": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <img src="https://img.freepik.com/free-photo/multi-ethnic-businesspeople-discussing-financial-company-solution-sitting-conference-table-meeting-room_482257-2174.jpg?t=st=1712947682~exp=1712951282~hmac=f9a71f2cce0801aef84d75f5386d251c90bcc3dc1c4da9d09505b0c462dd1f0c&w=360" style={{height: '670px', width:'100%', backgroundColor:"#ffe6e6", padding:"30px", border:"1px solid #ff9999"}} className="md-w-90 sm-w-100" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)" alt=""/>
          </div>
          <div className="div-evaluate-service mt-2 col-xl-5 col-lg-6 offset-xl-1" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }' style={{width:"400px" , marginLeft:"50px"}}>
            <div className=" px-4 bg-base-color fw-600 text-uppercase ps-20px pe-20px  border-radius-100px d-inline-block mb-25px mb-5 py-2" style={{color: 'white', backgroundColor: 'blue', borderRadius: '50px' , fontSize:"10px"}}>IT Tech Services</div>
            <h2 className="mb-3 fw-bold alt-font text-dark-gray ls-minus-1px w-95" style={{fontSize:"40px"}}>Elevate Your IT Infrastructure with Cutting-Edge Solutions<span className="text-highlight"><span className="bg-base-color opacity-3 h-10px bottom-10px"></span></span></h2>
            <p>Our IT tech services offer comprehensive solutions to enhance your organization's technological capabilities. From network security to software development, we've got you covered.</p>
            <div className="icon-with-text-style-08 mb-10px">
              <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-very-light-gray rounded-circle me-15px mt-1">
                  <i className="fa-solid fa-check fs-14 text-success"></i><span className="text-dark-gray fw-500 ms-3">App Development</span>
                </div>
               
              </div>
            </div>
            <div className="icon-with-text-style-08 mb-10px">
              <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-very-light-gray rounded-circle me-15px mt-3">
                  <i className="fa-solid fa-check fs-14 text-success"></i>
                  <span className="text-dark-gray fw-500 ms-3">Web Development</span>
                </div>
               
              </div>
            </div>

            <div className="icon-with-text-style-08 mb-10px">
              <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-very-light-gray rounded-circle me-15px my-3">
                  <i className="fa-solid fa-check fs-14 text-success"></i>
                  <span className="text-dark-gray fw-500 ms-3">Custom Software Development</span>
                </div>
               
              </div>
            </div>

            
            <div className="icon-with-text-style-08 mb-10px">
              <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-very-light-gray rounded-circle me-15px ">
                  <i className="fa-solid fa-check fs-14 text-success"></i>
                  <span className="text-dark-gray fw-500 ms-3">IT Consulting Services</span>
                </div>
                
              </div>
            </div>
            <div className="mt-3">
            <Link to="/about" >
              <div className="btn-dark-gray1 px-5 py-3 btn mt-3 btn-extra-large  btn-hover-animation-switch btn-round-edge btn-box-shadow btn-icon-left me-25px">
                <span className="btn-text">Discover More</span>
                </div>
            </Link>
              {/* <a href="#" className="btn btn-link btn-hover-animation-switch btn-extra-large text-dark-gray btn-icon-left align-middle p-0 xs-mt-20px xs-mb-20px">
                <span>
                  <span className="btn-text ms-5">Explore Services</span>
                  <span className="btn-icon"><i className="feather icon-feather-briefcase"></i></span>
                  <span className="btn-icon"><i className="feather icon-feather-briefcase"></i></span>
                </span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
    <div><ServiceCards/></div>
    </section>

   

  {/* <section className="bg-light mt-5 py-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 position-relative text-center text-lg-start">
            <div className="bg-primary fw-bold text-white text-uppercase px-3 py-1 fs-8 rounded-pill d-inline-block mb-3">IT Tech Services</div>
            <h2 className="fw-bold alt-font text-dark ls-1 w-50 mb-3 lg-w-100">
              Need IT solutions?<span className="text-highlight"> We can help you<span className="bg-primary opacity-3 h-10px d-block"></span></span>
            </h2>
            <div className="row align-items-center g-0">
              <div className="w-100 mt-2 d-flex align-items-center justify-content-center justify-content-lg-start">
                <span className="alt-font fw-500 lh-26 fs-5 text-start">Our IT tech services team offers comprehensive solutions for businesses. From network management to cybersecurity, we provide:</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion accordion-flush" id="accordionFlushExample">
             
             
             
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section className="bg-very-light-gray p-0 my-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60045.638422952834!2d79.32460349347924!3d19.846197205653763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d2ea9f3225a3%3A0x9771a920a14a7781!2sBallarpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713243886600!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>


  <section>
    <Footer/>
  </section>
      </div>
    </div>
  )
}

export default Home
