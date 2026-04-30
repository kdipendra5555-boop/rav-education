import CareerHero from "../component/career/CareerHero";
import CareerNavbar from "../component/career/CareerNavbar";
import CareerPoint from "../component/career/CareerPoint";
import HiringPhilosophy from "../component/career/HiringPhilosophy";
import HiringProcess from "../component/career/HiringProcess";
import WhoAndOffer from "../component/career/WhoAndOffer";
export default function CareerHome() {
  return (
    <>
    <CareerHero/>
    <CareerNavbar/>
    <HiringPhilosophy/>
    <HiringProcess/>
    <WhoAndOffer/>
    <CareerPoint/>
    </>
  );
}