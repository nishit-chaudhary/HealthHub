import React, { useRef } from 'react'
import PatientAilment from './PatientAilment'

const ModalPatientAilment = (props) => {

  const ailmentData = props.ailmentData;

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
    <>
      <div>
        <button ref={refOpen} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#patientAilment">
          Launch demo modal
        </button>

        <div className="modal fade" id="patientAilment" tabIndex="-1" aria-labelledby="patientAilmentLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="patientAilmentLabel">Patient Ailment Details</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="ailment" className="form-label">Ailment &#40;can write multiple diseases seperated by space " "&#41; </label>
                    <input onChange={props.handleAilmentChange} type="text" className="form-control" id="ailment" name='ailment' />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="doctorName" className="form-label">Consulting Doctor </label>
                    <input onChange={props.handleAilmentChange} value={ailmentData.doctorName} type="text" className="form-control" id="doctorName" name='doctorName' aria-describedby="doctorName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="doctorNumber" className="form-label">Doctor's Contact</label>
                    <input onChange={props.handleAilmentChange} value={ailmentData.doctorNumber} type="number" className="form-control" id="doctorNumber" name='doctorNumber' />
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

      </div>
      <PatientAilment openModal={openModal} ailmentData={ailmentData} />
    </>
  )
}

export default ModalPatientAilment