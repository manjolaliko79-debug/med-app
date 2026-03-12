import React from 'react';
import { useParams } from "react-router-dom";
import PatientHeader from '@/Components/shared/dashboard/overview/patients/PatientHeader';
import PatientsTabs from '@/Components/shared/dashboard/overview/patients/PatientsTabs';


function PatientProfilePage () {
  const { id } = useParams();

   const patient= {
    id: 1,
    name: "Ana Sako",
    birthDate: "2003-05-10",
    age: 22,
    gender: "Female",
    nationalId: "L12345678",
    phone: "12354",
    address: "Rruga e Durresit",
    insurance: "12358L",
    bloodType: "A+",
    status: "Stable",
    emergencyContact: "12364",
    allergies: "Penicillin",
  };


  return (
    <div>
    <PatientHeader patient={patient}>

    </PatientHeader>
    <div>
    <PatientsTabs patient={patient}/>
    </div>

    <div className='w-1/2'>

  
    </div>
    
    
    </div>
  )
}

export default PatientProfilePage