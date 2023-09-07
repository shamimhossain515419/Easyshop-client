"use client"

import { AuthContext } from '@/Component/AuthProvider/Authprovider';
import GetCardData from '@/Component/GetCardData';
import Loading from '@/Component/Loading/Loading';

import axios from 'axios';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

const AddCardPage = () => {
     const { user } = useContext(AuthContext);
     const [order, setOrder] = useState([])
     const [price, setPrice] = useState(0)
     const [Fee, setFee] = useState(0)
     const [discount, setDiscount] = useState(0);
     console.log(user);
     useEffect(() => {
          fetch(`https://esayshop-server.vercel.app/addcard/${user?.email}`).then(res => res.json()).then(data => setOrder(data))

     },);
    
     const handleDelete = (id) => {
          console.log(id);
          axios.delete(`https://esayshop-server.vercel.app/addcard/${id}`).then(result => {
               if (result) {
                    console.log(result);
                    fetch(`https://esayshop-server.vercel.app/addcard/${user?.email}`).then(res => res.json()).then(data => setOrder(data))
                    toast.success('Successfully Delete!')
               }
          })
     }

     const handleCheckboxChange = async (Price, e) => {
          if (e.target.checked == true) {
               setPrice(price + Price);
               setFee(Fee + Price / 100 * 5)
               setDiscount(discount + Price / 100 * 4)
          } else {
               setPrice(price - Price);
               setFee(Fee - Price / 100 * 5)
               setDiscount(discount - Price / 100 * 4)

          }
     };

     const TotalPrice = price + discount - Fee;

     return (
          <div className=' md:p-3 xl:p-6'>
               {
                    order?.length ? <>
                         <div className=' grid md:grid-cols-6 gap-4'>

                              <div className='   col-span-4 '>
                                   {
                                        order?.map(item => <div className=' my-3   rounded-md shadow p-2 md:p-4' key={item._id}>

                                             <div className=' sm:flex gap-4  '>
                                                  <div className=' my-2'>
                                                       <input
                                                            onChange={(e) => handleCheckboxChange(item?.price, e)} className=' p-2 w-5 ' type="checkbox" name="" id="" />
                                                  </div>
                                                  <div className=' my-2'>
                                                       <Image width={150} height={150} className=' rounded-lg w-full max-h-[150px] sm:max-w-[150px]  ' src={item.image} alt="" />
                                                  </div>
                                                  <div className=' my-2'>
                                                       <h1 className=' text-base md:text-2xl '>{item?.title} </h1>
                                                       <h1 className=' text-sm md:text-lg '>{item?.name} </h1>
                                                  </div>
                                                  <div className=' my-2'>
                                                       <h1 className=' text-base md:text-xl '>${item?.price.toFixed(2)} </h1>
                                                       <div className=' flex gap-2 items-center mt-3 '>
                                                            <AiOutlineHeart className=' cursor-pointer m-2 ' size={20}></AiOutlineHeart>
                                                            <BsTrash onClick={() => handleDelete(item?._id)} className=' cursor-pointer m-2 ' size={20}></BsTrash>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>)
                                   }
                              </div>
                              <div className=' md:max-h-[400px] shadow p-2 md:p-4 rounded-lg col-span-2 gap-2'>
                                   <div>
                                        <h1 className=' text-base md:text-2xl font-semibold'> Order Summary</h1>
                                        <div className=' mt-5 flex justify-between items-center gap-2'>
                                             <h1> Subtotal (2 items)</h1>
                                             <p> ${price.toFixed(2)}</p>
                                        </div>
                                        <div className=' mt-5 flex justify-between items-center gap-2'>
                                             <h1> Shipping Fee</h1>
                                             <p> ${Fee?.toFixed(2)}</p>
                                        </div>
                                        <div className=' mt-5 flex justify-between items-center gap-2'>
                                             <h1> Shipping Fee Discount</h1>
                                             <p> ${discount?.toFixed(2)}</p>
                                        </div>
                                   </div>
                                   <div className=' mt-10 flex  justify-between gap-3 items-center'>
                                        <input className=' w-full px-3 py-2 border rounded-md outline-1   outline-[#3e7ae8] ' type="text" placeholder='Enter the Code ' name="" id="" />
                                        <button className=' text-white px-3 py-2 md:px-10 rounded-xl  bg-[#3e7ae8]'>Apply</button>

                                   </div>

                                   <div className=' mt-5 flex justify-between items-center gap-2'>
                                        <h1> Total</h1>
                                        <p className=' text-[#ff7d20]'> ${TotalPrice.toFixed(0)}</p>
                                   </div>

                                   <div className=' text-white text-base md:text-xl mt-7  text-center py-2  px-4 rounded-2xl bg-[#3e7ae8]'>Process to checkout</div>
                              </div>
                         </div></> : <>  <Loading></Loading>  </>
               }



          </div>
     );
};

export default AddCardPage;