'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReactStars from 'react-stars'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function PeoplerSinglePage() {
     return (
          <>
               <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={2}
                    loop={true}
                    breakpoints={{
                         sm: {
                              slidesPerView: 1,
                              spaceBetween: 8,
                         },
                         md: {
                              slidesPerView: 1,
                              spaceBetween: 12,
                         },
                         lg: {
                              slidesPerView: 2,
                              spaceBetween: 16,
                         },
                         xl: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                         },
                         // You can add more breakpoints as needed
                    }} s
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}
                    pagination={{
                         clickable: true,
                    }}

                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper  max-w-[1200px] md:px-10"
               >
                    <SwiperSlide className=' px-2'>
                         <div className=' flex justify-center items-center flex-col gap-2'>
                              <div>
                                   <ReactStars
                                        value={5}
                                        count={5}
                                        size={24}
                                        color2={'#FACA51'} />
                              </div>

                              <h1 className=' text-xl  max-w-[600px] text-center  mx-auto font-normal my-2'> “Very cute dress and fun color. I am also very impressed by the quality of the linen. Excited to wear this dress in the summer!” </h1>
                              <p className=' my-2'> I  love  this Phone</p>
                              <div className=' bg-[#000000b8] h-[1px] w-[200px]'></div>
                              <div className=' flex items-center my-4  gap-4'>
                                  <Image  width={67}  height={64} className=' w-16 h-16 rounded-full  border border-blue-400  object-contain ' src="https://img.freepik.com/free-psd/portrait-woman-using-tablet-device_23-2150116768.jpg?size=626&ext=jpg&ga=GA1.1.1266374889.1691075921&semt=ais" alt="" />
                                   <h1 className=' text-xl  font-normal '> Lachlan Simonds </h1>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide className=' px-2'>
                         <div className=' flex justify-center items-center flex-col gap-2'>
                              <div>
                                   <ReactStars
                                        value={5}
                                        count={5}
                                        size={24}
                                        color2={'#FACA51'} />
                              </div>

                              <h1 className=' text-xl  max-w-[600px] text-center   mx-auto font-normal my-2'> “Very cute dress and fun color. I am also very impressed by the quality of the linen. Excited to wear this dress in the summer!” </h1>
                              <p className=' my-2'> I  love  this T-shirt</p>
                              <div className=' bg-[#000000b8] h-[1px] w-[200px]'></div>
                              <div className=' flex items-center my-4  gap-4'>
                                  <Image width={67}  height={64} className=' w-16 h-16 rounded-full  border border-blue-400  object-contain ' src="https://img.freepik.com/free-photo/portrait-beautiful-young-happy-woman-with-thumbs-up-sign-white-background_186202-5425.jpg?size=626&ext=jpg&ga=GA1.1.1266374889.1691075921&semt=ais" alt="" />
                                   <h1 className=' text-xl  font-normal '> Archie Sunderland </h1>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide className='  px-2'>
                         <div className=' flex justify-center items-center flex-col gap-2'>
                              <div>
                                   <ReactStars
                                        value={5}
                                        count={5}
                                        size={24}
                                        color2={'#FACA51'} />
                              </div>

                              <h1 className=' text-xl  max-w-[600px] text-center  mx-auto font-normal my-2'> “Very cute dress and fun color. I am also very impressed by the quality of the linen. Excited to wear this dress in the summer!” </h1>
                              <p className=' my-2'> I  love  this T-shirt</p>
                              <div className=' bg-[#000000b8] h-[1px] w-[200px]'></div>
                              <div className=' flex items-center my-4  gap-4'>
                                  <Image width={67}  height={64}  className=' w-16 h-16 rounded-full  border border-blue-400  object-contain ' src="https://img.freepik.com/premium-photo/pretty-businesswoman-smiling-camera_13339-78104.jpg?size=626&ext=jpg&ga=GA1.1.1266374889.1691075921&semt=ais" alt="" />
                                   <h1 className=' text-xl  font-normal '> Timothy Winston </h1>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide className=' px-2'>
                         <div className=' flex justify-center items-center flex-col gap-2'>
                              <div>
                                   <ReactStars
                                        value={5}
                                        count={5}
                                        size={24}
                                        color2={'#FACA51'} />
                              </div>

                              <h1 className=' text-xl  max-w-[600px] text-center  mx-auto font-normal my-2'> “Very cute dress and fun color. I am also very impressed by the quality of the linen. Excited to wear this dress in the summer!” </h1>
                              <p className=' my-2'> I  love  this T-shirt</p>
                              <div className=' bg-[#000000b8] h-[1px] w-[200px]'></div>
                              <div className=' flex items-center my-4  gap-4'>
                                  <Image  width={67}  height={64} className=' w-16 h-16 rounded-full  border border-blue-400  object-contain ' src="https://img.freepik.com/free-photo/smart-looking-teacher_53876-23045.jpg?size=626&ext=jpg&ga=GA1.2.1266374889.1691075921&semt=ais" alt="" />
                                   <h1 className=' text-xl  font-normal '> Jack Hoad
                                   </h1>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide className='  px-2'>
                         <div className=' flex justify-center items-center flex-col gap-2'>
                              <div>
                                   <ReactStars
                                        value={5}
                                        count={5}
                                        size={24}
                                        color2={'#FACA51'} />
                              </div>

                              <h1 className=' text-xl  max-w-[600px] text-center  mx-auto font-normal my-2'> “Very cute dress and fun color. I am also very impressed by the quality of the linen. Excited to wear this dress in the summer!” </h1>
                              <p className=' my-2'> I  love  this T-shirt</p>
                              <div className=' bg-[#000000b8] h-[1px] w-[200px]'></div>
                              <div className=' flex items-center my-4  gap-4'>
                                  <Image width={67}  height={64}  className=' w-16 h-16 rounded-full  border border-blue-400  object-contain ' src="https://img.freepik.com/free-photo/portrait-beautiful-young-happy-woman-with-thumbs-up-sign-white-background_186202-5425.jpg?size=626&ext=jpg&ga=GA1.1.1266374889.1691075921&semt=ais" alt="" />
                                   <h1 className=' text-xl  font-normal '> Archie Sunderland </h1>
                              </div>
                         </div>
                    </SwiperSlide>

               </Swiper>
          </>
     );
}