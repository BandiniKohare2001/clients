import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import marketingGif from './marketingGif.gif'
import './DigitalMarketing.css' 

function DigitalMarketing() {
  const steps = [
    {
      title: '1. Market Research',
      description: 'Analyzing the market to understand the target audience and competition.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/market.png'
    },
    {
      title: '2. Strategy Development',
      description: 'Creating a comprehensive digital marketing strategy.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/strategy.png'
    },
    {
      title: '3. Content Creation',
      description: 'Developing engaging content for various digital channels.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/content.png'
    },
    {
      title: '4. Campaign Execution',
      description: 'Implementing the strategy through targeted campaigns.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/campaign.png'
    },
    {
      title: '5. Monitoring & Optimization',
      description: 'Tracking performance and optimizing campaigns for better results.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/monitor.png'
    },
    {
      title: '6. Reporting',
      description: 'Providing detailed reports on campaign performance and insights.',
      icon: 'https://img.icons8.com/ios-filled/50/FFA500/report.png'
    }
  ];

  return (
    <div>
      <Navbar />
      <section
        className="bg-cover bg-center"
        style={{
          background:
            "url('https://img.freepik.com/free-photo/social-media-concept-with-device_23-2150149026.jpg?t=st=1719169950~exp=1719173550~hmac=8623e72ee47cdc15e7085114fb839eec6d6915e812b22e6b219b2a4e32bbcf62&w=996')",
          height: '450px',
          backgroundRepeat:"no-repeat",
          backgroundSize: 'cover',
        }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <div className="col-lg-12 text-light">
              <h1 className="heading">Digital Marketing</h1>
              <h6 className="heading">We Provide Best Digital Marketing Services</h6>
            </div>
          </div>
        </div>
      </section>
      
      <div className="service d-flex p-5">
        <img src={marketingGif} style={{height: "400px"}} className='ps-5' alt="Marketing gif" />
        <div className="text p-5 ms-5">
          <p> Our digital marketing services ensure that your brand reaches its target audience effectively and efficiently.</p> 
          <p>We specialize in creating and executing strategies that drive engagement and conversions.</p> 
          <p>Our team works closely with you to understand your goals and develop tailored campaigns. With a focus on data-driven decision making, we optimize your digital presence for maximum impact.</p>
          <p>Trust us to elevate your brand in the digital landscape and achieve measurable results.</p>
        </div>
      </div>

      <div className="process-section4 px-5">
        <h2 className="text-center">Our Marketing Process</h2>
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

export default DigitalMarketing;
