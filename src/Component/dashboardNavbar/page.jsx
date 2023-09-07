'use client'
import Link from 'next/link';

import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Authprovider';
import { AiOutlineArrowLeft } from 'react-icons/ai';



const DashboardNavbarPage = () => {
     const { user } = useContext(AuthContext);
     return (
          <div>
               <div className=' flex px-2  justify-between items-center'>
                    <h1>  Hello!</h1>
                    <AiOutlineArrowLeft className='  md:hidden'  size={24}></AiOutlineArrowLeft>
               </div>
               <h1 className=' my-2 '>  {user?.email} </h1>
               <h1 className=' text-xl font-normal my-2 mt-10 '> Manage My Account</h1>
               <Link  className=' my-2 block' href={'/dashboard/profile'}>My profile</Link>
               <Link  className=' my-2 block' href={'/dashboard/payment'}>My Payment Options</Link>

               <h1 className=' text-xl font-normal my-2  mt-5 '> My Orders</h1>

               <Link  className=' my-2 block' href={'/dashboard/addcard'}>My Card</Link>
               <Link  className=' my-2 block' href={'/dashboard/cancellations'}>My Cancellations</Link>
               <h1 className=' text-xl font-normal my-2  mt-5 '> My Reviews</h1>
               <Link  className=' my-2 block' href={'/dashboard/cancellations'}>My Wishlist  & Followed Stores</Link>
               <Link  className=' my-2 block' href={'/dashboard/cancellations'}>Sell On easy shop</Link>

          </div>
     );
};



export default DashboardNavbarPage;