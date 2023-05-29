import React, { useRef } from 'react'
import DoctorDetails from './DoctorDetails'

const ModalDoctorDetails = (props) => {

  const doctorData = props.doctorData;

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
      <button ref={refOpen} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#doctorProfile">
        Launch demo modal
      </button>

      <div className="modal fade" id="doctorProfile" tabIndex="-1" aria-labelledby="doctorProfileLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="doctorProfileLabel">Attendant Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input onChange={props.handleDoctorChange} value={doctorData.name} type="text" className="form-control" id="name" name='name' aria-describedby="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="relation" className="form-label">Relation with Patient</label>
                  <input onChange={props.handleDoctorChange} value={doctorData.relation} type="text" className="form-control" id="relation" name='relation' aria-describedby="relation" />
                </div>
                <div className="mb-3">
                  <label htmlFor="doctorEmail" className="form-label">Email</label>
                  <input onChange={props.handleDoctorChange} value={doctorData.doctorEmail} type="email" className="form-control" id="doctorEmail" name='doctorEmail' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="doctorNumber" className="form-label">Phone Number</label>
                  <input onChange={props.handleDoctorChange} value={doctorData.doctorNumber} type="number" className="form-control" id="doctorNumber" name='doctorNumber' />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <textarea className="form-control" id="address" name="address" rows="3" onChange={props.handleDoctorChange} value={doctorData.address} ></textarea>
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
      <DoctorDetails openModal={openModal} doctorData={doctorData} />
    </div>
  )
}

export default ModalDoctorDetails