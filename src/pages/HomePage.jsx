import React from "react";
import Content from "../components/Content";
import WhyUcuncuBinyil from "../components/WhyUcuncuBinyil";
import PopulerKurs from "../components/PopulerKurs";
import FindJob from "../components/FindJob";
import Activity from "../components/Activity";
import Reference from "../components/Reference";
import Footer from "../components/Footer";
import LoopFooter from "../components/LoopFooter";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FFFFFF] w-full min-h-screen"
    >
      <Content />
      <WhyUcuncuBinyil />
      <PopulerKurs />
      <FindJob />
      <Activity />
      <Reference />
      <Footer />
      <LoopFooter />
    </motion.div>
  );
};

export default HomePage;
