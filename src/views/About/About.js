import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./About.css"
import ServiceCards from '../../components/ServiceCard/ServicesCard'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <Navbar/>
      <section
        className="relative overflow-hidden h-150 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/top-view-colorful-paper-sheets_23-2148187898.jpg?t=st=1716732430~exp=1716736030~hmac=b19eada751325fb371e7f3c402946d462ddb55a62ffd5aee0248c301dde92ee1&w=826')",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center mt-24 md:mt-0">
            <h1 className="font-bold text-light tracking-tighter pt-5 mb-0 mt-24 md:mt-0">
              Empowering Your Business
              <span className="relative text-highlight">
                <span className="absolute bg-base-color opacity-30 h-2 w-full bottom-0 left-0"></span>
              </span>
            </h1>
            <p className="mt-5 text-gray w">
              Our IT tech services encompass a wide range of solutions aimed at boosting your business productivity and efficiency. From software development to network security, we provide cutting-edge technology solutions tailored to your needs.
            </p>
            <div className="mt-9 flex justify-center space-x-4 ">
              <Link to="/contact" className="px-5 mt-5 btn btn-dark-gray rounded-full shadow-lg hover:bg-orange-700 transition duration-300 flex items-center px-6 py-3 text-white">
                <span className="mr-2">Contact Us</span>
                <i className="feather icon-feather-info"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mt-5">About Us</h2>
          <p className="mt-4 text-gray-600 text-start w-2/3 mx-auto mb-5 p-2">
          Our company Shree Krushna Technologies, established in 2024, is a leader in innovation, offering complete IT solutions for businesses of all sizes. Our expert team specializes in software development, web development, app development, digital marketing, graphics designing, and IT consulting. We help our clients stay ahead in the fast-changing digital world by providing top-quality and innovative solutions. Our commitment to excellence ensures that we meet the unique needs of every business we serve. We work closely with our clients to understand their goals and provide customized solutions that drive success. Whether it’s developing a new app, designing a stunning website, or creating effective digital marketing strategies, we are dedicated to delivering the best results. Our focus on quality and customer satisfaction has made us a trusted partner for businesses looking to thrive in today’s competitive market. With us, you can be assured of achieving your business goals with ease.
          </p>
          <div className='d-flex mt-5 flex-wrap' style={{ width:"100%"}}>
          <div className="mt-10 flex flex-wrap justify-center about-cards">
            <div className="w-full md:w-1/3 px-4 py-3" style={{backgroundColor:"#ffe0b3"}}>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To empower businesses through innovative technology solutions that drive growth and efficiency. We are committed to delivering excellence in every project we undertake.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 py-3 my-3" style={{backgroundColor:"#cde5d9"}}>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                To be a global leader in IT services, recognized for our quality, integrity, and commitment to customer success.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 py-3 mb-5 " style={{backgroundColor:"#ebc6dd"}}  >
              <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>Innovation: Continuously pushing the boundaries of technology.</li>
                <li>Integrity: Conducting business with honesty and transparency.</li>
                <li>Customer Focus: Putting our clients' needs at the forefront of everything we do.</li>
                <li>Excellence: Striving for the highest standards in our services.</li>
                <li>Teamwork: Fostering a collaborative and inclusive work environment.</li>
              </ul>
            </div>
          </div>
            <div className='ms-4 flex justify-center' style={{width:"30%"}} >
              <img src='https://img.freepik.com/premium-photo/young-colleagues-work-office-using-computers_926199-3998525.jpg?w=360' />
            </div>
          </div>
        </div>
      </section>

     

      <section>
    <div><ServiceCards/></div>
    </section>


      <Footer/>
    </div>
  )
}

export default About
