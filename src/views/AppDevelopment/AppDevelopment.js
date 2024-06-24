import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import home from './homegif.gif'
import './AppDevelopment.css'

function AppDevelopment() {
  const steps = [
    {
      title: '1. Ideation & Planning',
      description: 'Understanding your vision, defining the scope, and planning the project.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/idea.png'
    },
    {
      title: '2. Design',
      description: 'Creating wireframes, prototypes, and final design mockups.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/design.png'
    },
    {
      title: '3. Development',
      description: 'Coding the app and implementing the required functionalities.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/source-code.png'
    },
    {
      title: '4. Testing',
      description: 'Conducting thorough testing to ensure a bug-free and smooth experience.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/checked.png'
    },
    {
      title: '5. Deployment & Maintenance',
      description: 'Launching the app and providing ongoing support and updates.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/cloud.png'
    }
  ];

  return (
    <div>
      <Navbar />
      <section
        className="bg-cover bg-center"
        style={{
          background:
            "url('https://img.freepik.com/free-photo/person-working-html-computer_23-2150038857.jpg?t=st=1716736278~exp=1716739878~hmac=65e370780eb9aefc0ae61509733ed50024cfd519c0d4f1ce8b8e5894eb2adb76&w=740')",
          height: '450px',
          backgroundSize: '100%',
        }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <div className="col-lg-12 text-light">
              <h1 className="heading">App Development</h1>
              <h6 className="heading">We Provide Best App Development Services</h6>
            </div>
          </div>
        </div>
      </section>
      
      <div className="service d-flex p-5">
        <div className="text p-5 mt-3">
          <p>
            Our comprehensive app development services ensure that your digital presence accurately represents your brand identity while effectively engaging your target audience.
          </p> 
          <p>
            We specialize in developing apps that not only capture the essence of your brand but also attract and retain users.
          </p> 
          <p>
            Our team ensures every aspect of your app is tailored to reflect your unique values and goals. With a focus on user experience and design, we build apps that are both visually appealing and highly functional.
          </p> 
          <p>Trust us to elevate your digital presence and make a lasting impact on your audience.</p>
        </div>
        <img src={home} className="home-image" alt="Home gif" />
      </div>

      <div className="process-section px-5">
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
  );
}

export default AppDevelopment;
