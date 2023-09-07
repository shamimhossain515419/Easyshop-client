


import DashboardNavbarPage from '@/Component/dashboardNavbar/page';
import { FaBars } from 'react-icons/fa';


const DashboardLayout = ({ children }) => {
 
     return (
          <div className=' mt-10 w-full'>
               <div className=" p-3 xl:px-4">
                    <div className=" flex gap-3  ">
                         <div className=" hidden md:block mt-5 bg-[#aca6a696] md:h-[85vh] md:p-2 md:min-w-[300px] xl:min-w-[350px]">
                              <div className=' '>
                                   <DashboardNavbarPage></DashboardNavbarPage>
                              </div>

                         </div>

                         <div className=" w-full overflow-hidden   mx-auto mt-2 ">
                              <div  className=' md:hidden   cursor-pointer'>
                                   <FaBars size={24} ></FaBars>
                              </div>

                              {children}

                         </div>
                    </div>
               </div>
               {/* {
                    Open ? <> <div className=" fixed top-1 z-50 p-2 md:hidden  shadow-md  bg-[#ffff] h-[85vh]">
                         <div className=' '>
                              <DashboardNavbarPage setOpen={setOpen}></DashboardNavbarPage>
                         </div>

                    </div></> : <></>
               } */}
          </div >
     );
};

export default DashboardLayout;