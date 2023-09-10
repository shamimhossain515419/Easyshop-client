import Link from 'next/link';
import React from 'react';

const page = () => {
     return (
          <div>
               <div>
                    <div className='  flex-col gap-6  flex justify-center  items-center  h-screen'>
                         <h1 className=' text-2xl md:text-3xl  text-red-500 2xl:text-6xl font-bold'>   Payment Fail  </h1>

                         <div className=' text-center mx-auto px-2 py-2 rounded-xl bg-[#474ae6]'>
                              <Link className='' href={'/'}> Go To home page</Link>
                         </div>

                    </div>
               </div>
          </div>
     );
};

export default page;