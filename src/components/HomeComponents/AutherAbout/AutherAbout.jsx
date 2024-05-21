import React, { Fragment, useEffect } from "react";
import "./AutherAbout.scss";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";


const AutherAbout = ({ aref }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div ref={aref}>
      <div className="Autherabout" data-aos="fade-up">
        <div className="AutherAbout_text">
          <h3>Muallif haqida</h3>
          <p>
            Sardor Qodirov 2014 yili TATU Farg’ona filiali magistratura
            bitiruvchisi, 2014-2018 yillar davomida universitetda “Kompyuter
            grafikasi” va “Kreativ loyihalash” fanlaridan talabalarga ta’lim
            bergan.
          </p>
          <p>
            Hozirda <Link>faraway.com</Link> kompaniyasida UX/UI dizayner va
            Envato kompaniyasining <Link>videohive.net</Link> marketpleysida
            faoliyat yuritadi.
          </p>
          <p>
            Dizaynlarni jahon bozorida sotish va chet el kompaniyalarida
            frilanserlik bo’yicha katta tajribaga ega.
          </p>
          <div className="theGoal">
            <div className="theGoal_img">
              <img src="../images/headerMe 7.png" alt="" />
            </div>
            <div className="theGoal_Text">
              <i>
                “Siz ham ushbu bilimlarni o’zlashtirib, hayotda reja qilgan
                maqsadlaringizga erishishingizni xohlayman”
              </i>
            </div>
          </div>
        </div>
        <div className="AutherAbout_img">
          <img src="../images/About.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AutherAbout;
