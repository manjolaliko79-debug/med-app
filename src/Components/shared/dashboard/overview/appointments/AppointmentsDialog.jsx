import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  doctor: z.string().min(1, "Doctor is required"),
  visitType: z.string().min(1, "Appointment type is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
});

const AppointmentsDialog = ({ onAddAppointment }) => {
  const [open, setOpen] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      doctor: "",
      visitType: "",
      date: "",
      time: "",
    },
  });

  const onSubmit = (data) => {
    if (onAddAppointment) {
      onAddAppointment(data); // send new appointment to parent
    }
    toast.success("Success", { description: "New appointment created!" });
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create new appointment</Button>
      </DialogTrigger>

      <DialogContent>
        {/* <-- FORM STARTS HERE */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FieldGroup>
            {["name", "doctor", "visitType", "date", "time"].map((field) => (
              <Controller
                key={field}
                name={field}
                control={form.control}
                render={({ field: f, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </FieldLabel>
                    <Input
                      {...f}
                      placeholder={field}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <span className="text-red-600 text-sm">
                        {fieldState.error?.message}
                      </span>
                    )}
                  </Field>
                )}
              />
            ))}
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
        {/* <-- FORM ENDS HERE */}
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentsDialog;