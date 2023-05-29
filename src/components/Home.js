import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <h1 className="mt-5">Welcome to HealthHub</h1>
      <p className="lead">A patient data collection app to streamline healthcare information.</p>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Patient Records</h5>
              <p className="card-text">Efficiently manage and organize patient records, including medical history, test results, and treatment plans.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Appointment Scheduling</h5>
              <p className="card-text">Schedule and track patient appointments, ensuring smooth coordination between healthcare providers and patients.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Secure Data Storage</h5>
              <p className="card-text">Safely store patient data with robust security measures, protecting sensitive information and ensuring compliance.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">User-friendly Interface</h5>
              <p className="card-text">Enjoy a user-friendly interface that simplifies data entry, retrieval, and analysis for healthcare professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
