import React, { useState } from "react";
import AppointmentsList from "@/Components/shared/dashboard/overview/appointments/AppointmentsList";
import DropDownAvatar from "@/Components/shared/dashboard/navbar/DropDownAvatar";

const AppointmentsPage = () => {
  const [search, setSearch] = useState("");

  const [appointments, setAppointments] = useState([
    { id: "3", name: "Ana Niko", doctor: "Adi Muçaj", appointmentType: "consultation", date: "02/03/2026", time: "10:00 AM", status: "confirmed" },
    { id: "4", name: "Beni Andon", doctor: "Mira Rusi", appointmentType: "vaccination", date: "06/03/2026", time: "04:00 PM", status: "canceled" },
  ]);

  const [notifications, setNotifications] = useState([]);

  const handleAddAppointment = (newAppointment) => {
    setAppointments((prev) => [...prev, newAppointment]);

    // Add new appointment to notifications
    setNotifications((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: `New Appointment: ${newAppointment.name}`,
        description: `${newAppointment.date} ${newAppointment.time} with ${newAppointment.doctor}`,
        read: false,
      },
    ]);
  };

  const handleClearNotifications = () => setNotifications([]);

  return (
    <>
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-semibold">Appointments Page</h1>
        <DropDownAvatar
          notifications={notifications}
          onClearNotifications={handleClearNotifications}
        />
      </div>

      <AppointmentsList
        globalFilter={search}
        appointments={appointments}
        onAddAppointment={handleAddAppointment}
      />
    </>
  );
};

export default AppointmentsPage;