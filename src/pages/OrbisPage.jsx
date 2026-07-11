import { ImOpt } from "react-icons/im";
import CertificateCards from "../component/Orbis/CertificateCards";
import FreeCertificate from "../component/Orbis/FreeCertificate";
import OrbisFeatures from "../component/Orbis/OrbisFeatures";
import OrbitHero from "../component/Orbis/OrbisHero";
import OrbisNavbar from "../component/Orbis/OrbisNavbar";
import OrbisFooter from "../component/Orbis/OrbisFooter";


export default function OrbisPage() {
  return (
    <>
      <OrbisNavbar/>
      <OrbitHero/>
      <OrbisFeatures/>
      <FreeCertificate/>
      <OrbisFooter/>
      
    </>
  );
}