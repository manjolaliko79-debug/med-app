import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const InvoicesTab = ({patient}) => {
  const allInvoices = [
  { id: 1, patientId: 1, date: "13-02-2026", serviceDescription: "YAG Laser", quantity: 1, priceALL: 20000, paymentStatus: "payed"},
  { id: 2, patientId: 2, date: "11-01-2026", serviceDescription: "Consultation", quantity: 1, priceALL: 10000, paymentStatus: "payed"},
  
  ]

if (!patient) return <p>Loading patient data...</p>;

 // Make sure ID types match
  const patientInvoices = allInvoices.filter(
    (inv) => inv.patientId === Number(patient.id)
  );

  return (
     <div className="visit-tab">
            <h3 className="text-lg font-semibold mb-4">Invoices </h3>
      
            {patientInvoices.length === 0 ? (
              <p className='text-muted-foreground'>No invoice is found for this patient.</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>ServiceDescription</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>PriceALL</TableHead>
                    <TableHead>PaymentStatus</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patientInvoices.map((inv) => (
                    <TableRow key={inv.id}>
                      <TableCell>{inv.date}</TableCell>
                      <TableCell>{inv.serviceDescription}</TableCell>
                      <TableCell>{inv.quantity}</TableCell>
                      <TableCell>{inv.priceALL}</TableCell>
                      <TableCell>{inv.paymentStatus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
      
      );
            
      };
    

export default InvoicesTab