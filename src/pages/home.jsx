import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import SupportOurMission from "../component/SupportOurMission";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <Navbar/>
      <Hero/>
      <SupportOurMission/>
    </div>
  );
}