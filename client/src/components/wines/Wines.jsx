import "./wines.css";
import Wine from "../wine/Wine";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Wines({ wines }) {
  return (
    <div className="winesmain">
      <h3>
        <b>
          Take Your Time and Enjoy the Taste of the <br />
          World of Wines
        </b>
      </h3>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        speed={800}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {wines.map((w) => (
          <SwiperSlide className="swiperSlide" key={w._id}>
            <Wine wine={w} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Wines;
