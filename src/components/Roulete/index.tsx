import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import { Box } from "@chakra-ui/react";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { RouleteItem } from "./RouleteItem";

export function Carousel() {
  return (
    <Box mt="12" mb="8">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <RouleteItem
            image="/continenteeuropeu.png"
            title="Europa"
            description="O continente mais antigo."
          />
        </SwiperSlide>
        <SwiperSlide>
          <RouleteItem
            image="/america-norte.jpg"
            title="América do Norte"
            description="O continente mais moderno."
          />
        </SwiperSlide>
        <SwiperSlide>
          <RouleteItem
            image="/america-sul.jpg"
            title="América do Sul"
            description="O continente mais tropical."
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
