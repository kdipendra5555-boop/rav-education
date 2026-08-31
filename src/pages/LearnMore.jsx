import { motion } from "framer-motion";
import FeaturesHero from "../component/Features/FeaturesHero";
import FreeEducationHighlight from "../component/Features/FreeEducationHighlight";
import Navbar from "../component/Navbar";
import SmartAISection from "../component/Features/SmartAISection";
import CoderzCafe from "../component/Features/CoderzCafe";
import LibrarySection from "../component/Features/LibrarySection";
import FacilitiesSection from "../component/Features/FacilitiesSection";
import Footer from "../component/Footer";



export default function Highlights() {
 

  return (
    <>
    <Navbar/>
    <FeaturesHero/>
    <FreeEducationHighlight/>
    <SmartAISection/>
    <CoderzCafe/>
    <LibrarySection/>
    <FacilitiesSection/>
    <Footer/>
    
    
    </>
  );
}