import React, { useEffect } from "react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardFooter, 
  CardContent 
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { LayoutDashboard, List, Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import CreateStaffDialog from "./CreateStaffDialig";
import { DataTable } from "@/Components/shared/dataTable/DataTable";
import { columns } from "@/Components/shared/dataTable/Column";
import EditStaffDialog from "./EditStaffDialog";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/Components/ui/dialog";

const StaffTable = () => {
  const [employees, setEmployees] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [listView, setListView] = React.useState(true);
  const [editingEmployee, setEditingEmployee] = React.useState(null);
  const [deletingEmployee, setDeletingEmployee] = React.useState(null);
  
  const handleDeleteEmployeeClick = (employee) => {
  setDeletingEmployee(employee);
};

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(`http://localhost:8095/api/employees`);
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return (<h1>Fetching Employees...</h1>
    );
  }


  const handleAddEmployee = (newEmployee) => {
  setEmployees((prev) => [...prev, newEmployee]);
    };



    const handleUpdateEmployee = async (updatedEmployee) => {
  const response = await fetch(
    `http://localhost:8095/api/employees/${updatedEmployee.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmployee),
    }
  );

  const saved = await response.json();

  setEmployees((prev) =>
    prev.map((emp) =>
      emp.id === saved.id ? saved : emp
    )
  );
};

    const handleDeleteEmployee = async (id) => {
  try {
    await fetch(`http://localhost:8095/api/employees/${id}`, {
      method: "DELETE",
    });

    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  } catch (error) {
    console.error("Error deleting employee", error);
  }
};

const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
};



const tableColumns = columns(handleEditEmployee, handleDeleteEmployeeClick);



  return (
    <div className="w-full mt-8 space-y-6">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4">
        <h1 className="text-sm text-muted-foreground">
          Manage and monitor all clinic employees
        </h1>
      <CreateStaffDialog onAddEmployee={handleAddEmployee}/>


    {editingEmployee && (
  <EditStaffDialog
    employee={editingEmployee}
    onUpdateEmployee={handleUpdateEmployee}
    onClose={() => setEditingEmployee(null)}
  />
)}
      </div>


      <div className="w-full mb-8 gap-2 flex justify-end">
        <Button
          variant={listView ? "default" : "outline"}
          onClick={() => setListView(true)}
        >
          <List />
        </Button>

        <Button
          variant={listView ? "outline" : "default"}
          onClick={() => setListView(false)}
        >
          <LayoutDashboard />
        </Button>
      </div>
      
   



      {listView ? (
    
        <DataTable columns={tableColumns} data={employees} />
  
) : (
  <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
    {employees.map((employee) => (
      <Card key={employee.id}>
        <CardHeader>
          <CardTitle>
            {employee.firstName} {employee.lastName}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p>Role: {employee.role}</p>
          <p>Department: {employee.department}</p>
          <p>Phone: {employee.phone}</p>
          <p>Email: {employee.email}</p>
          <p>Hire Date: {employee.hireDate}</p>
        </CardContent>

        <CardFooter className="justify-between">
          <div className="flex gap-2">
            <Button variant="outline"
            onClick={() => handleEditEmployee(employee)}
            
            >
                <Pencil />
            </Button>


{deletingEmployee && (
  <Dialog open={true} onOpenChange={() => setDeletingEmployee(null)}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Employee</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete{" "}
          <strong>
            {deletingEmployee.firstName} {deletingEmployee.lastName}
          </strong>
          ? This action cannot be undone.
        </DialogDescription>
      </DialogHeader>

      <div className="flex justify-end gap-2 mt-4">
        <Button
          variant="outline"
          onClick={() => setDeletingEmployee(null)}
        >
          Cancel
        </Button>

        <Button
          variant="destructive"
          onClick={() => {
            handleDeleteEmployee(deletingEmployee.id);
            setDeletingEmployee(null);
          }}
        >
          Delete
        </Button>
      </div>
    </DialogContent>
  </Dialog>
)}


          </div>
        </CardFooter>
      </Card>
    ))}
  </div>
)}
</div>
);
};

export default StaffTable