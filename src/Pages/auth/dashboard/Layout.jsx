import React from 'react';
import Navbar from "@/Components/shared/dashboard/navbar/Navbar";


const Layout = ({ children }) => {
  return (
    <div className='flex'>
        <Navbar />

        <main className="ml-64 p-6 w-full">{children}</main>

    </div>
  );
};

export default Layout