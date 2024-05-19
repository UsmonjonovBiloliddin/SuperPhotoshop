import { HomeThoughts_media } from "../../..";
import "./Thoughts.scss";

const Thoughts = () => {
  return (
    <>
      <div className="Thoughts">
        <div className="Thoughts_text">
          <h3>O‘quvchilar fikri</h3>
        </div>
        <div className="Thoughts_boxes">
          <div className="Thoughts_box">
            <div className="img">
              <img src="/public/images/Ellipse 7.png" alt="" />
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
          <div className="Thoughts_box">
            <div className="img">
              <img src="/public/images/Ellipse 72.png" alt="" />
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
          <div className="Thoughts_box">
            <div className="img">
              <img src="/public/images/Ellipse 7 (1).png" alt="" />
            </div>
            <div className="thoughts">
              <p>
                Darsni bergan bilimiga nisbatan narxi arzon o'ylanmasdan sotib
                olishga arziydi sifatli va zo'r.
              </p>
              <h4>Begzod Yaxshilikov</h4>
            </div>
          </div>
          <div className="Thoughts_box">
            <div className="img">
              <img src="/public/images/04-testi-icon-avatar.png" alt="" />
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
          <div className="Thoughts_box">
            <div className="img">
              <img src="/public/images/04-testi-icon-avatar.png" alt="" />
            </div>
            <div className="thoughts">
              <p>
                Ajoyib. Men bu video darslikni sotib oldim va men buning uchun
                afsuslanmayman. Barchaga tavsiya qilaman
              </p>
              <h4>Asadbek Tilepov</h4>
            </div>
          </div>
          <div className="Thoughts_box">
            <div className="img">
              <img src="/public/images/04-testi-icon-avatar.png" alt="" />
            </div>
            <div className="thoughts">
              <p>
                Bu darsni albatta sotib oling chunkiy mukammal darajada siz bu
                darslardan o'zingiz o'rgana olasiz va darslar hammaga mos va
                qulay darajada ishlangan
              </p>
              <h4>Imomali Boltaboyev</h4>
            </div>
          </div>
        </div>
        <div className="Thoughts_media">
          <HomeThoughts_media />
        </div>
      </div>
      
    </>
  );
};

export default Thoughts;
