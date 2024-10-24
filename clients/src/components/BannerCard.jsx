import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './card.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function BannerCard() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/814L+vq01mL._AC_UF1000,1000_QL80_.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/61xkT+AmAcL._AC_UF1000,1000_QL80_.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/71g6xyjw8IL._AC_UF1000,1000_QL80_.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://images.blinkist.io/images/books/60140e9d6cee070007f4833a/1_1/470.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/516ADtnYxeL._AC_UF1000,1000_QL80_.jpg" /></SwiperSlide>
        <SwiperSlide><img src="" /></SwiperSlide>
        <SwiperSlide><img src="" /></SwiperSlide>
        <SwiperSlide><img src="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
