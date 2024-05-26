// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Swiper.css'
import logo from '../../images/bush.png';
import img1 from '../../images/picea_abies.png';
import img2 from '../../images/pinus_nigra.png';
import img3 from '../../images/pinus_pinea.png';
import img4 from '../../images/pseudotsuga.png';

import { Pagination } from 'swiper/modules';

export default () => {
  return (
    <Swiper pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}>
      <SwiperSlide><img src={img1} /></SwiperSlide>
      <SwiperSlide><img src={img2} /></SwiperSlide>
      <SwiperSlide><img src={img3} /></SwiperSlide>
      <SwiperSlide><img src={img4} /></SwiperSlide>
      <SwiperSlide><img src={logo} /></SwiperSlide>
    </Swiper>
  );
};