import React from 'react';

const Submit = ({ patientData, ailmentData, doctorData, selectedFiles }) => {
  const handleSubmit = () => {
    // Combine all the data into a single object
    const formData = {
      patientData,
      ailmentData,
      doctorData,
      selectedFiles,
    };

    // Sending data to dummy API
    fetch('https://api.example.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='container text-center' style={{marginBottom: '100px'}}>
      <button type="button" className="btn btn-success" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Submit;
