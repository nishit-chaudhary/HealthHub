import React from 'react'

const PatientRecords = (props) => {

    const selectedFiles = props.selectedFiles;

    return (
        <div className='container'>
            <div className="container my-3">
                <div className="card">
                    <div className="d-flex justify-content-end position-absolute end-0">
                        <i className="fa-regular fa-pen-to-square m-2" onClick={props.openModal}></i>
                    </div>
                    <h5 className="card-title text-success m-2">Patient Records</h5>
                    <div className="card-body">
                        <div className="row rows-cols-2">
                            {selectedFiles.length === 0 ? (
                                <p className='card-text'> Enter Medical Record Images</p>
                            ) : (
                                selectedFiles.map((file, index) => (
                                    <div className="col-md-6 md-3" key={index}>
                                        <img src={URL.createObjectURL(file)} alt="Patient Record" style={{ maxWidth: '100%', height: 'auto' }} />
                                        <h6 className="card-title fw-bold">{file.name}</h6>
                                        <p className="card-text">Uploaded By: John Doe</p>
                                        <p className="card-text">{new Date().toLocaleString()}</p>
                                    </div>
                                ))
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientRecords