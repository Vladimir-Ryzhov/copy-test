import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./HeroSwiper.module.scss";
import clsx from "clsx";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function HeroSwiper() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const slides = [
    {
      id: 1,
      image: "/assets/images/home/protectino_home_slider_1.jpg",
      subtitle: "PROTECTINO 4KIDS",
      title: (
        <>
          Willkommen bei <span className={styles.aprikot}>Protec</span>
          <span className={styles.accent}>tino</span>
        </>
      ),
      description: (
        <>
          <span className={styles.accent}>Schutzengel 4kids</span> – ein treuer
          Begleiter auf dem Weg Deines Kindes. <br />
          Der Löwe mit Engelsflügeln steht für{" "}
          <span className={styles.accent}>Geborgenheit</span>,{" "}
          <span className={styles.accent}>Vertrauen</span> und ein{" "}
          <span className={styles.accent}>sicheres Gefühl</span> – für Kinder
          und ihre Eltern.
        </>
      ),
    },
    {
      id: 2,
      image: "/assets/images/home/protectino_home_slider_2.jpg",
      subtitle: "PROTECTINO 4KIDS",
      title: (
        <>
          Dein <span className={styles.aprikot}>Schutzengel</span>
          <span className={styles.accent}>4Kids!</span>
        </>
      ),
      description: (
        <>
          Eltern tragen <span className={styles.accent}>Verantwortung</span> –
          und möchten ihr Kind{" "}
          <span className={styles.accent}>bestmöglich absichern,</span> heute
          und
          <span className={styles.accent}>langfristig.</span> Unsere individuell
          abgestimmten Konzepte bieten genau den{" "}
          <span className={styles.accent}>Schutz,</span> den Deine Familie
          braucht.
        </>
      ),
    },
    {
      id: 3,
      image: "/assets/images/home/protectino_home_slider_3.jpg",
      subtitle: "PROTECTINO 4KIDS",
      title: (
        <>
          <>
            Frühzeitig <span className={styles.aprikot}>vor</span>
            <span className={styles.accent}>sorgen</span>
          </>
        </>
      ),
      description: (
        <>
          Je früher der <span className={styles.accent}>Schutz</span> beginnt,
          desto sicherer ist der{" "}
          <span className={styles.accent}>Weg in die Zukunft.</span>
          Mit unseren{" "}
          <span className={styles.accent}>
            individuellen Vorsorgekonzepten
          </span>{" "}
          hilfst Du Deinem Kind, von Anfang an{" "}
          <span className={styles.accent}>
            gut abgesichert ins Leben zu starten
          </span>{" "}
          – heute, morgen und ein Leben lang.
        </>
      ),
    },
  ];

  return (
    <Swiper
      parallax={true}
      modules={[EffectCreative, Parallax, Navigation]}
      effect={"creative"}
      creativeEffect={{
        prev: {
          translate: ["-100%", 0, 1],
        },
        next: {
          translate: ["50%", 0, -1],
        },
      }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        if (typeof swiper.params.navigation !== "boolean") {
          const navigation = swiper.params.navigation as any;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;
        }
      }}
      breakpoints={{
        768: {
          navigation: {
            enabled: true,
          },
        },
        0: {
          navigation: {
            enabled: false,
          },
        },
      }}
      loop
      speed={800}
      className={styles.mySwiper}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={styles.slide}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${slide.image})`,
            }}
          >
            <div className={clsx(styles.slideInner, styles.container)}>
              <h5 className={styles.subtitle} data-swiper-parallax="200">
                {slide.subtitle}
              </h5>
              <h2 className={styles.title} data-swiper-parallax="300">
                {slide.title}
              </h2>
              <p className={styles.description} data-swiper-parallax="400">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className={styles.buttons}>
        <button ref={prevRef} className={styles.prevBtn}>
          <IoIosArrowBack size={25} />
        </button>
        <button ref={nextRef} className={styles.nextBtn}>
          <IoIosArrowBack size={25} />
        </button>
      </div>
    </Swiper>
  );
}
