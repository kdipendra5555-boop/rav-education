import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import UnnatiSection from "./UnnatiSection";
import WhyUnnati from "./WhyUnnati";
import Navbar from "../../Navbar";
import UnnatiQuote from "./UnnatiQuote";

export default function UnnatiHomePage() {
  return (
    <>
    <Navbar/>
    <UnnatiSection/>
    <WhyUnnati/>
    <UnnatiQuote/>
    </>
  );
}

