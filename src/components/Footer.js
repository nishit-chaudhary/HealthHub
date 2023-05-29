import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3" style={{position: 'fixed', bottom: '0', width: '100%'}}>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Link to="/home" className="text-light text-decoration-none"><i className="fa-solid fa-house mb-1"></i> <br /> Home</Link>
          </div>
          <div className="col">
            <Link to="/" className="text-light text-decoration-none"><i className="fa-solid fa-circle-user mb-1"></i> <br /> My Profile</Link>
          </div>
          <div className="col">
            <Link to="/feedback" className="text-light text-decoration-none"><i className="fa-solid fa-message mb-1"></i> <br /> Feedback</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;
