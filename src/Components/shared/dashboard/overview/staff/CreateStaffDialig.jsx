import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import * as z from "zod";
import { Plus } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  role: z.string().min(1, "Staff role is required"),
  department: z.string().min(1, "Department is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().min(1, "Email is required"),
  hireDate: z.string().min(1, "Hire date is required"),
});

const CreateStaffDialog = ({ onAddEmployee }) => {
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      role: "",
      department: "",
      phone: "",
      email: "",
      hireDate: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8095/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const savedEmployee = await response.json();

      // update table in parent component
      if (onAddEmployee) {
        onAddEmployee(savedEmployee);
      }

      toast.success("Success", {
        description: "New staff created successfully!",
      });

      setOpen(false);
      form.reset();
    } catch (error) {
      toast.error("Error creating employee");
    }
  };

  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus /> Create new staff data
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Create Employee</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-1 overflow-hidden"
        >
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">

            {/* Personal */}
            <div className="grid grid-cols-2 gap-4">
              {["firstName", "lastName"].map((field) => (
                <Controller
                  key={field}
                  name={field}
                  control={form.control}
                  render={({ field: f, fieldState }) => (
                    <Field>
                      <FieldLabel>{field}</FieldLabel>
                      <Input {...f} />
                      {fieldState.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </p>
                      )}
                    </Field>
                  )}
                />
              ))}
            </div>
            

            {/* Contact */}
            <div className="grid grid-cols-2 gap-4">
              {["phone", "email"].map((field) => (
                <Controller
                  key={field}
                  name={field}
                  control={form.control}
                  render={({ field: f, fieldState }) => (
                    <Field>
                      <FieldLabel>{field}</FieldLabel>
                      <Input {...f} />
                      {fieldState.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </p>
                      )}
                    </Field>
                  )}
                />
              ))}
            </div>

            {/* Admin */}
            <div className="grid grid-cols-2 gap-4">
              {["department", "role", "hireDate"].map((field) => (
                <Controller
                  key={field}
                  name={field}
                  control={form.control}
                  render={({ field: f, fieldState }) => (
                    <Field>
                      <FieldLabel>{field}</FieldLabel>
                      <Input {...f} />
                      {fieldState.error && (
                        <p className="text-red-500 text-sm">
                          {fieldState.error.message}
                        </p>
                      )}
                    </Field>
                  )}
                />
              ))}
            </div>
          </div>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Create Employee</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateStaffDialog;