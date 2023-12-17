import React,{useState} from 'react'
import GecmisEtkinlik from '../components/GecmisEtkinlik'
import YaklasanEtkinlik from '../components/YaklasanEtkinlik'
import {motion} from "framer-motion";

const ActivityPage = () => {

 const [activity, setActivity] = useState(0)

  const activityBtn = (index) => {
    setActivity(index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0 }}
    className='w-full'>
       <div className="relative mt-10">
         <img src="./images/ActivityImg.png" alt="" />
        <span className=" absolute left-10 bottom-10 text-4xl text-white font-bold tracking-wider">
        ETKİNLİKLER
        </span>
      </div>
      <div>
        <ul className="flex items-center gap-x-5 text-sm p-10 border-b border-gray-400">
          <li>
            <a href="">Anasayfa</a>
          </li>
          <li>
            <a href="">Etkinlik</a>
          </li>
        </ul>
      </div>

      <div className='w-[30rem] mt-10 ml-10 px-1 flex items-center sm:gap-x-10 gap-x-4'>
        <button onClick={() => activityBtn(0)} className='border-2 border-b-0 border-t-4 border-t-yellow-500 tracking-wider  py-2 sm:px-10 px-5'>Yaklaşanlar</button>
        <button onClick={() => activityBtn(1)}  className='border-2 border-b-0 border-t-4 border-t-yellow-500 tracking-wider  py-2 sm:px-10 px-5'>Tarihi Geçenler</button>
      </div>

         <div className='flex items-center justify-center mt-10 w-full'>
        {
        activity === 0 && (
          <YaklasanEtkinlik />
        )
       }
        </div> 
        <div className='flex items-center justify-center mt-10 w-full'>
        {
        activity === 1 && (
          <GecmisEtkinlik />
        )
        }
        </div>
    </motion.div>
  )
}

export default ActivityPage