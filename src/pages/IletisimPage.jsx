import React from "react";
import SiziArayalimIletisim from "../components/SiziArayalimIletisim";
import {
  FaPhoneAlt,
  FaHandPointRight,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiGamemaker } from "react-icons/si";
import Footer from "../components/Footer";
import LoopFooter from "../components/LoopFooter";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
const IletisimPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
     >
      <div className="relative mt-10">
        <img
          className="brightness-50"
          src="./images/kampanyalarImg.png"
          alt=""
        />
        <span className=" absolute left-10 sm:bottom-10 bottom-2 sm:text-4xl text-2xl text-white font-bold tracking-wider">
          İLETİŞİM
        </span>
      </div>
      <div>
        <ul className="flex items-center gap-x-5 text-sm p-10 border-b border-gray-400">
          <li>
            <a href="">Anasayfa</a>
          </li>
          <li>
            <a href="">İletişim</a>
          </li>
        </ul>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-10 items-start sm:gap-x-20 gap-x-2 sm:p-10 p-2 sm:pl-28 pl-0">
        <div className="sm:w-[50%] w-full flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold sm:text-3xl text-xl tracking-wider">
              İLETİŞİM BİLGİLERİMİZ
            </h1>
            <p className="text-gray-600 tracking-wider">
              İletişim ve Adres Bilgileri
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-y-12 gap-x-7">
            <li className="flex items-center gap-x-4">
              <div className="text-[#FFB606] text-2xl">
                <FaPhoneAlt />
              </div>
              <div className="flex flex-col tracking-wider gap-y-1">
                <span className="font-bold">Telefon</span>
                <span className="text-sm">444 3 111</span>
              </div>
            </li>

            <li className="flex items-center gap-x-4">
              <div className="text-[#FFB606] text-2xl">
                <IoMdMail />
              </div>
              <div className="flex flex-col tracking-wider gap-y-1">
                <span className="font-bold">E-Mail</span>
                <span className="text-sm">bilgi@ucuncubinyil.com</span>
              </div>
            </li>

            <li className="flex items-center gap-x-4">
              <div className="text-[#FFB606] text-2xl">
                <SiGamemaker />
              </div>
              <div className="flex flex-col tracking-wider gap-y-1">
                <span className="font-bold">Mecidiyeköy Şube</span>
                <span className="text-sm">
                  Eski Osmanlı Sokak. No:40 Kat:5 <br /> Mecidiyeköy/İstanbul
                </span>
              </div>
            </li>

            <li className="flex items-center gap-x-4">
              <div className="text-[#FFB606] text-2xl">
                <FaHandPointRight />
              </div>
              <div className="flex flex-col tracking-wider gap-y-1">
                <span className="font-bold">Adres Tarifi</span>
                <span className="text-sm">
                  {" "}
                  Mecidiyeköy Emniyet Müdürlüğü <br /> sokağına girince, 100
                  metre ileride
                </span>
              </div>
            </li>

            <li className="flex items-center gap-x-4">
              <div className="text-[#FFB606] text-2xl">
                <SiGamemaker />
              </div>
              <div className="flex flex-col tracking-wider gap-y-1">
                <span className="font-bold">Kadıköy Şube</span>
                <span className="text-sm">
                  Caferağa Mahallesi Mühürdar <br /> Caddesi No: 50 Kadıköy /
                  İstanbul
                </span>
              </div>
            </li>

            <li className="flex items-center gap-x-4">
              <div className="text-[#FFB606] text-2xl">
                <FaHandPointRight />
              </div>
              <div className="flex flex-col tracking-wider gap-y-1">
                <span className="font-bold">Adres Tarifi</span>
                <span className="text-sm">
                  {" "}
                  Akmar’ın olduğu caddede pasajın <br /> 20m yanında Burger King
                  karşısında
                </span>
              </div>
            </li>
          </ul>
          <div>
            <ul className="flex items-cente sm:justify-start justify-around sm:gap-x-10 gap-x-3 pt-10">
              <li className="border p-3 rounded-full border-[#ffb606] hover:bg-blue-400 transition-all duration-300 hover:text-white cursor-pointer hover:border-blue-400">
                <Link to="https://www.facebook.com/UcuncuBinyil/">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="border p-3 rounded-full border-[#ffb606] hover:bg-blue-400 transition-all duration-300 hover:text-white cursor-pointer hover:border-blue-400">
                <Link to="https://twitter.com/ucuncubinyil">
                  <FaTwitter />
                </Link>
              </li>
              <li className="border p-3 rounded-full border-[#ffb606] hover:bg-blue-400 transition-all duration-300 hover:text-white cursor-pointer hover:border-blue-400">
                <Link to="https://www.linkedin.com/company/ucuncubinyil/">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="border p-3 rounded-full border-[#ffb606] hover:bg-blue-400 transition-all duration-300 hover:text-white cursor-pointer hover:border-blue-400">
                <Link to="https://www.instagram.com/ucuncubinyil/">
                  <FaInstagramSquare />
                </Link>
              </li>
              <li className="border p-3 rounded-full border-[#ffb606] hover:bg-blue-400 transition-all duration-300 hover:text-white cursor-pointer hover:border-blue-400">
                <Link to="https://www.youtube.com/channel/UC4tBCMfJbRmx85X8B4xhyrg">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:w-[50%] w-full p-2">
          <div className="sm:w-[80%] w-full">
            <SiziArayalimIletisim />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-10 items-center justify-around sm:p-10">
  <div className="sm:w-[50%] w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.9911079377816!2d28.993269075977807!3d41.0691870156723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6f800b7f05d%3A0xd23adc16fdbb8ed6!2zw5zDp8O8bmPDvCBCaW55xLFsIEFrYWRlbWkgTWVjaWRpeWVrw7Z5!5e0!3m2!1str!2str!4v1700307721192!5m2!1str!2str"
      width={window.innerWidth >= 640 ? 600 : 380}
      height={window.innerWidth >= 640 ? 450 : 320}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <div className="sm:w-[50%] w-full pb-3">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96255.5630697052!2d28.91344309806753!3d41.06929110683235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9971b4336d7%3A0x212748610562a9a9!2zw5zDp8O8bmPDvCBCaW55xLFsIEFrYWRlbWkgS2FkxLFrw7Z5!5e0!3m2!1str!2str!4v1700307775005!5m2!1str!2str"
      width={window.innerWidth >= 640 ? 600 : 380}
      height={window.innerWidth >= 640 ? 450 : 320}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      <Footer />
      <LoopFooter />
    </motion.div>
  );
};

export default IletisimPage;
