import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LabResultsTab = ({patient}) => {
  const allLabResults = [
  { id: 1, patientId: 1, test_name: "blood test", date_of_collection: "05.01.2026", date_of_results: "06.01.2026", orderin_physician: "Dr. Adi Mara", test_value: "", reference_range: "", flag_abnormal: "No"},
  { id: 2, patientId: 2, test_name: "Salt concentration", date_of_collection: "15.01.2026", date_of_results: "18.01.2026", orderin_physician: "Dr. Mira Bei", test_value: "", reference_range: "", flag_abnormal: "No"},
  
  ]

if (!patient) return <p>Loading patient data...</p>;

 // Make sure ID types match
  const patientLabResults = allLabResults.filter(
    (lab) => lab.patientId === Number(patient.id)
  );

  return (
    <div className="visit-tab">
          <h3 className="text-lg font-semibold mb-4">Laburatory results </h3>
    
          {patientLabResults.length === 0 ? (
            <p className='text-muted-foreground'>No laboratory result is found for this patient.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Test Name</TableHead>
                  <TableHead>Date of Collection</TableHead>
                  <TableHead>Date of Results</TableHead>
                  <TableHead>Orderin Physician</TableHead>
                  <TableHead>Test Value</TableHead>
                  <TableHead>Reference Range</TableHead>
                  <TableHead>Flag of Abnormal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patientLabResults.map((lab) => (
                  <TableRow key={lab.id}>
                    <TableCell>{lab.test_name}</TableCell>
                    <TableCell>{lab.date_of_collection}</TableCell>
                    <TableCell>{lab.date_of_results}</TableCell>
                    <TableCell>{lab.orderin_physician}</TableCell>
                    <TableCell>{lab.test_value}</TableCell>
                    <TableCell>{lab.reference_range}</TableCell>
                    <TableCell>{lab.flag_abnormal}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
    
    );
          
    };

export default LabResultsTab