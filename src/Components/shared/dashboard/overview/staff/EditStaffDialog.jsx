import React from 'react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const EditStaffDialog = ({ employee, onUpdateEmployee, onClose }) => {

  const { register, handleSubmit } = useForm({
    defaultValues: employee
  });

  const onSubmit = (data) => {
    onUpdateEmployee({
      ...employee,
      ...data
    });

    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Employee</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <input {...register("firstName")} />
          <input {...register("lastName")} />
          <input {...register("role")} />
          <input {...register("department")} />
          <input {...register("phone")} />
          <input {...register("email")} />
          <input {...register("hireDate")} />

          <Button type="submit">Update Employee</Button>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditStaffDialog;

