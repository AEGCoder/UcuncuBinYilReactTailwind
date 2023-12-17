import React, { useState, useEffect } from "react";
import SiziArayalim from "../../components/SiziArayalim";
import { useParams } from "react-router-dom";
import MakineStateSlider from "../../components/MakineStateSlider";
import axios from "axios";
import {
  FaPhoneAlt,
  FaBookmark,
  FaCube,
  FaRegUser,
  FaFileSignature,
  FaPuzzlePiece,
  FaLevelUpAlt,
  FaLanguage,
  FaCheckCircle,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiOutlineMessage, AiFillSafetyCertificate } from "react-icons/ai";
import { IoIosTime } from "react-icons/io";
import MakineAciklama from "../../components/MakineAciklama";
import MakineEgitim from "../../components/MakineEgitim";
import MakineOgrenciGorus from "../../components/MakineOgrenciGorus";
import MakineKursTarihi from "../../components/MakineKursTarihi";
import Footer from "../../components/Footer";
const MakineState = () => {
  const [state, setstate] = useState(0);
  const [MakineData, setMakineData] = useState([]);
  const { titleParams } = useParams();
  


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/MakineData.json");
        const data = response.data;
        const MakineGet = data.find(
          (makine) => makine.titleParams === titleParams
        );
        setMakineData(MakineGet);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [titleParams]);

  return (
    <div>
      <div className="relative pt-10">
        <img src="/images/FooterLoop2.png" alt="" />
        <span className=" absolute left-10 sm:bottom-10 bottom-0 sm:text-4xl text-lg text-white font-bold tracking-wider">
          MAKİNE EĞİTİMLERİ
        </span>
      </div>

      <div className="">
        <ul className="container  mx-auto flex items-center  sm:gap-x-5 gap-x-2 sm:text-sm text-xs sm:p-10 p-3  border-b border-gray-400">
          <li>
            <a href="">Anasayfa</a>
          </li>
          <li>
            <a href="">Tüm Eğitimler</a>
          </li>
          <li>
            <a href="">Makine Eğitimleri</a>
          </li>
          <li>
            <a href="">{MakineData && MakineData.title}</a>
          </li>
        </ul>
        <div className="container mx-auto flex sm:flex-row flex-col sm:gap-y-0 gap-y-10 items-start pt-14 sm:p-10 p-1">
          <div className="sm:w-[70%] w-full flex flex-col gap-y-10">
            <div>
              <h1 className="font-bold sm:text-3xl text-xl text-black">
                {MakineData && MakineData.title}
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">Kategoriler</span>
                <span>MAKİNE EĞİTİMLERİ</span>
              </div>
              <div className="flex items-center gap-x-5 sm:pr-10 pr-1">
                <FaPhoneAlt />
                <span className="text-red-500 font-bold sm:text-2xl text-sm">
                  444 3 111
                </span>
                <button className="text-gray-600 bg-[#FFB606] py-1 sm:px-5 px-3 rounded-md">
                  SİZİ ARAYALIM
                </button>
              </div>
            </div>

            <div>
              <iframe
                width={window.innerWidth >= 440 ? 800 : 370}
                height={window.innerWidth >= 640 ? 425 : 250}
                src="https://www.youtube.com/embed/tgRw4pNT4UY?si=-NDr9IXkQctlR2v_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="sm:pr-10 pr-0">
              <ul className="flex items-center justify-around">
                <li
                  onClick={() => setstate(0)}
                  className={`flex items-center gap-x-2 border-2  px-4 py-2  bg-gray-100 cursor-pointer ${
                    state === 0
                      ? "border-[#FFB607] border-b-0 bg-white border-r-0 border-l-0"
                      : ""
                  }`}
                >
                  <span className="text-[#FFB607]">
                    <FaBookmark />
                  </span>
                  <span className="tracking-tighter sm:flex hidden">
                    AÇIKLAMA
                  </span>
                </li>
                <li
                  onClick={() => setstate(1)}
                  className={`flex items-center gap-x-2 border-2  px-4 py-2  bg-gray-100 cursor-pointer ${
                    state === 1
                      ? "border-[#FFB607] border-b-0 bg-white border-r-0 border-l-0"
                      : ""
                  }`}
                >
                  <span className="text-[#FFB607]">
                    <FaCube />
                  </span>
                  <span className="tracking-tighter sm:flex hidden">
                    EĞİTİM İÇERİĞİ
                  </span>
                </li>
                <li
                  onClick={() => setstate(2)}
                  className={`flex items-center gap-x-2 border-2   px-4 py-2  bg-gray-100 cursor-pointer ${
                    state === 2
                      ? "border-[#FFB607] border-b-0 bg-white border-r-0 border-l-0"
                      : ""
                  }`}
                >
                  <span className="text-[#FFB607]">
                    <AiOutlineMessage />
                  </span>
                  <span className="tracking-tighter sm:flex hidden">
                    Öğrenci Görüşleri
                  </span>
                </li>
                <li
                  onClick={() => setstate(3)}
                  className={`flex items-center gap-x-2 border-2  px-4 py-2  bg-gray-100 cursor-pointer ${
                    state === 3
                      ? "border-[#FFB607] border-b-0 bg-white border-r-0 border-l-0"
                      : ""
                  }`}
                >
                  <span className="text-[#FFB607]">
                    <FaRegUser />
                  </span>
                  <span className="tracking-tighter sm:flex hidden">
                    KURS TARİHLERİ
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-10 items-start sm:gap-x-10 gap-x-1 border sm:p-5 p-1">
              <div className="sm:w-[60%] w-full">
                {state === 0 ? (
                  <MakineAciklama />
                ) : state === 1 ? (
                  <MakineEgitim />
                ) : state === 2 ? (
                  <MakineOgrenciGorus />
                ) : (
                  <MakineKursTarihi />
                )}
              </div>

              <div className="sm:w-[40%] w-full">
                <h1 className="font-medium text-lg tracking-wider py-5">
                  EĞİTİM ÖZELLİKLERİ
                </h1>
                <div>
                  <ul className="flex flex-col gap-y-7 font-extralight text-sm">
                    <li className="flex items-center gap-x-10 border-b pb-4">
                      <div className="flex items-center gap-x-2  w-40">
                        <span className="text-[#FFB606]">
                          <FaFileSignature />
                        </span>
                        <span>Ders Saati</span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span>{MakineData && MakineData.DersSaati}</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-x-10 border-b pb-4">
                      <div className="flex items-center gap-x-2  w-40">
                        <span className="text-[#FFB606]">
                          <FaPuzzlePiece />
                        </span>
                        <span>Kurs Süresi</span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span>{MakineData && MakineData.KursSuresi}</span>
                      </div>
                    </li>

                    <li className="flex items-center gap-x-10 border-b pb-4">
                      <div className="flex items-center gap-x-2 w-40">
                        <span className="text-[#FFB606]">
                          <IoIosTime />
                        </span>
                        <span> Başlangıç Seviyesi</span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span>Sıfır</span>
                        <span></span>
                      </div>
                    </li>

                    <li className="flex items-center gap-x-10 border-b pb-4">
                      <div className="flex items-center gap-x-2 w-40">
                        <span className="text-[#FFB606]">
                          <FaLevelUpAlt />
                        </span>
                        <span> Bitiş Seviyesi</span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span>Uzmanlık</span>
                        <span></span>
                      </div>
                    </li>

                    <li className="flex items-center gap-x-10 border-b pb-4">
                      <div className="flex items-center gap-x-2 w-40">
                        <span className="text-[#FFB606]">
                          <FaLanguage />
                        </span>
                        <span>Eğitim Garantisi</span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span>Var</span>
                        <span></span>
                      </div>
                    </li>

                    <li className="flex items-center gap-x-10 border-b pb-4">
                      <div className="flex items-center gap-x-2 w-40">
                        <span className="text-[#FFB606]">
                          <AiFillSafetyCertificate />
                        </span>
                        <span>Sertifika</span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span>Var</span>
                        <span></span>
                      </div>
                    </li>

                    <li className="flex items-center gap-x-10 border-b pb-4">
                      <div className="flex items-center gap-x-2 w-40">
                        <span className="text-[#FFB606]">
                          <FaCheckCircle />
                        </span>
                        <span>Kontenjan</span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <span>8</span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm">
                <h1>Etiketler:</h1>
                <span>
                  <a className="text-blue-400" href="#">
                    catia kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    makine kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    makina kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    makine eğitimi
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    makina eğitimi
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    makine mühendisliği kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    makina mühendisliği kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    üçüncü binyıl makine kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    üçüncü binyıl akademi makina kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    makine elit eğitim paketi
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    makina eğitim paketi
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    kadıköy makine kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    mecidiyeköy makine kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    autocad kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    solidworks kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    solid kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    siemens nx kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    ansys kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    fluent cfd kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    matlab kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    solidworks cam kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    cnc kursu
                  </a>
                  ,
                </span>
                <span>
                  <a className="text-blue-400" href="#">
                    makine mühendislerinin öğrenmesi gereken programlar
                  </a>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-x-5">
              <span className="font-bold">Paylaş:</span>
              <span className="border-2 rounded-full p-2">
                <FaWhatsapp />
              </span>
              <span className="border-2 rounded-full p-2">
                {" "}
                <FaFacebook />
              </span>
              <span className="border-2 rounded-full p-2">
                {" "}
                <FaTwitter />
              </span>
              <span className="border-2 rounded-full p-2">
                {" "}
                <FaLinkedinIn />
              </span>
            </div>

            <div>
              <h1 className="sm:text-3xl text-xl font-bold tracking-wide">
                ŞUNLARI DA SEVEBİLİRSİNİZ
              </h1>
            </div>

            <div className="sm:mt-0 mt-10">
              <MakineStateSlider />
            </div>
          </div>
          <div className="sm:w-[30%] w-full sm:pl-4 pl-1">
            <SiziArayalim />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MakineState;
