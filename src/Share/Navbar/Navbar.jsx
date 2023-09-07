"use client"

import { AuthContext } from '@/Component/AuthProvider/Authprovider';
import Container from '@/Component/Container';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React, { useContext, useState, } from 'react';
import { useEffect } from 'react';
import { AiFillShopping, AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const { user, LogOut } = useContext(AuthContext);
     const [Open, setOpen] = useState(false)
     const [order, setOrder] = useState(false)

     const { replace, refresh } = useRouter();


     useEffect(() => {
          fetch(`https://esayshop-server.vercel.app/addcard/${user?.email}`).then(res => res.json()).then(data => setOrder(data))

     })

     const handleLogout = async () => {
          await LogOut();

          replace('/')
          toast.success('Successfully Login!');

     }


     return (

          <div className=' bg-white  z-50 shadow-md fixed top-0 left-0 right-0  w-full '>

               <Container>
                    <nav className="flex items-center justify-between flex-wrap p-6">
                         <Link href={'/'} className="flex items-center flex-shrink-0  mr-6 lg:mr-72">
                              <h1 className=' text-xl md:text-4xl font-medium'> Easy Shop</h1>
                         </Link>
                         <div className="block lg:hidden">
                              <button
                                   onClick={() => setIsOpen(!isOpen)}
                                   className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                              >
                                   <svg
                                        className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                   >
                                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                   </svg>
                                   <svg
                                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                   >
                                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                                   </svg>
                              </button>
                         </div>
                         <div
                              className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
                         >
                              <div className="text-sm lg:flex-grow">
                                   <Link href={'/shop'} className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                                        Shop
                                   </Link>
                                   <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                                        Services
                                   </Link>
                                   <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                                        Contact
                                   </Link>

                              </div>
                              <div>
                                   {
                                        user ? <div className=' flex items-center gap-3 m-2'>
                                             <Link href={'/'} className=' mx-3'>
                                                  <span className="relative inline-block">
                                                       <AiFillShopping className='  text-4xl relative ' size={34}></AiFillShopping>
                                                       <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{order?.length}</span>
                                                  </span>
                                             </Link>



                                             <div onClick={() => setOpen(!Open)} className=' cursor-pointer'>
                                                  {user?.photoURL ? <> <Image width={25} height={25} className=' h-[40px] w-[40px]  rounded-full ' src={user?.photoURL} alt="" /></> : <div className=' uppercase bg-[#48a7e7] text-white p-2 rounded-full m-2  font-semibold text-xl'> {user?.displayName.slice(0, 2)} </div>
                                                  }
                                             </div>



                                        </div> : <div>
                                             <Link className=' text-[#000000a7]' href={'/login'}>Login/register</Link>
                                        </div>
                                   }
                              </div>

                         </div>
                    </nav>

                    {
                         Open ? <div className='bg-[#FFF]  translate-y-2 duration-300   right-20 absolute  textColor top-20 z-50   py-3 px-8 rounded-md '>
                              <Link onClick={() => setOpen(false)} href={'/dashboard'} className='  hover:text-blue-500 my-2 flex gap-2 items-center'>
                                   <AiOutlineHome size={24}></AiOutlineHome>
                                   <h2 className=' text-xl font-semibold'> Dashboard</h2>
                              </Link>
                              <hr />
                              <div onClick={() => setOpen(false)} className='my-2 hover:text-blue-500 flex gap-2 items-center'>
                                   <AiOutlineSetting size={24}></AiOutlineSetting>
                                   <h2 className=' text-xl font-semibold'> Setting</h2>
                              </div>
                              <div onClick={() => setOpen(false)} className='my-4 hover:text-blue-500 flex gap-2 items-center'>
                                   <FiLogIn size={24}></FiLogIn>
                                   <h2 onClick={handleLogout} className=' text-xl font-semibold'> Logout </h2>
                              </div>
                         </div> : ""
                    }
               </Container>
          </div>
     );
};

export default Navbar;