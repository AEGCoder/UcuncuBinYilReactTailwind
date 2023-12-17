import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import {Input } from "antd";
import Footer from "../components/Footer";
import LoopFooter from "../components/LoopFooter";
import { FaThLarge } from "react-icons/fa";
import { CiBoxList,CiSearch } from "react-icons/ci";
import SiziArayalim from "../components/SiziArayalim";
import {Link} from "react-router-dom";
import debounce from "lodash.debounce";

const ElektrikElektronik = () => {
  const [search, setSearch] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const [makineEgitimleri, setMakineEgitimleri] = useState([]);
  const itemsPerPage = 15;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = search
    ? makineEgitimleri.slice(0, itemsPerPage)
    : makineEgitimleri.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(makineEgitimleri.length / itemsPerPage);

  const debouncedFilterByTitle = debounce(async (title) => {
    try {
      const response = await axios.get("/ElektrikElektronikData.json");
      const filteredProducts = response.data.filter(
        (product) => product.title.toLowerCase().includes(title.toLowerCase())
      );
      setMakineEgitimleri(filteredProducts);
      setItemOffset(0); // Reset pagination to the first page
    } catch (error) {
      console.log(error);
    }
  }, 300);

  const handlePageClick = (selectedItem) => {
    const newOffset = (selectedItem * itemsPerPage) % makineEgitimleri.length;
    console.log(
      `User requested page number ${selectedItem}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const fetchMakineEgitimleri = async () => {
      const response = await axios.get("/ElektrikElektronikData.json");
      const data = response.data;
      setMakineEgitimleri(data);
    };
    fetchMakineEgitimleri();
  }, []);

  return (
    <div className="w-full pt-10">
      <div className="relative">
        <video
          src="./videos/PLCVideo.mp4"
          className=" h-full w-full rounded-sm"
          autoPlay
          loop
          muted
        ></video>
        <span className=" absolute left-10 sm:bottom-10 bottom-0 sm:text-4xl text-xl text-white font-bold tracking-wider">
        PLC ELEKTRİK ELEKTRONİK EĞİTİMLERİ
        </span>
      </div>
      <div>
        <ul className="flex items-center sm:gap-x-5 gap-x-1 sm:text-base text-xs sm:p-10 py-4 border-b border-gray-400">
          <li>
            <a href="">Anasayfa</a>
          </li>
          <li>
            <a href="">Tüm Eğitimler</a>
          </li>
          <li>
            <a href="">PLC Elektrik Elektronik Eğitimleri</a>
          </li>
        </ul>
      </div>

      <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-10 items-start sm:gap-x-5 gap-x-3 sm:p-10 p-1">
        {/* -----------------left component------------------- */}
        <div className="sm:w-[80%] w-full">
          <div className="bg-gray-100 h-[50px] my-10 sm:w-[94%] w-full flex items-center justify-between px-5">
            <div className="flex items-center sm:gap-x-5 gap-x-2">
              <div className="flex items-center sm:gap-x-2 gap-x-1">
               <button className="hover:text-[#ffb606] transition-all duration-300"><FaThLarge className="text-xl" /></button>
              <button className="hover:text-[#ffb606] transition-all duration-300"><CiBoxList className="text-xl" /></button>
              </div>
              <div><p className="text-sm sm:flex hidden">1 sonucun 15-50 kadarı gösteriliyor</p></div>
            </div>
            <div className="relative sm:w-[17rem] w-full">
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            debouncedFilterByTitle(e.target.value);
          }}
          size="large"
          placeholder="Eğitimlerimizi arayın..."
        />
        <span className="absolute right-2 top-[25%]">
          <CiSearch className="text-xl" />
        </span>
      </div>
          </div>
          <>
            <ul className="grid sm:grid-cols-3 grid-cols-1 gap-y-10 pl-8 sm:pl-0">
              {currentItems.map((kurs) => (
                <Link key={kurs.id} to={`/plc/${kurs.titleParams}`}>
                <li key={kurs.id}>
                  <div className="border-2 relative shadow-sm p-2 h-[360px] w-[290px]">
                    <div className="w-full h-[50%] relative group">
                      <img
                        className="w-full h-full object-cover hover:scale-95 transition-all duration-500 cursor-pointer"
                        src={kurs.img}
                        alt=""
                      />
                      <button className="bg-[#FFB606] text-gray-500 font-bold py-2 px-6 rounded-md absolute top-[35%] left-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        Daha Fazlası
                      </button>
                    </div>
                    <div className="w-full h-[50%] flex flex-col items-center justify-center">
                      <div>
                        <span>{kurs.minTitle} </span>
                      </div>
                      <div className="font-normal flex items-center justify-center text-center sm:text-sm text-xs  tracking-wide h-[60px]">
                        <p> {kurs.title} </p>
                      </div>
                      <div className="border-b-2 w-[80%] pt-5 relative">
                        <div className="border-b-2 border-yellow-400 w-[20%] absolute left-[40%]"></div>
                      </div>
                    </div>
                    <div className="absolute top-[45%] left-[45%]">
                      <img
                        className="w-10 h-10 object-cover"
                        src={kurs.logo}
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                </Link>
              ))}
            </ul>
            <ReactPaginate
              className="flex items-center gap-x-3 mt-10 ml-10"
              breakLabel="..."
              nextLabel=">"
              onPageChange={(event) => handlePageClick(event.selected)}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              activeClassName="active"
              pageClassName="pagination-item"
              previousClassName="pagination-previous"
              nextClassName="pagination-next"
              previousLinkClassName="pagination-previous-link"
              nextLinkClassName="pagination-next-link"
            />
          </>
          {/* ----------------collapse---------------- */}
        
        </div>
        {/* -----------------right component------------------- */}
        <div>
          <SiziArayalim />
        </div>
      </div>
      <Footer />
      <LoopFooter />
    </div>
  );
};

export default ElektrikElektronik;
