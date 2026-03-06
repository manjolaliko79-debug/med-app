import React from "react";
import { DataTableColumnHeader } from "@/Components/shared/dataTable/DataTableColumnHeader";

const appointmentStatus = {
  scheduled: { label: "Scheduled", color: "#6366f1" },
  pending: { label: "Pending", color: "#f59e0b" },
  confirmed: { label: "Confirmed", color: "#3b82f6" },
  checked_in: { label: "Checked In", color: "#14b8a6" },
  in_progress: { label: "In Progress", color: "#8b5cf6" },
  cancelled: { label: "Cancelled", color: "#ef4444" },
  completed: { label: "Completed", color: "#10b981" },
  no_show: { label: "No Show", color: "#6b7280" },
  rescheduled: { label: "Rescheduled", color: "#f97316" }
};

function StatusBadge({ status }) {
  const style = appointmentStatus[status];
  if (!style) return null;

  return (
    <span
      style={{
        backgroundColor: style.color,
        color: "white",
        padding: "4px 8px",
        borderRadius: "6px",
        fontSize: "12px",
        fontWeight: 500
      }}
    >
      {style.label}
    </span>
  );
}

export const AppointmentColumns = [
   {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    )
  },
    {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Patient" />
    )
  },
  {
    accessorKey: "doctor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Doctor" />
    ),
  },
  {
    accessorKey: "appointmentType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="AppointmentType" />
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
  },
  {
    accessorKey: "time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="time" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status");
      return <StatusBadge status={status} />;
    }
  }
];

export default AppointmentColumns