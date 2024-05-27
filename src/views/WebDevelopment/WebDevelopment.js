import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import imgs from "./imgs.gif"

function WebDevelopment() {
  return (
    <div>
      <div><Navbar/></div>
      <section
        className="bg-cover bg-center"
        style={{
          background:
            "url('https://img.freepik.com/premium-photo/web-development-coding-programming-site-application-laptop_272306-16.jpg?w=996')",
          height: '450px',
          backgroundSize: 'cover',
        }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center ">
          <div className="text-center ">
          <div className="col-lg-12 text-light">
            <h1 className="heading">Web Development</h1>
            <h6 className="heading">We Provide Best Web Development</h6>
          </div>
          </div>
        </div>
      </section>
      
    <div>
      <div className="service d-flex p-5">
      <img src={imgs} style={{height:"400px"}} className='ps-5' />
        <div className="text p-5">
          <p className=''> Our full-scale website development services guarantee that your online presence accurately represents your brand identity while effectively engaging your target audience.</p> 
          <p>We specialize in creating websites that not only capture the essence of your brand but also attract and retain visitors.</p> 
          <p>Our team ensures every aspect of your website is tailored to reflect your unique values and goals. With a focus on user experience and design, we build websites that are both visually appealing and highly functional.</p> Trust us to elevate your online presence and make a lasting impact on your audience.</div>
       
      </div>
    </div>



      <div><Footer/></div>
    </div>
  )
}

export default WebDevelopment;
