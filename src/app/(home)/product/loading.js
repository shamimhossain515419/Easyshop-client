'use client'
import React from 'react';
import { Audio } from 'react-loader-spinner';

const loading = () => {
     return (
          <div className=' w-full h-screen flex justify-center items-center bg-[#363535]'>
               <div>
                    <Audio
                         height="80"
                         width="80"
                         radius="9"
                         color="green"
                         ariaLabel="loading"
                         wrapperStyle
                         wrapperClass
                    />
               </div>
          </div>
     );
};

export default loading;