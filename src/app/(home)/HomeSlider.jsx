
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { AiOutlineArrowRight } from 'react-icons/ai'

import Link from 'next/link';

import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import Image from 'next/image';
import Container from '@/Component/Container';
import mainSlider from '@/Data/Slider';


const HomeSlider = () => {

  
     return (
          <div className=' swiper-container '>



               <Swiper
                    slidesPerView={1}
                    loop={true}
                    navigation={true}

               >

                    {
                         mainSlider?.map((item, index) => <SwiperSlide key={index}>


                              <div className=' w-full md:h-[80vh]  bg-[#115061]'>
                                   <Container>
                                        <div className=' text-white grid md:grid-cols-2 items-center h-full  gap-4 md:h-[80vh] '>
                                             <div>
                                                  <h1 className=' text-3xl  md:text-6xl font-bold my-5'> The best note book  <br />collection 2023 </h1>
                                                  <div className=' flex gap-1 items-center text-2xl  font-medium'>
                                                       <span>Exclusive offer</span>
                                                       <span className=' text-[#ffd53d]'>10%</span>
                                                       <span> off this week</span>
                                                  </div>
                                                  <div className=' mt-4 cursor-pointer bg-[white] px-6 py-2  rounded-md text-black   text-xl flex items-center gap-1 w-[170px]'>
                                                       <Link href={'/shop'} className=''>Shop New</Link>
                                                       <AiOutlineArrowRight size={20}></AiOutlineArrowRight>

                                                  </div>
                                             </div>
                                             <div className='flex justify-end '>
                                                  <Image width={1000} height={800}   src={item?.bg} alt="" />
                                             </div>
                                        </div>
                                   </Container>
                              </div>
                         </SwiperSlide>)
                    }


               </Swiper>

          </div>
     );
};

export default HomeSlider;