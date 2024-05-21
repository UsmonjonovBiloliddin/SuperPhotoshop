import React, { useEffect } from "react";
import "./Topics.scss";
import Aos from "aos";
import 'aos/dist/aos.css'
const Mavzular = ({mref}) => {
  useEffect(() =>{
    Aos.init({duration:1000})
  },[])
  return (
    <div ref={mref}>
      <div className="Topics" data-aos="fade-up">
      <div className="Topics_top">
        <div className="Topics_img">
          <img src="../images/Mavzular.png" alt="" />
        </div>
        <div className="Topics_text">
          <h1>“Super Photoshop” mavzulari</h1>
        </div>
      </div>
      <div className="Topics_boxes">
        <div className="Topics_box">
          <div className="text">
            <h3>Kirish. Photoshop asoslari</h3>
            <p>Photoshop dasturini 0 dan boshlab, barcha uskunalari, filtrlar o’rnatish va ishlash jarayonidagi layfhaklar o‘rgatiladi </p>
          </div>
          <div className="img">
            <img src="../images/01-icon.png" alt="" />
          </div>
        </div>
        <div className="Topics_box">
          <div className="text">
            <h3>Poligrafiya dizaynlari</h3>
            <p>Ushbu bo‘limda vizitka, flayer, banner va boshqa chop qilinuvchi dizaynlarni tayyorlashni o‘rganasiz</p>
          </div>
          <div className="img">
            <img src="../images/02-icon.png" alt="" />
          </div>
        </div>
        <div className="Topics_box">
          <div className="text">
            <h3>Grafik dizaynda trend</h3>
            <p>Hozirgi kunda trendga aylangan dizaynlar va effektlarni tayyorlashni o‘rganasiz</p>
          </div>
          <div className="img">
            <img src="../images/03-icon.png" alt="" />
          </div>
        </div>
        <div className="Topics_box">
          <div className="text">
            <h3>Kollajlar va surrealizm darslari</h3>
            <p>Ushbu bo‘limda bir necha rasm resurslardan foydalangan xolda ajoyib kollaj, manupulyatsiyalar o’rgatiladi</p>
          </div>
          <div className="img">
            <img src="../images/04-icon.png" alt="" />
          </div>
        </div>
        <div className="Topics_box">
          <div className="text">
            <h3>Ijtimoiy tarmoqlar uchun dizaynlar. SMM design</h3>
            <p>Instagram, facebook, telegram, youtube va boshqa ijtimoiy tarmoqlar uchun dizaynlar tayyorlashlar o’rgatilgan </p>
          </div>
          <div className="img">
            <img src="../images/05-icon.png" alt="" />
          </div>
        </div>
        <div className="Topics_box">
          <div className="text">
            <h3>Rasmlarni qayta ishlash</h3>
            <p>Rasmlarni retush qilish, ranglarni korreksiya qilish, filtrlar bilan ishlash va boshqa usullar o’rgatilgan </p>
          </div>
          <div className="img">
            <img src="../images/06-icon.png" alt="" />
          </div>
        </div>
        <div className="Topics_box">
          <div className="text">
            <h3>Mockup</h3>
            <p>Ushbu bo’limda siz tayyorlagan dizaynlaringizni mijozga chiroyli qilib taqdimoq qilish o’rgatiladi</p>
          </div>
          <div className="img">
            <img src="../images/07-icon.png" alt="" />
          </div>
        </div>
        <div className="Topics_box">
          <div className="text">
            <h3>Behance & Envato</h3>
            <p>Qanday qilib portfolio tayyorlash va Envato marketpleysiyda tayyorlagan dizaynlarni sotish o‘rgatiladi</p>
          </div>
          <div className="img">
            <img src="../images/08-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Mavzular;
