
'use client'

import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { AuthContext } from '@/Component/AuthProvider/Authprovider';
import Container from '@/Component/Container';
const RegisterPage = () => {

     const { GoogleLogin, createUser, updateUserProfile } = useContext(AuthContext);
     const [show, setShow] = useState(false)
     const search = useSearchParams();
     const targetURL = search.get("redirectUrl") || "/";

     const { replace, refresh } = useRouter();
     const handleSubmit = async (e) => {
          e.preventDefault();
          const from = e.target;
          const name = from.name.value
          const email = from.email.value
          const password = from.password.value
          console.log(name, email, password);
          const photo = ""
          const result = await createUser(email, password)
          const user = await updateUserProfile(name, photo)
          if (result) {

               toast.success('Successfully Register!');
               refresh();
               replace(targetURL);
          }


     }
     const handleGoogleSing = async () => {
          const result = await GoogleLogin()

          toast.success('Successfully Login!');
          refresh();
          replace(targetURL);
     }


     return (
          <div>
               <div>

                    <div>
                         <Container>
                              <div className="  w-full flex justify-center items-center min-h-[70vh]">
                                   <div className=" boxShadow bg-white max-w-[1200px] mx-auto p-4 boxshadow rounded-sm ">
                                        <div className=" my-10  md:flex py-2 justify-between">
                                             <h1 className=" text-2xl font-semibold "> Welcome to Easy shop! Please login.</h1>
                                             <div> <span> Already Member? </span> <Link className=" text-blue-600  underline" href={'/login'}>login</Link> <span>Here</span> </div>
                                        </div>
                                        <div>
                                             <div>
                                                  <form onSubmit={handleSubmit} action="">
                                                       <div className=" md:grid grid-cols-2 gap-10 ">
                                                            <div>
                                                                 <div className=" w-full">
                                                                      <label htmlFor="Email">Name*</label>
                                                                      <input className=" outline-0 w-full border px-2 py-2 " type="text" name="name" placeholder="please enter your name" id="" />
                                                                 </div>
                                                                 <div className=" w-full">
                                                                      <label htmlFor="Email">Email*</label>
                                                                      <input className=" outline-0 w-full border px-2 py-2 " type="email" name="email" placeholder="please enter your email" id="" />
                                                                 </div>
                                                                 <div className=" w-full my-2">
                                                                      <label htmlFor="Email">Password*</label>
                                                                      <input className=" outline-0 w-full border px-2 py-2 " type={`${show ? "password" : "text"}`} name="password" placeholder="please enter your password" id="" />
                                                                 </div>
                                                                 <div className='  uppercase cursor-pointer ' onClick={() => setShow(!show)}>show password</div>

                                                            </div>
                                                            <div className=" mt-2">
                                                                 <div>
                                                                      <button type="submit" className=" text-xl bg-[#1889eb] block w-full  text-center mx-auto py-2 text-white">Register</button>
                                                                 </div>
                                                                 <div className=' my-5 flex items-center gap-2'>
                                                                      <div className='  bg-black py-[1px]  w-full  '></div>
                                                                      <div>OR</div>
                                                                      <div className='  bg-black py-[1px]  w-full  '></div>
                                                                 </div>

                                                                 <div onClick={handleGoogleSing} className="  cursor-pointer my-5">
                                                                      <div className=" text-xl flex items-center justify-center gap-5  bg-[#F59E0B]  w-full  text-center mx-auto py-2 text-white"> <FcGoogle size={24} className=" text-center"></FcGoogle> <span>Google</span> </div>
                                                                 </div>
                                                                 <div className="  my-5">
                                                                      <div className=" text-xl flex items-center justify-center gap-5  bg-[#eb88ed]  w-full  text-center mx-auto py-2 text-white"> <FaFacebook size={24} className=" text-center "></FaFacebook> <span>Facebook</span> </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </form>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </Container>
                    </div>
               </div>
          </div>
     );
};

export default RegisterPage;