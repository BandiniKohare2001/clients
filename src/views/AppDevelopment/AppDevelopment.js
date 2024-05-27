import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import home  from "./homegif.gif"

function AppDevelopment() {
  return (
    <div>
      <div>
      <div><Navbar/></div>
      <section
        className="bg-cover bg-center"
        style={{
          background:
            "url('https://img.freepik.com/free-photo/person-working-html-computer_23-2150038857.jpg?t=st=1716736278~exp=1716739878~hmac=65e370780eb9aefc0ae61509733ed50024cfd519c0d4f1ce8b8e5894eb2adb76&w=740')",
          height: '450px',
          backgroundSize: '100%',
        }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center ">
          <div className="text-center ">
          <div className="col-lg-12 text-light">
            <h1 className="heading">App Development</h1>
            <h6 className="heading">We Provide Best App Development Services</h6>
          </div>
          </div>
        </div>
      </section>
      
    <div>
      <div className="service d-flex p-5">

        <div className="text p-5 mt-3">
          <p className=''> Our full-scale website development services guarantee that your online presence accurately represents your brand identity while effectively engaging your target audience.</p> 
          <p>We specialize in creating websites that not only capture the essence of your brand but also attract and retain visitors.</p> 
          <p>Our team ensures every aspect of your website is tailored to reflect your unique values and goals. With a focus on user experience and design, we build websites that are both visually appealing and highly functional.</p> Trust us to elevate your online presence and make a lasting impact on your audience.
          </div>
          <img src={home} style={{}} className='' />
      </div>
    </div>



      <div><Footer/></div>
    </div>
    </div>
  )
}

export default AppDevelopment
