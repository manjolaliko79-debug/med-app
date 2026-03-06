import React, { useState } from 'react';
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
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import * as z from "zod";
import { Plus } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';



const formSchema = z.object({
  fullName: z.string({ message: "Name of patient is required" }).min(1, "Name is required"),
  age: z.string({ message: "Age is required" }).min(1, "Age is required"),
  patientId: z.string({ message: "Patient ID is required" }).min(1, "Patient ID is required"),
  phone: z.string({ message: "The phone number is required" }).min(1, "Phone is required"),
  address: z.string({ message: "Adress is required" }).min(1, "Address is required"),
  insurance: z.string({ message: "The insurance data are required" }).min(1, "Insurance is required"),
  allergies: z.string({ message: "Allergy data are required" }).min(1, "Allergies are required"),
  bloodType: z.string({ message: "Blood type is required" }).min(1, "Blood Type is required"),
  
});

const CreatePatientDialog = ({onAddPatient}) => {
  const [open, setOpen] = React.useState(false);
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      age: "",
      patientId: "",
      phone: "",
      address: "",
      insurance: "",
      allergies: "",
      bloodType: "",
    },
  });

  const onSubmit = (data) => {
     if (onAddPatient) {
      onAddPatient(data); // send new appointment to parent
    }
    toast.success("Success", { description: "New Patient is created successfully!" });
    console.log(data);
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}  scroll="paper"
      maxWidth="sm" fullWidth>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus /> Create new patient data
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] flex flex-col">
  <form
    onSubmit={form.handleSubmit(onSubmit)}
    className="flex flex-col flex-1 overflow-hidden"
  >
    {/* Scrollable area */}
    <div className="flex-1 overflow-y-auto pr-2 space-y-6">

      {/* Personal Info */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Personal Information</h3>

        <div className="grid grid-cols-2 gap-4">
          {["fullName", "age", "bloodType"].map((field) => (
            <Controller
              key={field}
              name={field}
              control={form.control}
              render={({ field: f, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </FieldLabel>

                  <Input {...f} placeholder={field} />

                  {fieldState.invalid && (
                    <span className="text-red-600 text-sm">
                      {fieldState.error?.message}
                    </span>
                  )}
                </Field>
              )}
            />
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Contact Information</h3>

        <div className="grid grid-cols-2 gap-4">
          {["phone", "address"].map((field) => (
            <Controller
              key={field}
              name={field}
              control={form.control}
              render={({ field: f, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </FieldLabel>

                  <Input {...f} placeholder={field} />

                  {fieldState.invalid && (
                    <span className="text-red-600 text-sm">
                      {fieldState.error?.message}
                    </span>
                  )}
                </Field>
              )}
            />
          ))}
        </div>
      </div>

      {/* Medical Info */}
      <div>
        <h3 className="text-sm font-semibold mb-3">Medical Information</h3>

        <div className="grid grid-cols-2 gap-4">
          {["patientId", "insurance", "allergies"].map((field) => (
            <Controller
              key={field}
              name={field}
              control={form.control}
              render={({ field: f, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </FieldLabel>

                  <Input {...f} placeholder={field} />

                  {fieldState.invalid && (
                    <span className="text-red-600 text-sm">
                      {fieldState.error?.message}
                    </span>
                  )}
                </Field>
              )}
            />
          ))}
        </div>
      </div>

    </div>

    {/* Footer */}
    <DialogFooter className="mt-4">
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>

      <Button type="submit">Create Patient</Button>
    </DialogFooter>

  </form>
</DialogContent>
 </Dialog>
  );
};

export default CreatePatientDialog