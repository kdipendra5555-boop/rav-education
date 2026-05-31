import CareerHero from "../component/career/CareerHero";
import CareerPoint from "../component/career/CareerPoint";
import HiringPhilosophy from "../component/career/HiringPhilosophy";
import HiringProcess from "../component/career/HiringProcess";
import WhoAndOffer from "../component/career/WhoAndOffer";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
export default function CareerHome() {
  return (
    <>
    <Navbar/>
    <CareerHero/>
    <HiringPhilosophy/>
    <HiringProcess/>
    <WhoAndOffer/>
    <CareerPoint/>
    <Footer/>
    </>
  );
}