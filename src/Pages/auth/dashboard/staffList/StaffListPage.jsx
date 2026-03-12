import React from 'react';
import Layout from '../Layout';
import Header from "@/Components/shared/dashboard/Header";
import StaffTable from "@/Components/shared/dashboard/overview/staff/StaffTable"

const StaffList = () => {
   const [search, setSearch] = React.useState("");
  return (

    <Layout>
      
      <Header 
        title="Employees Management"
        search={search}
        setSearch={setSearch}
      > 
              </Header>

              <StaffTable global filter={search}/>
      
      
      
      </Layout>
  )
}

export default StaffList