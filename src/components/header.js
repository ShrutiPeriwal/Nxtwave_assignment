import React from 'react';
import { Link } from 'react-router-dom';
import NxtwaveLogo from '../assets/images/NxtWave-logo.svg';
import ProfileImg from '../assets/images/Profile-img.png';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex flex-row justify-content-between">
          <Link className="navbar-brand p-0 m-0" to="/">
            <img className='header-logo' src={NxtwaveLogo} alt="NxtWave Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex flex-row justify-content-end" id="navbarNav">
            <ul className="navbar-nav d-flex flex-row align-items-center">
              <li className="nav-item">
                <Link to="/add" className="btn btn-primary mx-2">+ ADD</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="btn btn-primary">LOGOUT</Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link disabled"
                  tabIndex="-1"
                  aria-disabled="true"
                  style={{
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'not-allowed', 
                    color: 'inherit'
                  }}
                  disabled 
                >
                  <img className='profile-img' src={ProfileImg} alt="User profile" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
