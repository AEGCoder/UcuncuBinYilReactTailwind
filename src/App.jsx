import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MakinePage from './pages/MakinePage';
import YazilimPage from './pages/YazilimPage';
import InsaatPage from './pages/InsaatPage';
import MimariPage from './pages/MimariPage';
import ElektrikElektronik from './pages/ElektrikElektronik';
import MeslekiBilisim from './pages/MeslekiBilisim';
import GrafikVideoPage from './pages/GrafikVideoPage';
import ActivityPage from './pages/ActivityPage';
import KampanyalarPage from './pages/KampanyalarPage';
import BlogHaber from './pages/BlogHaber';
import IletisimPage from './pages/IletisimPage';
import MakineState from './pages/[MakinePageState]/MakineState';
import YazilimState from './pages/[YazilimPageState]/YazilimState';
import InsaatState from './pages/[InsaatPageState]/InsaatState';
import MimariState from './pages/[MimariPageState]/MimariState';
import PlcState from './pages/[PlcPageState]/PlcState';
import MeslekiBilisimState from './pages/[MeslekiBilisimPageState]/MeslekiBilisimState';
import GrafikVideoState from './pages/[GrafikVideoPageState]/GrafikVideoState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const app = () => {



  return (
   <div>
      <Router>
      <Header  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/makine" element={<MakinePage />} />
          <Route path="/yazilim" element={<YazilimPage />} />
          <Route path="/insaat" element={<InsaatPage />} />
          <Route path="/mimari" element={<MimariPage />} />
          <Route path="/elektrikElektronik" element={<ElektrikElektronik />} />
          <Route path="/meslekiBilisim" element={<MeslekiBilisim />} />
          <Route path="/grafikVideo" element={<GrafikVideoPage />} />
          <Route path="/etkinlik" element={<ActivityPage />} />
          <Route path="/kampanyalar" element={<KampanyalarPage />} />
          <Route path="/blogHaber" element={<BlogHaber />} />
          <Route path="/iletisim" element={<IletisimPage />} />
          <Route path="/makine/:titleParams" element={<MakineState />} />
          <Route path="/yazilim/:titleParams" element={<YazilimState />} />
          <Route path="/insaat/:titleParams" element={<InsaatState />} />
          <Route path="/mimari/:titleParams" element={<MimariState />} />
          <Route path="/plc/:titleParams" element={<PlcState />} />
          <Route path="/meslekiBilisim/:titleParams" element={<MeslekiBilisimState />} />
          <Route path="/grafikVideo/:titleParams" element={<GrafikVideoState />} />
        </Routes>
      </Router>
   </div>
  );
}

export default app;
