import React from 'react';


import { NextResponse } from 'next/server';
import Link from 'next/link';
import Container from '@/Component/Container';
import ProductCard from '@/Component/ProductCard/ProductCard';
export const revalidate = 5;
NextResponse
const ShopPage = async () => {
     const res = await fetch('https://esayshop-server.vercel.app/product', {
          cache: 'no-cache'
     });
     const product = await res.json();
     
     return (
          <div className=' mt-20'>
               <Container>

                    <div className=' my-11 md:flex justify-between items-center '>
                         <div className=' text-3xl font-bold '>Trending Products</div>
                         <div className="bg-[#292828]  hidden md:block w-1/3 py-[2px] rounded"></div>
                         <div className=' flex justify-center gap-5'>
                              <Link href={'/new'} className=' text-2xl font-medium'>New</Link>
                              <Link href={'/topsellers'} className=' text-2xl font-medium'>Top SFellers</Link>
                              <Link href={'/featured'} className=' text-2xl font-medium'>Featured</Link>

                         </div>
                    </div>


                    <div className=' grid md:grid-cols-4  xl:grid-cols-5 gap-2'>

                         {
                              product?.map(item => <ProductCard key={item?._id} product={item}></ProductCard>)
                         }

                    </div>
               </Container>
          </div>
     );
};

export default ShopPage;