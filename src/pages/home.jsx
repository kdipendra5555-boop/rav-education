import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import SupportOurMission from "../component/SupportOurMission";
import SmartSchoolSection from "../component/SmartSchoolSection";
import Footer from "../component/Footer";
import NoticeBoard from "../component/NoticeBoard";



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <Navbar/>
      <Hero/>
      <NoticeBoard/>
      <SmartSchoolSection/>
      <SupportOurMission/>
      
      <Footer/>
    </div>
  );
}