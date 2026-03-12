import React from "react";
import { useParams } from "react-router-dom";


function PatientHeader({patient}) {
  const headerFields = [
    "age",
    "gender",
    "bloodType",
    "allergies",
    "status"
  ];
 
return (
    <div className="bg-white p-4  border-b sticky top-0 z-10">
        
          <h2 className=" text-xl font-semibold">{patient.name}</h2>
          <p className="text-muted-foreground text-sm">Patient ID: {patient.id}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-4 text-sm">
             
              {headerFields.map((field) => (
              <div key={field}>
              <p className="text-sm text-muted-foreground capitalize">
              {field}
              </p>

            <p className="font-medium">
              {patient[field]}
            </p>
          </div>
        ))}
            
            

          
        </div>
      </div>
    
  );
}

export default PatientHeader
