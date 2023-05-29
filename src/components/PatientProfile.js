import React from 'react'
import placeHolderImage from '../assets/placeholder.jpg'

const PatientProfile = (props) => {
    const patientData = props.patientData;
    return (
        <div className='container'>
            <div className="container position-relative" style={{marginTop: '100px'}}>
                <div className="card">
                    <img src={placeHolderImage} className="card-img-top rounded-3 position-absolute start-50 translate-middle-x" alt="Display" style={{ width: "33%", top: "-25%" }} />
                    <div className="d-flex justify-content-end position-absolute end-0">
                        <i className="fa-regular fa-pen-to-square m-2" onClick={props.openModal} ></i>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center text-success" style={{marginTop: '45px'}}> {patientData.name} </h5>
                        <h6 className="card-title text-center"> {patientData.gender} | 🩸{patientData.bloodGroup} | {patientData.age} Yrs</h6>
                        <p className="card-text">🪪 {patientData.patientId} </p>
                        <p className="card-text">📧 {patientData.patientEmail}</p>
                        <p className="card-text">📱 {patientData.patientNumber}  </p>
                        <p className="card-text">📍 {patientData.address} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientProfile