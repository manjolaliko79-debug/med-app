import React from 'react';
import Logo from '@/assets/img/Logo.png';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";


const Aside = () => {
  return (
    <div className='relative overflow-hidden md:flex w-1/2 h-screen flex-col justify-between py-10  bg-blue-800 hidden'>
        <Link to="/">
        <img src={Logo} alt="Logo" className='w-40 ml-8 h-10 rounded-md cursor-pointer'  />
        </Link>
        <div className='w-full mx-auto text-white'>
            <h1 className='mb-8 ml-8 text-4xl font-extrabold font-sans'>
                Medical Dashboard </h1>
            <p className='mb-8 ml-8 text-lg '>
                Welcome to innovative Medical Dashboard. </p>
                <Button variant="secondary" asChild className="absolute top-10 right-10">
                    <Link to="/">Back to Home</Link>
                </Button>
        </div>

    </div>
  );
};

export default Aside