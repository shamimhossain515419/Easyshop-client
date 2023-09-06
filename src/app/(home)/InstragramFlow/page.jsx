import React from 'react';

import { BsInstagram } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/Component/Container';


const InstragramPage = () => {
     return (
          <div className=' bg-[#e7e8eb] my-5  py-10   px-10 '>
               <Container>
                    <div className=' grid md:grid-cols-2 gap-3 items-center'>
                         <div className=' flex justify-center  w-full overflow-hidden'>
                              <div>
                                   <BsInstagram size={24} className=' '></BsInstagram>
                                   <h1 className=' text-black text-3xl font-bold my-3'> Follow us on Instagram</h1>
                                   <p className=' text-base my-2 '> hmdshamim798</p>
                                   <h2 className=' my-3 text-lg  font-medium '> Contemporary wardrobe staples and authentic style for the modern man and women. Follow us for the latest trends.
                                        Tag us and get featured @hmdshamim798</h2>
                                   <h3 className='  my-2 text-lg '> www.instagram.com/hmdshamim798/</h3>
                              </div>
                         </div>
                         <div className=' grid md:grid-cols-2 gap-4'>
                              <Link className='h-[400px] imageInstragram overflow-hidden  relative ' href={'https://www.instagram.com/hmdshamim798/'}>
                                   <Image  width={400} height={400}   className='duration-300   scale-110 relative h-[400px]  ' src="https://img.freepik.com/premium-photo/winner-portrait-woman-tightens-her-fist-looking-camera_979672-2460.jpg?w=900" alt="" />
                                   <div className=' bgbox  hidden duration-300  top-0 left-0  h-full absolute w-full  hover:bg-[#0d0c0c9d]'>
                                        <div className=' h-[400px] duration-100  flex justify-center items-center'>
                                             <BsInstagram size={24} className='  text-white '></BsInstagram>
                                        </div>
                                   </div>
                              </Link>
                              <Link className='h-[400px] imageInstragram overflow-hidden  relative ' href={'https://www.instagram.com/hmdshamim798/'}>
                                   <Image  width={400} height={400}   className='duration-300  scale-110 relative h-[400px]  ' src="https://img.freepik.com/free-photo/emotional-young-blonde-woman-pointing-you_171337-2796.jpg?w=1380&t=st=1693323912~exp=1693324512~hmac=79995da9db6d8bdc4782dbf3900f4aeb8700fc5b02b4e1787812dc5df81798af" alt="" />
                                   <div className=' bgbox  hidden duration-300  top-0 left-0  h-full absolute w-full  hover:bg-[#0d0c0c9d]'>
                                        <div className=' h-[400px] duration-100  flex justify-center items-center'>
                                             <BsInstagram size={24} className='  text-white '></BsInstagram>
                                        </div>
                                   </div>
                              </Link>
                              <Link className='h-[400px] imageInstragram overflow-hidden  relative ' href={'https://www.instagram.com/hmdshamim798/'}>
                                   <Image width={400} height={400}    className='duration-300  scale-110 relative h-[400px]  ' src="https://Image.freepik.com/free-photo/smiling-woman-with-smart-watch_1301-1696.jpg?w=1380&t=st=1692729353~exp=1692729953~hmac=e4f359aa3c7885faf8e92874403df826601d7e745e763999e9cefc9c922b16a4" alt="" />
                                   <div className=' bgbox  hidden duration-300  top-0 left-0  h-full absolute w-full  hover:bg-[#0d0c0c9d]'>
                                        <div className=' h-[400px] duration-100  flex justify-center items-center'>
                                             <BsInstagram size={24} className='  text-white '></BsInstagram>
                                        </div>
                                   </div>
                              </Link>
                              <Link className='h-[400px] imageInstragram overflow-hidden  relative ' href={'https://www.instagram.com/hmdshamim798/'}>
                                   <Image width={400} height={400}    className='  duration-300  scale-110 relative h-[400px]  ' src="https://Image.freepik.com/free-photo/happy-woman-listening-music_23-2148547515.jpg?w=826&t=st=1692729325~exp=1692729925~hmac=ba70dc345e650364cc5a1f117f7ed452c60984c9f68c89bda5f7ca9110290bbe" alt="" />
                                   <div className=' bgbox  hidden duration-300  top-0 left-0  h-full absolute w-full  hover:bg-[#0d0c0c9d]'>
                                        <div className=' h-[400px] duration-100  flex justify-center items-center'>
                                             <BsInstagram size={24} className='  text-white '></BsInstagram>
                                        </div>
                                   </div>
                              </Link>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default InstragramPage;