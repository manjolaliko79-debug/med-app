import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import AppoitmentsPage from "./Pages/auth/dashboard/appoitments/AppoitmentsPage";
import PatientsPage from "./Pages/auth/dashboard/patients/PatientsPage";
import StaffList from "./Pages/auth/dashboard/staffList/StaffListPage";
import ReportsPage from "./Pages/auth/dashboard/reports/ReportsPage";
import StaffListPage from "./Pages/auth/dashboard/staffList/StaffListPage";





function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/appoitments" element={<AppoitmentsPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/staff" element={<StaffList />} />
          <Route path="/report" element={<ReportsPage />} />
          <Route path="/staff" element={<StaffListPage />} />

      </Routes>

      <Toaster richColors={true} position="top-right" reverseOrder={false} />

    </BrowserRouter>
  );
}

export default App;

