import React from 'react';

import { BsInstagram } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/Component/Container';
import img1 from '../../../public/emotional-young-blonde-woman-pointing-you_171337-2796.webp'
import img2 from '../../../public/happy-woman-listening-music_23-2148547515.webp'
import img3 from '../../../public/smiling-woman-with-smart-watch_1301-1696.webp'
import img4 from '../../../public/winner-portrait-woman-tightens-her-fist-looking-camera_979672-2460.webp'


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
                                   <Image  width={400} height={400}   className='duration-300   scale-110 relative h-[400px]  ' src={img2} alt="" />
                                   <div className=' bgbox  hidden duration-300  top-0 left-0  h-full absolute w-full  hover:bg-[#0d0c0c9d]'>
                                        <div className=' h-[400px] duration-100  flex justify-center items-center'>
                                             <BsInstagram size={24} className='  text-white '></BsInstagram>
                                        </div>
                                   </div>
                              </Link>
                              <Link className='h-[400px] imageInstragram overflow-hidden  relative ' href={'https://www.instagram.com/hmdshamim798/'}>
                                   <Image  width={400} height={400}   className='duration-300  scale-110 relative h-[400px]  ' src={img1} alt="" />
                                   <div className=' bgbox  hidden duration-300  top-0 left-0  h-full absolute w-full  hover:bg-[#0d0c0c9d]'>
                                        <div className=' h-[400px] duration-100  flex justify-center items-center'>
 
                                        </div>
                                   </div>
                              </Link>
                              <Link className='h-[400px] imageInstragram overflow-hidden  relative ' href={'https://www.instagram.com/hmdshamim798/'}>
                                   <Image width={400} height={400}    className='duration-300  scale-110 relative h-[400px]  ' src={img3} alt="" />
                                   <div className=' bgbox  hidden duration-300  top-0 left-0  h-full absolute w-full  hover:bg-[#0d0c0c9d]'>
                                        <div className=' h-[400px] duration-100  flex justify-center items-center'>
                                             <BsInstagram size={24} className='  text-white '></BsInstagram>
                                        </div>
                                   </div>
                              </Link>
                              <Link className='h-[400px] imageInstragram overflow-hidden  relative ' href={'https://www.instagram.com/hmdshamim798/'}>
                                   <Image width={400} height={400}    className='  duration-300  scale-110 relative h-[400px]  ' src={img4} alt="" />
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