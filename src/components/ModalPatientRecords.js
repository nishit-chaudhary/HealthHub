import React, { useRef } from 'react'
import PatientRecords from './PatientRecords';

const ModalPatientRecords = (props) => {

    const selectedFiles = props.selectedFiles;

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
            <button ref={refOpen} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#patientRecords">
                Launch demo modal
            </button>

            <div className="modal fade" id="patientRecords" tabIndex="-1" aria-labelledby="patientRecordsLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="patientRecordsLabel">Patient Records</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="imageInput" className="form-label">Upload Images</label>
                                    <input type="file" className="form-control" id="imageInput" name="imageInput" accept="image/*" multiple onChange={props.handleRecordsChange} />
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
            <PatientRecords openModal={openModal} selectedFiles={selectedFiles} />
        </div>
    )
}

export default ModalPatientRecords