
import Container from '@/Component/Container';
import PeoplerSinglePage from '@/Component/SwiperSliderPeopler/page';

import React from 'react';

const PeoplePage = () => {
     return (
          <Container>
               <div className=' my-10 py-10 '>
                    <h2 className='  text-center  text-2xl font-normal my-2'> From The People</h2>

                    <div  className=' my-10'>
                         <PeoplerSinglePage></PeoplerSinglePage>
                    </div>
               </div>
          </Container>

     );
};

export default PeoplePage;