
import Link from 'next/link';
import React from 'react';
import { CiFacebook } from 'react-icons/ci'
import { FaMapMarkerAlt } from 'react-icons/fa'
import {AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import Container from '@/Component/Container';

const Footer = () => {
     return (
          <div className=' bg-[#F5F5F5] pt-20  pb-6'>
               <Container>
                    <div className=' grid md:grid-cols-4 gap-7 '>
                         <div>
                              <div>
                                   <h2 className=' text-2xl  font-semibold  my-2'> Easy Shop</h2>
                                   <p> Easy Shop is the best shop in the world. Best quality products available</p>
                              </div>
                              <div className=' my-4 flex gap-5 items-center '>
                                   <CiFacebook size={28} className=' text-blue-400 cursor-pointer'></CiFacebook>
                                   <AiOutlineInstagram size={28} className=' text-[#d32bf0] cursor-pointer'></AiOutlineInstagram>
                                   <AiOutlineTwitter size={28} className=' text-blue-600 cursor-pointer'></AiOutlineTwitter>
                                   
                              </div>
                         </div>
                         <div>
                              <h1 className='  text-2xl font-medium'> My Account</h1>
                              <div>
                                   <Link className=' block  text-md font-normal my-2 hover:text-[#3883eb]  hover:underline hover:translate-x-1 duration-300' href={'/'}>Dashboard</Link>
                                   <Link className=' block  text-md font-normal my-2 hover:text-[#3883eb]  hover:underline hover:translate-x-1 duration-300' href={'/'}>Payment History</Link>
                                   <Link className=' block  text-md font-normal my-2 hover:text-[#3883eb]  hover:underline hover:translate-x-1 duration-300' href={'/'}> Returns  </Link>
                                   <Link className=' block  text-md font-normal my-2 hover:text-[#3883eb]  hover:underline hover:translate-x-1 duration-300' href={'/'}> Shopping  </Link>
                              </div>


                         </div>
                         <div>
                              <h1 className='  text-2xl font-medium'> Infomation</h1>
                              <Link className=' block  text-md font-normal my-2 hover:text-[#3883eb]  hover:underline hover:translate-x-1 duration-300' href={'/'}> Privacy Policy  </Link>
                              <Link className=' block  text-md font-normal my-2 hover:text-[#3883eb]  hover:underline hover:translate-x-1 duration-300' href={'/'}>Our Story </Link>
                              <Link className=' block  text-md font-normal my-2 hover:text-[#3883eb]  hover:underline hover:translate-x-1 duration-300' href={'/'}>Contact Us</Link>
                              <Link className=' block  text-md font-normal my-2 hover:text-[#3883eb]  hover:underline hover:translate-x-1 duration-300' href={'/'}>Latest News</Link>
                              <Link className=' block  text-md font-normal my-2 hover:text-[#3883eb]  hover:underline hover:translate-x-1 duration-300' href={'/'}> Terms & Conditions  </Link>

                         </div>
                         <div>
                              <h1 className='  text-2xl font-medium'>Talk To Us</h1>
                              <p> Got Questions? Call us </p>
                              <h1 className=' text-3xl font-semibold my-2'> +0881617650797</h1>
                              <div className=' flex items-center gap-3'>
                                   <AiOutlineMail size={24}></AiOutlineMail>
                                   <p> easyshop@gmail.com</p>
                              </div>
                              <div className=' mt-5 flex items-center gap-3'>
                                   <FaMapMarkerAlt className=' ' size={24}></FaMapMarkerAlt>
                                   <p> Nawabbari Rd, Bogura 5800</p>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Footer;