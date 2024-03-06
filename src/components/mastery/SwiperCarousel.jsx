import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Carousel from "./Carousel";

const SwiperCarousel = ({ sliderRef }) => {
  return (
    <div className="w-full overflow-visible">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={0}
        loop={true}
        speed={800}
        ref={sliderRef}
        className="mySwiperCarousel relative w-full h-full overflow-visible max-medium:pl-[5%]"
      >
        <SwiperSlide>
          <Carousel purpose="design" />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel purpose="copy" />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel purpose="conversion" />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel purpose="design" />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel purpose="copy" />
        </SwiperSlide>
        <SwiperSlide>
          <Carousel purpose="conversion" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
