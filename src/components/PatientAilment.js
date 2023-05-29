import React from 'react'

const PatientAilment = (props) => {
  const ailmentData = props.ailmentData;
  return (
    <div className='container'>
      <div className="container my-3">
        <div className="card">
          <div className="d-flex justify-content-end position-absolute end-0">
            <i className="fa-regular fa-pen-to-square m-2" onClick={props.openModal}></i>
          </div>
          <h5 className="card-title text-success m-2">Other Details</h5>
          <div className="card-body">
            <h6>Patient Ailment :- </h6>
            {/* <ul>
              {ailmentData.ailment.map((ailment, index) => (
                <li key={index}>{ailment}</li>
              ))}
            </ul> */}
            <ul className="custom-list">
              {ailmentData.ailment.map((ailment, index) => (
                <li key={index}>
                  <span>&#62;</span>
                  {ailment}
                </li>
              ))}
            </ul>
            <p className="card-text">Consulting Doctor : <span className="fw-bold"> {ailmentData.doctorName} </span> </p>
            <p className="card-text">Doctor's Contact : <span className="fw-bold"> {ailmentData.doctorNumber} </span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientAilment