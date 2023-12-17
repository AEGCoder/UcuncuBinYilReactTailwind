import React,{useState,useEffect} from 'react'
import SiziArayalim from '../components/SiziArayalim'
import ReactPaginate from "react-paginate";
import Footer from '../components/Footer'
import LoopFooter from '../components/LoopFooter'
import axios from 'axios'
import {motion} from "framer-motion";

const BlogHaber = () => {

 const [blog, setBlog] = useState([])
 const [itemOffset, setItemOffset] = useState(0);
 const itemsPerPage = 4;

 const endOffset = itemOffset + itemsPerPage;
 const currentItems = blog.slice(itemOffset, endOffset);
 const pageCount = Math.ceil(blog.length / itemsPerPage);

 const handlePageClick = (selectedItem) => {
  const newOffset = (selectedItem * itemsPerPage) % blog.length;
  console.log(
    `User requested page number ${selectedItem}, which is offset ${newOffset}`
  );
  setItemOffset(newOffset);
};

 useEffect(() => {
  const getBlog = async () => {
    const res = await axios.get('BlogData.json')
    const data = res.data
    setBlog(data)
  }
  getBlog()
 }, [])


  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration:0.5 }}
    className='w-full'>
         <div className="relative mt-10">
        <img className='brightness-50' src="./images/kampanyalarImg.png" alt="" />
        <span className=" absolute left-10 bottom-10 text-4xl text-white font-bold tracking-wider">
          BLOG
        </span>
      </div>
      <div>
        <ul className="flex items-center gap-x-5 text-sm p-10 border-b border-gray-400">
          <li>
            <a href="">Anasayfa</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
      <div className='flex sm:flex-row flex-col sm:gap-y-0 gap-y-10 items-start sm:gap-x-20 gap-x-2 sm:px-20 px-2 py-10'>
        <div className='sm:w-[70%] w-full'>
          <ul className='w-full flex flex-col gap-y-20'>
            {
              currentItems.map((item) => {
                return (
                  <li key={item.id} className='flex flex-col gap-y-6 border-b-2 pb-10'>
              <div className='w-full h-[400px]'>
                <img className='w-full h-full rounded-md object-contain' src={item.img} alt={item.title} />
              </div>
              <div className='flex items-center sm:gap-x-10 gap-x-3'>
                <div className='text-[#FFB606] flex flex-col border-r pr-5 border-yellow-400'>
                  <span className='font-bold text-7xl tracking-wider'> {item.day} </span>
                  <span className='text-base'>{item.month} </span>
                </div>
                <div className='flex flex-col gap-y-2'>
                  <div className='font-bold text-lg tracking-wider'>
                    {item.title}
                  </div>
                  <div className='flex items-center gap-x-10 text-xs'>
                    <div className='flex flex-col border-r pr-5'>
                      <span>Gönderen</span>
                      <span>{item.sender} </span>
                    </div>
                    <div className='flex flex-col border-r pr-5'>
                      <span>Kategoriler</span>
                      <span>{item.category} </span>
                    </div>
                    <div className='flex flex-col'>
                    <span>Yorumlar</span>
                      <span>{item.comment} YORUM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm leading-relaxed'>{item.desc}</p>
              </div>
              <div>
                <button className='tracking-tight bg-[#FFB606] py-2 px-6 rounded-lg text-sm'>{item.link}</button>
              </div>
            </li>
                )
              })
            }
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
        </div>
        <div className='sm:w-[30%] w-full'>
          <SiziArayalim />
        </div>
      </div>
      <Footer />
      <LoopFooter />
    </motion.div>
  )
}

export default BlogHaber