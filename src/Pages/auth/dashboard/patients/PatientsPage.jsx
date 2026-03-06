import React from "react";
import Header from "@/Components/shared/dashboard/Header";
import PatientsList from "@/Components/shared/dashboard/overview/patients/PatientsList";

const PatientsPage = () => {
  const [search, setSearch] = React.useState("");

  return (
    <>
      <Header
        title="Patient Page"
        search={search}
        setSearch={setSearch}
      />

      <PatientsList globalFilter={search} />
    </>
  );
};

export default PatientsPage;