import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MedicationTab = ({patient}) => {
  const allMedications = [
  { id: 1, patientId: 1, date: "13-02-2026", pill1: "Tab Meurocitine plus", duration1: "1 time at day x 30 Day", pill2: "Sol Adelone", duration2: "4 time in a day x 2 Week"},
  { id: 2, patientId: 2, date: "01-01-2025", pill1: "Ibuprofen", duration1: "1 time at day x 30 Day", pill2: "Ultrox", duration2: "1 time in a day x 2 Month"},
  ]

  if (!patient) return <p>Loading patient data...</p>;

 // Make sure ID types match
  const patientMedications = allMedications.filter(
    (med) => med.patientId === Number(patient.id)
  );

  return (
  <div className="visit-tab">
        <h3 className="text-lg font-semibold mb-4">Medications </h3>
  
        {patientMedications.length === 0 ? (
          <p className='text-muted-foreground'>No medication found for this patient.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Medication_1</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Medication_2</TableHead>
                <TableHead>Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patientMedications.map((med) => (
                <TableRow key={med.id}>
                  <TableCell>{med.date}</TableCell>
                  <TableCell>{med.pill1}</TableCell>
                  <TableCell>{med.duration1}</TableCell>
                  <TableCell>{med.pill2}</TableCell>
                  <TableCell>{med.duration2}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
  
  );
        
  };

export default MedicationTab