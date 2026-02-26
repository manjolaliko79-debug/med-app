import React from 'react';
import Webimage from '@/Components/shared/landing/Webimage';
import { Link } from "react-router-dom";
import { UserCheck } from 'lucide-react';


const HomePage = () => {
  return (
    <main className="pt-24 bg-white" >
        <div className='px-12 mx-auto max-w-7xl'>
            <div className='w-full mx-auto text-center'>
                <h1 className='mb-8 text-4xl font-extrabold text-blue-800'>
                    <span>Start</span> {" "}
                    <span className='block w-full py-2  text-blue-700 lg:inline'>Patient Management
                    </span>{" "}
                </h1>

                <div className='my-4 space-x-0 md:space-x-2 md:mb-8'>
                    <Link to="/login" className='inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-white bg-blue-600 rounded-2xl sm:w-auto sm:mb-0'>
                    Login <UserCheck />
                    </Link>

                </div>
            </div>

            <Webimage/>

        </div>
        </main>
  );
};

export default HomePage