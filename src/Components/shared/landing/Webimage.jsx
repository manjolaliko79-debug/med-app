import React from 'react';
import TaskImg from "@/assets/img/TaskImg.png";


const Webimage = () => {
  return (
    <div className='w-full mx-auto mt-20 text-center md:w-10/12'>
        <div className='relative z-0 w-full mt-8'>
            <div className='relative overflow-x-hidden shadow-2xl'>
              <div className='flex items-center flex-none px-4 bg-blue-700 rounded-b-none h-8 rounded-2xl'>
                    <div className='flex space-x-1.5'>
                        <div className='w-3 h-3 border-2 border-white rounded-full'></div>
                        <div className='w-3 h-3 border-2 border-white rounded-full'></div>
                        <div className='w-3 h-3 border-2 border-white rounded-full'></div>

                    </div>
                </div>  

                <img src= {TaskImg} alt="Tasks Image"/>


            </div>

        </div>

    </div>
  );
};

export default Webimage