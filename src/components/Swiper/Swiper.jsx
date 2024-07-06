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
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="180" width="200" height="20" fill="#8B4513" />
        <circle cx="100" cy="180" r="5" fill="#8B4513">
            <animate attributeName="cy" from="180" to="150" begin="0s" dur="2s" fill="freeze" />
            <animate attributeName="r" from="5" to="0" begin="2s" dur="0.5s" fill="freeze" />
        </circle>
        <rect x="98" y="150" width="4" height="0" fill="#228B22">
            <animate attributeName="height" from="0" to="50" begin="2.5s" dur="2s" fill="freeze" />
        </rect>
        <path d="M100,150 C90,140 80,140 70,150" fill="none" stroke="#228B22" stroke-width="2">
            <animate attributeName="d" values="M100,150 C100,150 100,150 100,150; M100,150 C90,140 80,140 70,150" 
                    begin="4.5s" dur="1s" fill="freeze" />
        </path>
        <path d="M100,140 C110,130 120,130 130,140" fill="none" stroke="#228B22" stroke-width="2">
            <animate attributeName="d" values="M100,140 C100,140 100,140 100,140; M100,140 C110,130 120,130 130,140" 
                    begin="4.5s" dur="1s" fill="freeze" />
        </path>
        </svg>
      </SwiperSlide>
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