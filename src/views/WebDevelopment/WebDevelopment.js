import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import imgs from './imgs.gif'
import './WebDevelopment.css' 
function WebDevelopment() {
  const steps = [
    {
      title: '1. Requirement Analysis',
      description: 'Gathering and analyzing requirements to understand the project scope.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/idea.png'
    },
    {
      title: '2. Design',
      description: 'Creating wireframes, prototypes, and final design mockups.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/design.png'
    },
    {
      title: '3. Development',
      description: 'Writing code and implementing functionalities.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/source-code.png'
    },
    {
      title: '4. Testing',
      description: 'Testing the website to ensure it is bug-free and works as intended.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/checked.png'
    },
    {
      title: '5. Deployment',
      description: 'Deploying the website to the live server.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/cloud.png'
    },
    {
      title: '6. Maintenance',
      description: 'Providing ongoing support and updates.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/maintenance.png'
    }
  ];

  return (
    <div>
      <Navbar />
      <section
        className="bg-cover bg-center"
        style={{
          background:
            "url('https://img.freepik.com/premium-photo/web-development-coding-programming-site-application-laptop_272306-16.jpg?w=996')",
          height: '450px',
          backgroundSize: 'cover',
        }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <div className="col-lg-12 text-light">
              <h1 className="heading">Web Development</h1>
              <h6 className="heading">We Provide Best Web Development</h6>
            </div>
          </div>
        </div>
      </section>
      
      <div className="service d-flex p-5">
        <img src={imgs} style={{height: "400px"}} className='ps-5' alt="Web development gif" />
        <div className="text p-5">
          <p> Our full-scale website development services guarantee that your online presence accurately represents your brand identity while effectively engaging your target audience.</p> 
          <p>We specialize in creating websites that not only capture the essence of your brand but also attract and retain visitors.</p> 
          <p>Our team ensures every aspect of your website is tailored to reflect your unique values and goals. With a focus on user experience and design, we build websites that are both visually appealing and highly functional.</p>
          <p>Trust us to elevate your online presence and make a lasting impact on your audience.</p>
        </div>
      </div>

      <div className="process-section">
        <h2 className="text-center">Our Development Process</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <img src={step.icon} alt={step.title} className="process-icon" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default WebDevelopment;
