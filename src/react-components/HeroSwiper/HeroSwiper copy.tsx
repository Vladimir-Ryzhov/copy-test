import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Parallax } from "swiper/modules";
import { slides } from "../../data/slidesData";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./HeroSwiper.module.scss";
import clsx from "clsx";
import type { SwiperOptions } from "swiper/types";

const parallaxParams: SwiperOptions = {
  //   speed: 800,
};

export default function HeroSwiper() {
  return (
    <Swiper
      modules={[Navigation, Parallax]}
      navigation={true}
      loop={true}
      grabCursor={true}
      draggable={true}
      parallax={true}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={styles.slide}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className={clsx(styles.text, styles.container)}>
              <h5 className={styles.subtitle} data-swiper-parallax="-200">
                {slide.subtitle}
              </h5>
              <h2 className={styles.title} data-swiper-parallax="-300">
                {slide.title}
              </h2>
              <p className={styles.description} data-swiper-parallax="-400">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
