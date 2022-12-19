import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import {
  pro1,
  pro2,
  pro3,
  pro4,
  pro1Thum,
  pro2Thum,
  pro3Thum,
  pro4Thum,
} from "./imports";
import Image from "next/image";

const CarouselProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <div className="desktopSize">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image src={pro1} alt="product1"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pro2} alt="product1"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pro3} alt="product1"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pro4} alt="product1"></Image>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper hide"
      >
        <SwiperSlide>
          <Image src={pro1Thum} alt="thubnail"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pro2Thum} alt="thubnail"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pro3Thum} alt="thubnail"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pro4Thum} alt="thubnail"></Image>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
