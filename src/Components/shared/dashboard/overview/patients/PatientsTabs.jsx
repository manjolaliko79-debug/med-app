import React from "react";
import { useParams } from "react-router-dom";

import OverviewTab from "@/Components/shared/dashboard/overview/patients/OverviewTab";
import MedicationTab from "@/Components/shared/dashboard/overview/patients/MedicationTab";
import LabResultsTab from "@/Components/shared/dashboard/overview/patients/LabResultsTab";
import VisitTab from "@/Components/shared/dashboard/overview/patients/VisitTab";
import InvoicesTab from "@/Components/shared/dashboard/overview/patients/InvoicesTab";

const PatientsTabs = ({ patient }) => {
  const [activeTab, setActiveTab] = React.useState("Overview");
  const { id } = useParams();

  const tabs = [
    { id: "Overview", label: "Overview", content: <OverviewTab patient={patient} /> },
    { id: "Medication", label: "Medication", content: <MedicationTab patient={patient} /> },
    { id: "LabResults", label: "Lab Results", content: <LabResultsTab patient={patient}/> },
    { id: "Visit", label: "Visit", content: <VisitTab patient={patient} /> },
    { id: "Invoices", label: "Invoices", content: <InvoicesTab patient={patient}/> },
  ];

  const activeContent = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="patients-tabs">

      {/* Tabs */}
      <div className="tabs flex space-x-4 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 font-bold"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="patient-content">
        {activeContent?.content}
      </div>

    </div>
  );
};

export default PatientsTabs;