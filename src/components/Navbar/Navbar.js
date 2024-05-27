import React from 'react';
import logoImg from './4.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header-with-topbar">
      {/* Header top bar */}
      <div className="header-top-bar top-bar-dark bg-gradient-flamingo-amethyst-green disable-fixed">
        <div className="container-fluid mb-2" style={{ backgroundColor: 'black', color: 'white' }}>
          <div className="row h-42px align-items-center m-0">
            <div className="col-12 text-center justify-content-center">
              <div className="fs-14">
                We provide Tech Solutions - Simplifying Our Services.{' '}
                <Link to="/" className="btn btn-link-gradient btn-small text-white thin mb-1">
                  Explore services
                  <i className="feather icon-feather-arrow-right"></i>
                  <span className="bg-white opacity-4"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header top bar */}
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg header-light bg-transparent disable-fixed border-bottom border-color-transparent-dark-very-light">
        <div className="container-fluid ps-5">
          <Link to="/" className="navbar-brand">
            <img src={logoImg} alt="Logo" style={{ height: '60px' }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto alt-font">
              <li className="nav-item">
                <Link to="/" className="nav-link me-3">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link me-3">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle me-3" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/webDevelopment" className="dropdown-item">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/appdevelopment" className="dropdown-item">
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item">
                      Graphics Designing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/tandp" className="nav-link me-3">
                  Training and Program
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link me-3">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navigation */}
    </header>
  );
}

export default Navbar;
