import React, { useState } from "react";
import AppointmentsDialog from "./AppointmentsDialog";
import { DataTable1 } from "@/Components/shared/dataTable/DataTable1";
import AppointmentCalendar from "@/Components/shared/dataTable/AppointmentCalendar";
import { Button } from "@/components/ui/button";
import { AppointmentColumns } from "@/Components/shared/dataTable/AppointmentColumns";



const AppointmentsList = ({ globalFilter, appointments, onAddAppointment }) => {
  const [view, setView] = useState("table");

  


  return (
    <div className="w-full mt-8 space-y-6">
      <div className="flex justify-between items-center px-4">
        <h1 className="text-sm text-muted-foreground">
          Manage and monitor all clinic appointments
        </h1>
        <AppointmentsDialog onAddAppointment={onAddAppointment} />
      </div>

      <div className="flex gap-2">
        <Button variant="outline" onClick={() => setView("table")}>
          Table
        </Button>
        <Button variant="outline" onClick={() => setView("calendar")}>
          Calendar
        </Button>
      </div>

      <div className="px-4">
        {view === "table" ? (
          <DataTable1
            columns={AppointmentColumns}
            data={appointments}
            globalFilter={globalFilter}
          />
        ) : (
          <AppointmentCalendar data={appointments} />
        )}
      </div>
    </div>
  );
};

export default AppointmentsList;