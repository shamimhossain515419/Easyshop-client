const Container = ({ children }) => {
     return (
          <div className=" max-w-[2000px] mx-auto md:mx-11 px-2 sm:px-4 md:px-14 lg:px-20 xl:px-28 2xl:px-36 ">
               <div>
                    {children}
               </div>
          </div>
     );
};

export default Container;