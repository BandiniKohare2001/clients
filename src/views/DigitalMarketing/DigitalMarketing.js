import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import marketingGif from './marketingGif.gif';
import './DigitalMarketing.css';

function DigitalMarketing() {
  const steps = [
    {
      title: '1. Market Research',
      description: 'Analyzing the market to understand the target audience and competition.',
      icon: 'https://img.icons8.com/?size=100&id=123781&format=png&color=FAB005'
    },
    {
      title: '2. Strategy Development',
      description: 'Creating a comprehensive digital marketing strategy.',
      icon: 'https://img.icons8.com/?size=100&id=101365&format=png&color=FAB005'
    },
    {
      title: '3. Content Creation',
      description: 'Developing engaging content for various digital channels.',
      icon: 'https://img.icons8.com/?size=100&id=3G2H3DDWhJ3e&format=png&color=FAB005'
    },
    {
      title: '4. Campaign Execution',
      description: 'Implementing the strategy through targeted campaigns.',
      icon: 'https://img.icons8.com/?size=100&id=Fl7RH7IeVzzg&format=png&color=FAB005'
    },
    {
      title: '5. Monitoring & Optimization',
      description: 'Tracking performance and optimizing campaigns for better results.',
      icon: 'https://img.icons8.com/?size=100&id=PO8vxejgExcL&format=png&color=FAB005'
    },
    {
      title: '6. Reporting',
      description: 'Providing detailed reports on campaign performance and insights.',
      icon: 'https://img.icons8.com/?size=100&id=Ob5vVT7sArAf&format=png&color=FAB005'
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
      
      <div className="service d-flex flex-wrap p-5">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src={marketingGif} className="marketing-gif" alt="Marketing gif" />
        </div>
        <div className="text p-5 ms-md-5 col-12 col-md-6">
        <h3 className="mb-4">Digital Marketing</h3>
          <p>Our digital marketing services ensure that your brand reaches its target audience effectively and efficiently.</p>
          <p>We specialize in creating and executing strategies that drive engagement and conversions.</p>
          <p>Our team works closely with you to understand your goals and develop tailored campaigns. With a focus on data-driven decision making, we optimize your digital presence for maximum impact.</p>
          <p>Trust us to elevate your brand in the digital landscape and achieve measurable results.</p>
        </div>
      </div>

      <div className="process-section4 px-5">
        <h2 className="text-center">Our Marketing Process</h2>
        <div className="process-steps d-flex flex-wrap justify-content-center">
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

export default DigitalMarketing;
