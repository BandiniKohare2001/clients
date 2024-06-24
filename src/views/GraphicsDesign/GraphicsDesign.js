import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import designGif from './designGif.gif'
import './GraphicsDesign.css' 

function GraphicsDesign() {
  const steps = [
    {
      title: '1. Understanding Requirements',
      description: 'Discussing and understanding your design needs and preferences.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/idea.png'
    },
    {
      title: '2. Research & Brainstorming',
      description: 'Researching design trends and brainstorming ideas.',
      icon: 'https://img.icons8.com/?size=100&id=123781&format=png&color=FAB005'
      
    },
    {
      title: '3. Concept Development',
      description: 'Creating initial design concepts and sketches.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/concept.png'
    },
    {
      title: '4. Design Execution',
      description: 'Designing the final graphics based on approved concepts.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/design.png'
    },
    {
      title: '5. Feedback & Revisions',
      description: 'Incorporating feedback and making necessary revisions.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/feedback.png'
    },
    {
      title: '6. Final Delivery',
      description: 'Delivering the final design files.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/delivery.png'
    }
  ];

  return (
    <div>
      <Navbar />
      <section
        className="bg-cover bg-center"
        style={{
          background:
            "url('https://img.freepik.com/premium-photo/people-looking-financial-statements-with-table_674594-9530.jpg?w=900')",
          height: '450px',
          backgroundSize: 'cover',
        }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <div className="col-lg-12 text-light">
              <h1 className="heading">Graphics Designing</h1>
              <h6 className="heading">We Provide Best Graphics Designing Services</h6>
            </div>
          </div>
        </div>
      </section>
      
      <div className="service d-flex p-5">
        <img src={designGif} style={{height: "500px"}} className='me-5' alt="Design gif" />
        <div className="text p-5">
          <p> Our graphics designing services ensure that your visual content stands out and accurately represents your brand identity.</p> 
          <p>We specialize in creating visually stunning designs that attract and engage your target audience.</p> 
          <p>Our team works closely with you to ensure that every design element reflects your unique values and goals. With a focus on creativity and functionality, we deliver graphics that are both beautiful and effective.</p>
          <p>Trust us to elevate your visual content and make a lasting impression on your audience.</p>
        </div>
      </div>

      <div className="process-section3 px-5">
        <h2 className="text-center">Our Design Process</h2>
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

export default GraphicsDesign;
