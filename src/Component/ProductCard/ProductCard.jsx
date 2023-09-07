'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactStars from 'react-stars'
const ProductCard = ({ product }) => {
     const { image, rating, price, discount, _id, name } = product;


     return (
          <Link href={`/product/${_id}`} className=' overflow-hidden hover:shadow-md rounded  w-full text-black' >
               <div  className=" h-[250px]  overflow-hidden">
                    <Image className="  w-full  h-[250px]  overflow-hidden"
                         src={image} // Replace 'image' with the actual image source URL
                         alt=""
                         width={100}
                         height={50}
                         // This ensures responsive resizing
                         objectFit="cover" // This determines how the image scales within its container

                    />
               </div>
               <div className=' p-2 '>
                    <h1> {name}</h1>
                    <p>${price}.00</p>
                    <p className=' '>{discount}% OF</p>
                    <ReactStars
                         value={rating}
                         count={5}
                         size={24}
                         color2={'#FACA51'} />
               </div>
          </Link>
     );
};

export default ProductCard;