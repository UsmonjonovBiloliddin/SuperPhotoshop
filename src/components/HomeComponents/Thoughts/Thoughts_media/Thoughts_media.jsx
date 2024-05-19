import {
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Thoughts_media.scss";
const Thoughts_media = () => {
  return (
    <>
      <div className="Thoughts_media">
        <Swiper
          modules={[Pagination, Autoplay, Scrollbar, A11y]}
          pagination={{ clickable: true, el: ".header_swiper_pagination" }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="Thoughts_box">
              <div className="img">
                <img src="../images/Ellipse 7.png" alt="" />
              </div>
              <div className="thoughts">
                <p>
                  Albatta men ham Super Fotoshopni sotib olganman haqiqatdan ham
                  0 dan boshlayotgan odam o'rganib ketish darajasi yuqori,
                  sababi har bir termin, har bir uskunalar va ularning nima
                  ishlashi, qanday vaqtda ishlatilishi to'liq tushuntirilgan
                </p>
                <h4>Djanibek Amanbaev</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Thoughts_box">
              <div className="img">
                <img src="../images/Ellipse 7.png" alt="" />
              </div>
              <div className="thoughts">
                <p>
                  Albatta men ham Super Fotoshopni sotib olganman haqiqatdan ham
                  0 dan boshlayotgan odam o'rganib ketish darajasi yuqori,
                  sababi har bir termin, har bir uskunalar va ularning nima
                  ishlashi, qanday vaqtda ishlatilishi to'liq tushuntirilgan
                </p>
                <h4>Djanibek Amanbaev</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Thoughts_box">
              <div className="img">
                <img src="../images/Ellipse 7.png" alt="" />
              </div>
              <div className="thoughts">
                <p>
                  Albatta men ham Super Fotoshopni sotib olganman haqiqatdan ham
                  0 dan boshlayotgan odam o'rganib ketish darajasi yuqori,
                  sababi har bir termin, har bir uskunalar va ularning nima
                  ishlashi, qanday vaqtda ishlatilishi to'liq tushuntirilgan
                </p>
                <h4>Djanibek Amanbaev</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Thoughts_box">
              <div className="img">
                <img src="../images/Ellipse 7.png" alt="" />
              </div>
              <div className="thoughts">
                <p>
                  Albatta men ham Super Fotoshopni sotib olganman haqiqatdan ham
                  0 dan boshlayotgan odam o'rganib ketish darajasi yuqori,
                  sababi har bir termin, har bir uskunalar va ularning nima
                  ishlashi, qanday vaqtda ishlatilishi to'liq tushuntirilgan
                </p>
                <h4>Djanibek Amanbaev</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="header_swiper_pagination"></div>
    </>
  );
};

export default Thoughts_media;
