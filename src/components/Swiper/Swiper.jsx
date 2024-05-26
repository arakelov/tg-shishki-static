// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css'
import logo from '../../images/bush.png';

import { Pagination } from 'swiper/modules';

export default () => {
  return (
    <Swiper pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}>
      <SwiperSlide><div class="green-rectangle">
    <div class="brown-rectangle"><p>Shishka 1</p></div>
  </div></SwiperSlide>
      <SwiperSlide><div class="green-rectangle">
    <div class="brown-rectangle"><p>Shishka 2</p></div>
  </div></SwiperSlide>
      <SwiperSlide><div class="green-rectangle">
    <div class="brown-rectangle"><p>Shishka 3</p></div>
  </div></SwiperSlide>
      <SwiperSlide><div class="green-rectangle">
    <div class="brown-rectangle"><p>Shishka 4</p></div>
  </div></SwiperSlide>
      <SwiperSlide><img src={logo} /></SwiperSlide>
    </Swiper>
  );
};