import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const localizer = momentLocalizer(moment);

const AppointmentCalendar = ({ data }) => {
  const [calendarView, setCalendarView] = useState("week"); // <- manage view

  const EventComponent = ({ event }) => (
    <div className="p-1 rounded-md bg-primary text-primary-foreground text-xs">
      <div className="font-semibold">{event.name}</div>
      <div className="opacity-80">{event.doctor}</div>
      <div className="text-[10px]">{event.time}</div>
    </div>
  );

  const events = data.map((a) => {
    const start = moment(`${a.date} ${a.time}`, "DD/MM/YYYY hh:mm A").toDate();
    const end = moment(start).add(30, "minutes").toDate();
    return { ...a, start, end, title: a.name };
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Appointments Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[600px]">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            views={["month", "week", "day"]} // available views
            view={calendarView} // <- controlled view
            onView={setCalendarView} // <- updates state when tab clicked
            components={{ event: EventComponent }}
            style={{ height: "100%" }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCalendar;