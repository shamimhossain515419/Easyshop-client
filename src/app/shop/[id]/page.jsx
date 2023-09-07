'use client'
import React, { useEffect, useState } from 'react';
import Container from '@/Component/Container';
import { CgMathMinus, CgMathPlus } from 'react-icons/cg';
import { CiFacebook } from 'react-icons/ci';
import ReactStars from 'react-stars';
import moment from 'moment';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import ProductCard from '@/Component/ProductCard/ProductCard';
import { useContext } from 'react';
import { AuthContext } from '@/Component/AuthProvider/Authprovider';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const SingleShopPage = ({ params }) => {
     const { user } = useContext(AuthContext)
     const [Quantity, setQuantity] = useState(1)
     const [product, setProduct] = useState([])
     const [data, setData] = useState({});
     const router = useRouter();
     useEffect(() => {
          fetch(`https://esayshop-server.vercel.app/product/${params?.id}`, {
               cache: "no-cache"
          }).then(res => res.json()).then(currentData => setData(currentData))
     }, [params]);


     const handleDecriment = () => {
          setQuantity(Quantity + 1)

     }
     const handleIncriment = () => {
          setQuantity(Quantity - 1)
     }

     // const { name, category, model, discount, price, image, rating, date, description } = data;
     const discountAmount = (data?.price * data?.discount) / 100;

     // Calculate the final discounted price
     const discountedPrice = data?.price - discountAmount;
     useEffect(() => {
          fetch(`https://esayshop-server.vercel.app/item/${data?.category}`).then(res => res.json()).then(data => setProduct(data))
     }, [data])


   console.log(product);
   console.log(data?.category);
     const itemData = { name: user?.displayName, email: user?.email, price: discountedPrice * Quantity, image: data?.image, title: data?.name, rating: data?.rating, }
     const handleAddCard = async () => {

          const response = await fetch('https://esayshop-server.vercel.app/addcard', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(itemData),
          });

          if (response.ok) {
               
               toast.success('Item updated successfully!')
               router.push('/')
          } else {
               
          }
     }

     return (
          <div className='  py-20'>
               <Container>
                    <div className=' boxShadow p-4  md:grid grid-cols-2 gap-5  mt-4'>
                         <div className=' p-3 text-end'>
                              <Image width={400} height={300}  className=' block   text-center mx-auto h-[300px] ' src={data?.image} alt="" />
                         </div>
                         <div className=' '>
                              <div>
                                   <h1 className=' uppercase text-2xl font-semibold my-2'>Name:{data?.name} <span className=' text-[#d23f3f]'></span>({data?.model}) </h1>
                                   <div className=' flex items-center gap-2'>
                                        <ReactStars
                                             value={data?.rating}
                                             count={5}
                                             size={24}
                                             color2={'#FACA51'} />
                                        <p className=' text-red-600'> {data?.rating} Rating </p>
                                   </div>
                                   <p className=' my-1 text-xl'>{data?.description} </p>
                                   <div>
                                        <p className=' text-[#3c8ace]'> Brand:No BrandMore Lighting from No Brand </p>
                                        <div>
                                             {moment(data?.date).format(" MMMM Do YYYY")}
                                        </div>
                                        <div className='  my-4'>
                                             <hr />

                                             <div>
                                                  <h1 className=' text-red-600 text-2xl font-semibold my-1'>$ {discountedPrice.toFixed(2)} </h1>
                                                  <h1> <span className=' text-base font-normal line-through'>$ {data?.price} </span> <span className=' mx-3 line-none'>  {data?.discount}% </span></h1>
                                             </div>

                                        </div>
                                        <hr />
                                        <div className=' my-5 flex items-center gap-8 '>
                                             <h1 className=' text-2xl font-medium my-1'>  Quantity</h1>
                                             <div className=' my-3 flex   items-center  gap-5'>
                                                  <button disabled={Quantity <= 1 ? true : false} onClick={handleIncriment} className=' p-2 rounded  bg-[#95939394]'>
                                                       <CgMathMinus></CgMathMinus>
                                                  </button>
                                                  <div>
                                                       <input className=' outline-none  h-full  w-[20px]' type="text" step={"1"} min="1" max="5" value={Quantity} />

                                                  </div>
                                                  <button disabled={Quantity >= 5 ? true : false} onClick={handleDecriment} className=' p-2 rounded  bg-[#95939394]'>
                                                       <CgMathPlus></CgMathPlus>
                                                  </button>
                                             </div>
                                        </div>
                                        <div>
                                             <h1 className=' text-xl font-medium my-1'> Total Price:  <span className=' text-red-500'> $ {(discountedPrice * Quantity).toFixed(2)}</span></h1>
                                        </div>
                                        <div className=' flex justify-center gap-3 items-center my-2'>
                                             <div className=' w-full'>
                                                  <button className=' text-xl text-white  py-2  hover:bg-[#000] hover:text-white rounded-sm w-full bg-[#242bed]'>Buy now </button>
                                             </div>
                                             <div onClick={handleAddCard} className=' w-full'>
                                                  <button className=' text-xl text-white  py-2 rounded-sm  w-full bg-[#F59E0B] hover:bg-[#000] hover:text-white'>Add to Card</button>
                                             </div>
                                        </div>
                                        <hr className=' my-2 ' />

                                        <div>
                                             <div>
                                                  <p> Category: {data?.category}</p>
                                                  <p> Tag: {data?.tag ? data?.tag : "no tag"} </p>

                                             </div>
                                             <div className='  flex gap-5 items-center '>
                                                  <h1 className='  my-3'> Share:</h1>
                                                  <div className=' flex gap-5 items-center '>
                                                       <CiFacebook size={28} className=' text-blue-400 cursor-pointer'></CiFacebook>
                                                       <AiOutlineInstagram size={28} className=' text-[#d32bf0] cursor-pointer'></AiOutlineInstagram>
                                                       <AiOutlineTwitter size={28} className=' text-blue-600 cursor-pointer'></AiOutlineTwitter>
                                                       <AiFillLinkedin size={28} className=' text-blue-500 cursor-pointer'></AiFillLinkedin>
                                                  </div>
                                             </div>

                                             <div className=' p-2 my-4 rounded md:flex gap-8 items-center bg-[#76757569]'>
                                                  <div>
                                                       <p className=' md:mx-10'> Guaranteed safe <br />
                                                            & secure checkout</p>
                                                  </div>
                                                  <div>
                                                       <Image width={400} height={300}  src="https://weblearnbd.net/tphtml/shofy-prv/shofy/assets/img/product/icons/payment-option.png" alt="" />

                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>


                    <div>
                         <div>
                              <p className=' text-xl mt-16 font-medium text-blue-400 text-center'> Next Day Products</p>
                              <h1 className=' text-3xl font-bold text-center my-2'> Related Products</h1>
                         </div>
                         <div className=' mt-10'>
                              {
                                   <div className=' grid md:grid-cols-4  xl:grid-cols-5 gap-2'>

                                        {
                                             product?.map(item => <ProductCard key={item?._id} product={item}></ProductCard>)
                                        }

                                   </div>
                              }
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default SingleShopPage;