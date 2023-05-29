import React, { useRef } from 'react'
import PatientProfile from './PatientProfile';

const ModalPatientProfile = (props) => {

    const patientData = props.patientData;

    const refOpen = useRef(null);
    const refClose = useRef(null);

    const openModal = () => {
        refOpen.current.click();
    }

    const handleSaveChanges = (e) => {
        e.preventDefault();
        refClose.current.click();
    };

    return (
        <div>
            <button ref={refOpen} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#patientProfile">
                Launch demo modal
            </button>

            <div className="modal fade" id="patientProfile" tabIndex="-1" aria-labelledby="patientProfileLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="patientProfileLabel">Personal Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input onChange={props.handlePatientChange} value={patientData.name} type="text" className="form-control" id="name" name='name' aria-describedby="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bloodGroup" className="form-label">
                                        Blood Group
                                    </label>
                                    <select className="form-select" id="bloodGroup" name="bloodGroup" onChange={props.handlePatientChange} value={patientData.bloodGroup}>
                                        <option value="">Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age" className="form-label">
                                        Age
                                    </label>
                                    <input onChange={props.handlePatientChange} value={patientData.age} type="number" className="form-control" id="age" name="age" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">
                                        Gender
                                    </label>
                                    <select className="form-select" id="gender" name="gender" onChange={props.handlePatientChange} value={patientData.gender}>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="patientId" className="form-label">Patient Id</label>
                                    <input onChange={props.handlePatientChange} value={patientData.patientId} type="text" className="form-control" id="patientId" name='patientId' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="patientEmail" className="form-label">Email</label>
                                    <input onChange={props.handlePatientChange} value={patientData.patientEmail} type="email" className="form-control" id="patientEmail" name='patientEmail' aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="patientNumber" className="form-label">Phone Number</label>
                                    <input onChange={props.handlePatientChange} value={patientData.patientNumber} type="number" className="form-control" id="patientNumber" name='patientNumber' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">
                                        Address
                                    </label>
                                    <textarea className="form-control" id="address" name="address" rows="3" onChange={props.handlePatientChange} value={patientData.address} ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <PatientProfile patientData={patientData} openModal={openModal} />

        </div>
    )
}

export default ModalPatientProfile