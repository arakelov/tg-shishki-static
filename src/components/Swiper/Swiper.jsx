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
        <svg width="100%" height="110%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="#F0F8FF" />
        
        <g id="cone" transform="translate(200, 250)">
        
            <path d="M0,150 Q-20,130 20,130 Q40,130 0,150" fill="#8B4513" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,140 Q-18,122 18,122 Q36,122 0,140" fill="#8B4513" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,130 Q-16,114 16,114 Q32,114 0,130" fill="#8B4513" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,120 Q-14,106 14,106 Q28,106 0,120" fill="#8B4513" stroke="#5E3B1F" stroke-width="0.5"/>
    
            <path d="M0,110 Q-12,98 12,98 Q24,98 0,110" fill="#A0522D" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,100 Q-10,90 10,90 Q20,90 0,100" fill="#A0522D" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,90 Q-8,82 8,82 Q16,82 0,90" fill="#A0522D" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,80 Q-6,74 6,74 Q12,74 0,80" fill="#CD853F" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,70 Q-5,66 5,66 Q10,66 0,70" fill="#CD853F" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,60 Q-4,58 4,58 Q8,58 0,60" fill="#CD853F" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,50 Q-3,50 3,50 Q6,50 0,50" fill="#D2691E" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,40 Q-2,42 2,42 Q4,42 0,40" fill="#D2691E" stroke="#5E3B1F" stroke-width="0.5"/>
            <path d="M0,30 Q-1,34 1,34 Q2,34 0,30" fill="#D2691E" stroke="#5E3B1F" stroke-width="0.5"/>
        </g>      
    
        <animateTransform xlinkHref="#cone" attributeName="transform" type="scale" 
                            from="0.2 0.2" to="1 1" begin="0s" dur="3s" fill="freeze" />
        <animateTransform xlinkHref="#cone" attributeName="transform" type="translate" 
                            from="0 250" to="0 0" begin="0s" dur="3s" fill="freeze" />

    
        <circle cx="150" cy="100" r="0" fill="#FFD700">
            <animate attributeName="r" from="0" to="5" begin="2s" dur="0.5s" repeatCount="indefinite" />
            <animate attributeName="cx" from="150" to="170" begin="2s" dur="0.5s" repeatCount="indefinite" />
            <animate attributeName="cy" from="100" to="80" begin="2s" dur="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="120" r="0" fill="#FFD700">
            <animate attributeName="r" from="0" to="5" begin="4s" dur="0.5s" repeatCount="indefinite" />
            <animate attributeName="cx" from="250" to="230" begin="4s" dur="0.5s" repeatCount="indefinite" />
            <animate attributeName="cy" from="120" to="100" begin="4s" dur="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="160" r="0" fill="#FFD700">
            <animate attributeName="r" from="0" to="5" begin="6s" dur="0.5s" repeatCount="indefinite" />
            <animate attributeName="cx" from="200" to="220" begin="6s" dur="0.5s" repeatCount="indefinite" />
            <animate attributeName="cy" from="160" to="140" begin="6s" dur="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="130" cy="180" r="0" fill="#FFD700">
            <animate attributeName="r" from="0" to="5" begin="8s" dur="0.5s" repeatCount="indefinite" />
            <animate attributeName="cx" from="130" to="150" begin="8s" dur="0.5s" repeatCount="indefinite" />
            <animate attributeName="cy" from="180" to="160" begin="8s" dur="0.5s" repeatCount="indefinite" />
        </circle>

    
        <circle cx="200" cy="120" r="0" fill="none" stroke="#00FFFF" stroke-width="2">
            <animate attributeName="r" from="0" to="80" begin="10s" dur="2s" fill="freeze" />
            <animate attributeName="opacity" from="1" to="0" begin="10s" dur="2s" fill="freeze" />
        </circle>
        </svg>
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