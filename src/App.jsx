import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import AppointmentsPage from "./Pages/auth/dashboard/appointments/AppointmentsPage";
import PatientsPage from "./Pages/auth/dashboard/patients/PatientsPage";
import StaffList from "./Pages/auth/dashboard/staffList/StaffListPage";
import ReportsPage from "./Pages/auth/dashboard/reports/ReportsPage";
import StaffListPage from "./Pages/auth/dashboard/staffList/StaffListPage";
import PurchasesPage from "./Pages/auth/dashboard/purchases/Purchases";
import DashboardPage from "./Pages/auth/dashboard/overview/DashboardPage";





function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/staff" element={<StaffList />} />
          <Route path="/report" element={<ReportsPage />} />
          <Route path="/staff" element={<StaffListPage />} />
          <Route path="/purchases" element={<PurchasesPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />


      </Routes>

      <Toaster richColors={true} position="top-right" reverseOrder={false} />

    </BrowserRouter>
  );
}

export default App;

