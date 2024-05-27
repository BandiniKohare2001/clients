import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./About.css"
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

      <Footer/>
    </div>
  )
}

export default About
