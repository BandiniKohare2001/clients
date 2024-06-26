import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import contact from "./contactimg.png"
import "./contact.css"
function Contact() {
  return (
    <div>
      <Navbar />
      <section
        className="bg-cover bg-center"
        style={{
          background:
            "url('https://img.freepik.com/free-vector/gradient-christmas-technology-background_23-2149758674.jpg?t=st=1719296026~exp=1719299626~hmac=3c98198b060b805cff776ad3c28593662ed8b0c49eb7a1d9a758ed89597b71ae&w=826')",
          height: '450px',
          backgroundSize: 'cover',
        }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center text-light">
            <h1 className="font-weight-bold">
              Do you need help? <br />
              <span className="text-highlight">
                Contact
                <span className="bg-base-color opacity-30 h-2.5 d-block"></span>
              </span>{' '}
              with us!
            </h1>
          </div>
        </div>
      </section>

      <section className="pt-4">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="text-center pt-5">
            <h2 className="font-weight-bold text-gray">
              Connect with us on social media
            </h2>
          </div>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 my-5">
              <img
                src="https://img.freepik.com/premium-photo/close-up-view-young-woman-face-with-headphones-call-center-support-concept_488220-19280.jpg?w=826"
                className="img-fluid"
                alt="Support"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-5">
              <div className="pb-2 mb-4 border-bottom border-dark">
                <i className="feather icon-feather-mail"></i> Send a message
              </div>
              <a href="mailto:skttechnologies@gmail.com">skttechnologies@gmail.com</a>
             
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-5">
              <div className="pb-2 mb-4 border-bottom border-dark">
                <i className="feather icon-feather-phone"></i> Call us directly
              </div>
              <a href="tel:9116 150 431" className="d-block">
                +91  8459562384
              </a>
             
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-5">
              <div className="d-flex justify-content-center">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark mx-2"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="http://www.dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark mx-2"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
                <a
                  href="http://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark mx-2"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="http://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark mx-2"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="http://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark mx-2"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-very-light-gray p-0">
        <div className="container-fluid p-0">
          <div className="position-relative w-100" style={{ height: '450px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60045.638422952834!2d79.32460349347924!3d19.846197205653763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d2ea9f3225a3%3A0x9771a920a14a7781!2sBallarpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713243886600!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className=" container1 pt-16">
        <div className="text-center mb-8 pt-4">
              <h1 className="font-weight-bold text-dark-gray mb-2">
                Contact Us
              </h1>
              <p className="text-muted px-5">
                Have questions or want to know more about our IT Solutions and management
                system? Reach out to us!
              </p>
            </div>
          <div className="contact-container bg-white  rounded-lg shadow-lg con-contact">
         
            
            <div>
            <form
              action="email-templates/contact-form.php"
              method="post"
              className="py-5 text-start px-5 mx-auto"
              style={{ maxWidth: '600px' }}
            >
              
              <div className="space-y-5">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                    <label
                      htmlFor="inputName"
                      className="fw-bold text-dark-gray mb-1"
                    >
                      Your name*
                    </label>
                    <input
                      id="inputName"
                      type="text"
                      name="name"
                      placeholder="What's your name?"
                      className="form-control w-full p-2 border border-gray-100 rounded"
                      required
                      style={{ boxShadow: '0px 0px 7px 0.5px gray' }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <label
                      htmlFor="inputPhone"
                      className="fw-bold text-dark-gray mb-1"
                    >
                      Your phone number*
                    </label>
                    <input
                      id="inputPhone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="form-control w-full p-2 border border-gray-300 rounded"
                      required
                      style={{ boxShadow: '0px 0px 7px 0.5px gray' }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                    <label
                      htmlFor="inputEmail"
                      className="fw-bold text-dark-gray mb-1 mt-3"
                    >
                      Your email address*
                    </label>
                    <input
                      id="inputEmail"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="form-control w-full p-2 border border-gray-300 rounded"
                      required
                      style={{ boxShadow: '0px 0px 7px 0.5px gray' }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <label
                      htmlFor="inputSubject"
                      className="fw-bold text-dark-gray mb-1"
                    >
                      Subject
                    </label>
                    <input
                      id="inputSubject"
                      type="text"
                      name="subject"
                      placeholder="Subject of your message"
                      style={{ boxShadow: '0px 0px 7px 0.5px gray' }}
                      className="form-control w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="px-2">
                  <label
                    htmlFor="inputMessage"
                    className="fw-bold text-dark-gray mb-1 mt-3"
                  >
                    Your message
                  </label>
                  <textarea
                    id="inputMessage"
                    name="comment"
                    placeholder="Type your message here"
                    rows="4"
                    style={{ boxShadow: '0px 0px 7px 0.5px gray' }}
                    className="form-control w-full p-2 border border-gray-300 rounded"
                  ></textarea>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center px-2">
                  <p className="text-muted text-sm my-4 md:mb-0">
                    We value your privacy. Your information is safe with us and will never be
                    shared without your consent.
                  </p>
                  <div className="mt-9 flex justify-center space-x-4">
                    <Link to="/contact" className="px-5 btn btn-dark-gray shadow-lg hover:bg-orange-700 transition duration-300 flex items-center px-6 py-3 text-white">
                      <span className="mr-2">Send Message</span>
                      <i className="feather icon-feather-info"></i>
                    </Link>
                  </div>
                </div>
                <div className="form-results mt-3 hidden"></div>
              </div>
            </form>
            </div>
            <div className='mt-5 contact-img-div'>
              <img src={contact} style={{width:"550px"}} className='contai-img' />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
