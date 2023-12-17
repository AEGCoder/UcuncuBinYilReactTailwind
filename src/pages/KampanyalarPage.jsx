import React from "react";
import SiziArayalim from "../components/SiziArayalim";
import { Collapse } from "antd";
import Slider from "react-slick";
import Footer from "../components/Footer";
import LoopFooter from "../components/LoopFooter";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import {motion} from "framer-motion";

const KampanyalarPage = () => {

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025, maxWidth: 1279 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1280 });

  const kurumFoto = [
    {
      id: 1,
      img: "https://www.ucuncubinyil.com/wp-content/uploads/2020/07/makine-kurslar%C4%B1-banner-450x300.jpg",
      title: "Makine Eğitimleri ",
    },
    {
      id: 2,
      img: "https://www.ucuncubinyil.com/wp-content/uploads/2020/07/yazilim-kategori-background-450x300.jpg",
      title: "Yazılım Eğitimleri",
    },
    {
      id: 3,
      img: "https://www.ucuncubinyil.com/wp-content/uploads/2020/07/in%C5%9Faat-m%C3%BChendisli%C4%9Fi-kurslar%C4%B1-450x300.jpg",
      title: "inşaat Eğitimleri",
    },
    {
      id: 4,
      img: "https://www.ucuncubinyil.com/wp-content/uploads/2020/07/mimarl%C4%B1k-kurslar%C4%B1-banner-450x300.jpg",
      title: "Mimari Eğitimleri",
    },
    {
      id: 5,
      img: "https://www.ucuncubinyil.com/wp-content/uploads/2020/07/elektrik-banner-450x300.jpg",
      title: "PLC Elektrik Elektronik Eğitimleri",
    },
    {
      id: 6,
      img: "https://www.ucuncubinyil.com/wp-content/uploads/2020/07/mesleki-bili%C5%9Fim-kurslar%C4%B1-450x300.jpg",
      title: " Mesleki Bilişim Eğitimleri",
    },
    {
      id: 7,
      img: "https://www.ucuncubinyil.com/wp-content/uploads/2020/07/grafik-animasyon-banner-450x300.jpg",
      title: "Grafik, Web, Video ve Animasyon Eğitimleri",
    },
  ];

  function SampleNextArrow({ onClick }) {
    return (
      <div>
        <BiChevronRight
          className="text-3xl h-full group cursor-pointer border-2 font-bold opacity-0 group-hover:opacity-100  hover:bg-[#FFB606] transition-all duration-300 hover:text-white  absolute top-16   -right-0 text-black transform -translate-y-1/2 z-40"
          onClick={onClick}
        />
      </div>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <div>
        <BiChevronLeft
          className="text-3xl group cursor-pointer h-full hover:bg-[#FFB606] transition-all group-hover:opacity-100  opacity-0 hover:text-white font-bold duration-300   border-2  text-black  absolute top-16  -left-0 transform -translate-y-1/2 z-40"
          onClick={onClick}
        />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 2 : isTablet ? 3 : isDesktop ? 4 : 5,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        onClick={() => {
          setCurrentSlide(currentSlide + 1);
          setPreviewSlide(currentSlide + 1);
        }}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        onClick={() => {
          setCurrentSlide(currentSlide - 1);
          setPreviewSlide(currentSlide - 1);
        }}
      />
    ),
  };

  const items = [
    {
      key: "1",
      label: "Eğitimlerin hepsine aynı anda katılmak zorunda mıyım?",
      children: (
        <p>
          Hayır. İster aralıklı zamanlarda isterseniz aynı anda eğitimlerinize
          başlayabilirsiniz.
        </p>
      ),
    },
    {
      key: "2",
      label:
        "Eğitimlere başlamakla ilgili hergangi bir süre kısıtlaması var mı?",
      children: (
        <p>
          Hayır. Aldığınız eğitimleri kurs takvimimizin durumuna göre
          istediğiniz zaman alabilirsiniz.
        </p>
      ),
    },
    {
      key: "3",
      label:
        "Ücretsiz eğitimlerden tercih yaparken herhangi bir kısıtlama var mı?",
      children: (
        <p>
          Hayır. Herhangi bir kısıtlama olmadan istediğiniz eğitimlerimize kayıt
          olabilirsiniz.
        </p>
      ),
    },
    {
      key: "4",
      label:
        "Ücretsiz eğitimlerden hangisine kayıt olacağıma sonradan karar verebilir miyim?",
      children: (
        <p>
          Evet. Ücretsiz eğitimlerinizi tercih ederken herhangi bir zaman
          kısıtlaması yok.
        </p>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, translateX: 30 }}
      animate={{ opacity: 1 , translateX:0 }}
      exit={{ opacity: 0 }}
      transition={{duration:0.5}}
    >
      <div className="relative mt-10">
        <img className="brightness-50 h-[10rem] sm:h-[25rem] w-full" src="./images/kampanyalarImg.png" alt="" />
        <span className=" absolute left-10 bottom-10 sm:text-4xl text-2xl text-white font-bold tracking-wider">
          2 + 1 KAMPANYASI
        </span>
      </div>
      <div>
        <ul className="flex items-center gap-x-5 text-sm p-10 border-b border-gray-400">
          <li>
            <a href="">Anasayfa</a>
          </li>
          <li>
            <a href="">2 + 1 Kampanyası</a>
          </li>
        </ul>
      </div>

      <div className="w-full sm:flex-row flex-col sm:gap-y-0 gap-y-10 flex gap-x-10 items-start  mt-10 sm:px-10 px-1 pb-10">
        <div className="sm:w-[35%] w-full">
          <SiziArayalim />
        </div>
        <div className=" sm:w-[75%] w-full">
          <div>
            <img
              src="https://www.ucuncubinyil.com/wp-content/uploads/2020/10/21_01.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-10">
            <h1 className="text-2xl font-bold">
              ÜÇÜNCÜ BİNYIL FARKIYLA SİZ DE GELECEĞİNİZİ TASARLAYIN!
            </h1>
            <p className="text-lg">
              2 adet eğitim aldığınız takdirde istediğiniz herhangi 1 eğitime
              daha ÜCRETSİZ kayıt olabilirsiniz.
            </p>
            <p className="text-lg">
              Eğer sizler de rakiplerinizin önüne geçip daha donanımlı bir
              çalışan olmak istiyorsanız, kurumumuza gelerek, alanınızla ilgili
              eğitimlerden faydalanabilirsiniz.
            </p>
          </div>
          <div>
            <Collapse defaultActiveKey={["1"]} ghost items={items} />
          </div>
          <ul className="w-full h-[150px] mt-20 group transition-all duration-300">
            <Slider {...settings}>
              {kurumFoto.map((item) => (
                <li className="relative" key={item.id}>
                  <div className="flex items-center justify-center relative">
                    <img
                      className="w-32 h-32 rounded-md object-cover brightness-50"
                      src={item.img}
                      alt=""
                    />
                    <span className="text-xs font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {item.title}
                    </span>
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
          <div className="mt-10 pl-5 border-b pb-10">
            <h1 className="text-2xl font-medium pb-10">NEDEN ÜÇÜNCÜ BİNYIL?</h1>
            <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-start justify-between">
              <div className="sm:w-[50%] w-full rounded-md">
                <img className="w-[90%] rounded-md" src="https://www.ucuncubinyil.com/wp-content/uploads/2020/06/solidworks-ucuncubinyil.jpg" alt="" />
              </div>
              <div className="flex flex-col gap-y-2 text-base sm:w-[50%] w-[90%] tracking-widest">
                <p>13 yıldır sektöre hazır hale getirdiği yüzlerce öğrencisinin referansları ile teknik eğitimde marka haline gelmiş olan Üçüncü Binyıl, öğrencileri sıfırdan alıp, ileri sektörel uygulamalarla, üst düzey eğitimler verir.</p>
                <p>Mühendislik Yazılım programlarının eğitiminde uzmanlaşmış, sektörüyle alakalı birçok eğitimi Türkiye’de ilk defa vermeye başlayan öncü kurumdur. Sektörde sertifika ve bilinirliği en yüksek olan kurumdur. İleri düzey uygulamalar ile öğrencilerini sektör hazır hale getirir. Ford, TAI, TEI, Mercedes Benz, THY Teknik, Kale Havacılık, Baykar Makina önemli referanslarından bazılarıdır. YTÜ, İTÜ başta olmak üzere, Mühendislik ve Mimarlık öğrencilerinin en çok tercih ettiği kurumdur.</p>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <img className="w-full" src="https://www.ucuncubinyil.com/wp-content/uploads/2020/06/banner-kampanya.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
      <LoopFooter />
    </motion.div>
  );
};

export default KampanyalarPage;
