import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@/Components/ui/button';
import LoginForm from '@/Components/shared/auth/LoginForm';
import Aside from '@/Components/shared/auth/Aside';

const LoginPage = () => {
  return (
    <div className='h-screen md:flex'>
      <Aside />

      <div className='flex md:w-1/2 h-screen justify-center py-10 items-center bg-white relative'>

      <Button variant="ghost" asChild className="absolute top-10 right-10">

      </Button>
      <LoginForm />

      </div>
    </div>
  );
};
export default LoginPage