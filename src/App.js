import { useState } from 'react';
import './App.css';
import ModalDoctorDetails from './components/ModalDoctorDetails';
import ModalPatientAilment from './components/ModalPatientAilment';
import ModalPatientProfile from './components/ModalPatientProfile';
import ModalPatientRecords from './components/ModalPatientRecords';
import Navbar from './components/Navbar';
import Submit from './components/Submit';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feedback from './components/Feedback';


function App() {

  const [patientData, setPatientData] = useState({
    name: 'Patient Name',
    bloodGroup: 'O-',
    age: '53',
    gender: 'Male',
    patientId: 'PAO112',
    patientEmail: 'patient@email.com',
    patientNumber: '9876543210',
    address: 'Address 1, Address 2, 100001'
  });

  const handlePatientChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value })
  }

  const [ailmentData, setAilmentData] = useState({
    doctorName: 'Doctor X',
    doctorNumber: '9876543210',
    ailment: ['Diabetes', 'Thyroid']
  })

  const handleAilmentChange = (e) => {
    if (e.target.name === 'ailment') {
      const ailmentArray = e.target.value.split(' ');
      setAilmentData({ ...ailmentData, [e.target.name]: ailmentArray });
    } else {
      setAilmentData({ ...ailmentData, [e.target.name]: e.target.value });
    }
  }

  const [doctorData, setDoctorData] = useState({
    name: 'Doctor X',
    relation: 'Daughter',
    doctorEmail: 'doctor@email.com',
    doctorNumber: '9876543210',
    address: 'Address 1, Address 2, 100001'
  });

  const handleDoctorChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value })
  }

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleRecordsChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  }


  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<><ModalPatientProfile patientData={patientData} handlePatientChange={handlePatientChange} />
      <ModalPatientAilment ailmentData={ailmentData} handleAilmentChange={handleAilmentChange} />
      <ModalDoctorDetails doctorData={doctorData} handleDoctorChange={handleDoctorChange} />
      <ModalPatientRecords selectedFiles={selectedFiles} handleRecordsChange={handleRecordsChange} />
      <Submit patientData={patientData} ailmentData={ailmentData} doctorData={doctorData} selectedFiles={selectedFiles} />
    </>} />
      <Route exact path='/feedback' element={<Feedback />} />
      <Route exact path='/home' element={ <Home /> } />
      </Routes>
      
      <Footer />
    </Router>
    </>
  );
}

export default App;
