import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container my-5 py-3">
        <div className="row align-items-center">
          {/* Start and end footer columns can be added here if needed */}
        </div>
        <div className="row justify-content-center align-items-center pt-3">
          {/* Start footer divider */}
          <div className="col-12 mb-3">
            <div className="border-top border-1 border-color-extra-medium-gray"></div>
          </div>
          {/* End footer divider */}
          {/* Start footer column */}
          <div className="col-lg-7 col-md-8 text-center text-md-left mb-2 mb-md-0">
            <p className="mb-0 fs-14 lh-24">Copyright © Shree Krushna Technologies 2024</p>
          </div>
          {/* End footer column */}
          {/* Start footer column */}
          <div className="col-lg-5 col-md-4 text-center text-md-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item ms-4">
                <a className="text-dark" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item ms-4">
                <a className="text-dark" href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item ms-4">
                <a className="text-dark" href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item ms-4">
                <a className="text-dark" href="http://www.dribbble.om" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* End footer column */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
