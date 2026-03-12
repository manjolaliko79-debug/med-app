import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const VisitTab = ({patient}) => {

const allAppointments = [
  { id: 1, patientId: 1, doctor: "Dr. Melania Sot", department: "Cardiology", date: "12.03.2026", duration: "14:00-15:00", diagnosis: "Arrhythmia" },
  { id: 2, patientId: 2, doctor: "Dr. John Doe", department: "Neurology", date: "13.03.2026", duration: "10:00-11:00", diagnosis: "Migraine" },
]; 

if (!patient) return <p>Loading patient data...</p>;

 // Make sure ID types match
  const patientAppointments = allAppointments.filter(
    (appt) => appt.patientId === Number(patient.id)
  );




return (
  <div className="visit-tab">
      <h3 className="text-lg font-semibold mb-4">Appointments </h3>

      {patientAppointments.length === 0 ? (
        <p className='text-muted-foreground'>No appointment found for this patient.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Doctor</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Diagnosis</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientAppointments.map((appt) => (
              <TableRow key={appt.id}>
                <TableCell>{appt.doctor}</TableCell>
                <TableCell>{appt.department}</TableCell>
                <TableCell>{appt.date}</TableCell>
                <TableCell>{appt.duration}</TableCell>
                <TableCell>{appt.diagnosis}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>

);
      
};

export default VisitTab