import { useEffect } from "react";

import CentralServer from "../component/SmartSchool/CentralServer";
import DigitalEducation from "../component/SmartSchool/DigitalEducation";
import FeatureShowcase from "../component/SmartSchool/FeatureShowcase";
import FreeForEveryone from "../component/SmartSchool/FreeForEveryone";
import HeroSection from "../component/SmartSchool/HeroSection";
import Navbar from "../component/SmartSchool/Navbar";
import SmartDesk from "../component/SmartSchool/SmartDesk";

export default function SmartPage() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="bg-[#0b0b0b]">
      <Navbar />
      <HeroSection />
      <SmartDesk/>
      <DigitalEducation/>
      <CentralServer/>
      <FeatureShowcase/>
      <FreeForEveryone/>
    </div>
  );
}