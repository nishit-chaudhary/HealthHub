import React from 'react'

const DoctorDetails = (props) => {
  const doctorData = props.doctorData;
  return (
    <div className='container'>
      <div className="container my-3">
        <div className="card">
          <div className="d-flex justify-content-end position-absolute end-0">
            <i className="fa-regular fa-pen-to-square m-2" onClick={props.openModal}></i>
          </div>
          <h5 className="card-title text-success m-2">Patient Attendant Details</h5>
          <div className="card-body">
            <h6>Primary Attendant :- </h6>
            <p className="card-text mt-3">Name : {doctorData.name} </p>
            <p className="card-text">Relation with patient : {doctorData.relation}  </p>
            <p className="card-text">📧 {doctorData.doctorEmail} </p>
            <p className="card-text">📱 {doctorData.doctorNumber} </p>
            <p className="card-text">📍 {doctorData.address} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDetails