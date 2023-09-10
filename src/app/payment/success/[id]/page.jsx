import Link from "next/link";


const page = ({ params }) => {
     return (
          <div>
               <div className='   flex   flex-col gap-6 justify-center  items-center  h-screen'>
                    <h1 className=" text-3xl text-center  ">Tranjection Id:  {params?.id} </h1>
                    <h1 className=' text-2xl md:text-3xl  2xl:text-6xl font-bold text-blue-600'>   Payment Success  </h1>
                    <div className=' px-2 py-2 rounded-xl  text-center mx-auto bg-[#474ae6]'>
                         <Link className='' href={'/'}> Go To home page</Link>
                    </div>
               </div>
          </div>
     );
};

export default page;