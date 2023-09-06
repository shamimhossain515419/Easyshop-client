
import Container from '@/Component/Container';
import { Item } from '@/Data/item';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Category = () => {
     return (
          <div className=' my-12'>
               <Container>
                    <div className=' flex gap-3 items-center justify-around flex-wrap'>
                         {
                              Item?.map((item, index) => <Link href={'/shop'} key={index}>
                                   <div>
                                        <Image className='h-[200px] w-[200px] rounded-full' width={200}  height={150} src={item?.img} alt="" />
                                   </div>
                                   <div className=' text-center mx-auto'>
                                        <h1 className=' text-xl font-medium my-2'> {item?.title} </h1>
                                        <p className=' text-lg font-normal'> {item?.item} Product </p>
                                   </div>
                              </Link>)
                         }
                    </div>
               </Container>

               
          </div> 
     );
};

export default Category;