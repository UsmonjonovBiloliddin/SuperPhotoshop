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
                Albatta men ham Super Fotoshopni sotib olganman haqiqatdan ham 0
                dan boshlayotgan odam o'rganib ketish darajasi yuqori, sababi
                har bir termin, har bir uskunalar va ularning nima ishlashi,
                qanday vaqtda ishlatilishi to'liq tushuntirilgan
              </p>
              <h4>Djanibek Amanbaev</h4>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="Thoughts_box">
            <div className="img">
              <img src="../images/Ellipse 72.png" alt="" />
            </div>
            <div className="thoughts">
              <p>
                Ajoyib video dars, Nomiga mos Super. Bu darsni albatta sotib
                oling, chunki mukammal darajada. Siz bu darslardan o'zingiz
                o'rgana olasiz va darslar hammaga mos va qulay darajada
                ishlangan.
              </p>
              <h4>Shukurullo Tojinazarov</h4>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="Thoughts_box">
            <div className="img">
              <img src="../images/Ellipse 7 (1).png" alt="" />
            </div>
            <div className="thoughts">
              <p>
                Darsni bergan bilimiga nisbatan narxi arzon o'ylanmasdan sotib
                olishga arziydi sifatli va zo'r.
              </p>
              <h4>Begzod Yaxshilikov</h4>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="Thoughts_box">
            <div className="img">
              <img src="../images/04-testi-icon-avatar.png" alt="" />
            </div>
            <div className="thoughts">
              <p>
                Bunaqa kursdan ortiq hech narsa kerak emas, maqsadi bor odamga!
                Aniqroq maqsad bo'masa bundan zo'r kursni ham foydasi tegmaydi.
                Sardor aka raxmat!!
              </p>
              <h4>Nodir Tukhtaboev</h4>
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
