import React from "react";
import { DataTable } from "@/Components/shared/dataTable/DataTable";
import { DataTableColumnHeader } from "@/Components/shared/dataTable/DataTableColumnHeader";
import CreatePatientDialog from "./CreatePatientDialog";

const PatientsList = ({ globalFilter }) => {
  const [patients, setPatients] = React.useState([
    {
      id: "1",
      name: "Ana Ana",
      age: 30,
      idCard: "1235L",
      status: "Active",
      phone: 1234,
      address: "Rruga e Durresit",
      insurance: "No",
      allergies: "None",
      bloodType: "A+",
      appointments: "Friday 10Am",
      labs: "results",
      medication: "none",
    },
    {
      id: "2",
      name: "Beni Beni",
      age: 20,
      idCard: "1235L",
      status: "Inactive",
      phone: 1234,
      address: "Rruga e Durresit",
      insurance: "No",
      allergies: "None",
      bloodType: "A+",
      appointments: "Friday 10Am",
      labs: "results",
      medication: "none",
    },
    {
      id: "3",
      name: "Ana Ana",
      age: 30,
      idCard: "1235L",
      status: "Active",
      phone: 1234,
      address: "Rruga e Durresit",
      insurance: "No",
      allergies: "None",
      bloodType: "A+",
      appointments: "Friday 10Am",
      labs: "results",
      medication: "none",
    },
  ]);
  const columns = [
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="id" />
      ),
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
    },
    {
      accessorKey: "age",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Age" />
      ),
    },
    {
      accessorKey: "idCard",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="idCard" />
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
    },
    {
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="phone" />
      ),
    },
    {
      accessorKey: "address",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="address" />
      ),
    },
    {
      accessorKey: "insurance",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="insurance" />
      ),
    },
    {
      accessorKey: "allergies",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="allergies" />
      ),
    },
    {
      accessorKey: "bloodType",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="bloodtype" />
      ),
    },
    {
      accessorKey: "appointments",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="appointments" />
      ),
    },
    {
      accessorKey: "labs",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="labs" />
      ),
    },
    {
      accessorKey: "medication",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="medication" />
      ),
    },
  ];

  const handleAddPatient = (patient) => {
  const newPatient = {
    id: (patients.length + 1).toString(),
    name: patient.fullName,
    age: patient.age,
    idCard: patient.patientId,
    status: "Active",
    phone: patient.phone,
    address: patient.address,
    insurance: patient.insurance,
    allergies: patient.allergies,
    bloodType: patient.bloodType,
    appointments: "-",
    labs: "-",
    medication: "-",
  };

  setPatients((prev) => [...prev, newPatient]);
  };

  return (
    <div className="w-full mt-8 space-y-6">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4">
        <h1 className="text-sm text-muted-foreground">
          Manage and monitor all clinic patients
        </h1>
        <CreatePatientDialog onAddPatient={handleAddPatient} />
      </div>

      {/* Table */}
      <div className="px-4">
        <DataTable
          columns={columns}
          data={patients}
          globalFilter={globalFilter}
        />
      </div>
    </div>
  );
};

export default PatientsList;
