import React from "react";
import { useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const OverviewTab = ({patient}) => {
  const headerFields = [
    "age",
    "gender",
    "bloodType",
    "allergies",
    "status"
  ];

const overviewFields = Object.entries(patient).filter(
    ([key]) => !headerFields.includes(key) && key !== "name" && key !== "id"
  );



 return (
    <div className="overview-tab">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Field</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          {overviewFields.map(([key, value]) => (
            <TableRow key={key}>
              <TableCell className="font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
          
          </TableBody>
      </Table>
    </div>
  );
};
 
export default OverviewTab;