import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://dji-official-fe.djicdn.com/cms/uploads/028360d8d670123687db11a9870c8400@origin.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dji-official-fe.djicdn.com/cms/uploads/c0ade5a0121a0995f9496e832596e128.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dji-official-fe.djicdn.com/cms/uploads/3e6e37ab06f20116bcad351c0c622bc8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://dji-official-fe.djicdn.com/cms/uploads/249cf2fdd8c448a5125bc83eaa259393.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
