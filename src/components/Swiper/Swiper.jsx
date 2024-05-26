// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
      <SwiperSlide>
      <div  class="card shop-products">
                    <div  class="card-image">
                    <img src={logo} />
                    </div>
                    <div  class="card-action accent-3 white-text">
                    <p>
                        <span>Kust Obyknovenny</span>
                    </p>
                    </div>
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  class="card shop-products">
                    <div  class="card-image">
                    <img src={img1} />
                    </div>
                    <div  class="card-action accent-3 white-text">
                    <p>
                        <span>Pinea Abies</span>
                    </p>
                    </div>
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  class="card shop-products">
                    <div  class="card-image">
                    <img src={img2} />
                    </div>
                    <div  class="card-action accent-3 white-text">
                    <p>
                        <span>Pinus Nigra</span>
                    </p>
                    </div>
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  class="card shop-products">
                    <div  class="card-image">
                    <img src={img3} />
                    </div>
                    <div  class="card-action accent-3 white-text">
                    <p>
                        <span>Pinus Pinea</span>
                    </p>
                    </div>
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  class="card shop-products">
                    <div  class="card-image">
                    <img src={img4} />
                    </div>
                    <div  class="card-action accent-3 white-text">
                    <p>
                        <span>Pseudotsuga</span>
                    </p>
                    </div>
                </div>
      </SwiperSlide>
    </Swiper>
  );
};