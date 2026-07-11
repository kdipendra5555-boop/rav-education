import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import UpiPayment from "./UpiPayment";
import Home from "./pages/home";
import JoinOurMission from "./component/JoinOurMission";
import SmartPage from "./pages/SmartSection";
import ClassroomPage from "./component/SmartSchool/ClassroomPage";
import BookVisit from "./component/SmartSchool/BookVisit";
import HowItWorks from "./component/SmartSchool/HowItWorks";
import WhyUs from "./component/SmartSchool/WhyUs";
import SecretPage from "./component/Secret/SecretPage";
import SchoolForm from "./component/SchoolForm";
import PreRegistrationModal from "./component/PreRegistrationModal.jsx";
import PrivacyPolicy from "./component/Foot/PrivacyPolicy.jsx";
import { RulerIcon } from "lucide-react";
import TermsAndConditions from "./component/Foot/TermsAndConditions.jsx";
import EventsPage from "./component/Foot/EventsPage.jsx";
import AdminAddEvent from "./component/Admin/AdminAddEvent.jsx";
import ContactUs from "./component/Foot/ContactUs.jsx";
import AdminNotice from "./component/Admin/AdminNotice.jsx";
import SmartSchoolForm from "./component/SmartSchool/SmartSchoolForm.jsx";
import CareerHome from "./pages/CareerHome.jsx";
import Jobs from "./component/career/Jobs.jsx";
import LearnMore from "./pages/LearnMore.jsx";
import WorkProgress from "./pages/WorkProgress.jsx";
import AdmissionProcess from "./pages/AdmissionProcess.jsx";
import WelcomeKit from "./pages/WelcomeKit.jsx";
import RegistrationForm from "./component/Forms/RegistrationForm.jsx";
import DotPrintSponsorSection from "./component/sponsors/DotPrintSponsorSection.jsx";
import UnnatiHome from "./component/Initiative/unnati/UnnatiHomePage.jsx";
import UnnatiForm from "./component/Initiative/unnati/UnnatiForm.jsx";
import TeacherApply from "./component/career/JobCard/TeacherApply.jsx";
import OrbisPage from "./pages/OrbisPage.jsx";
import CertificateCardsPage from "./component/Orbis/CertificateCardsPage.jsx";





function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>

     
      <ScrollToTop />

      <Routes>

        {/*  Main Section */}
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<UpiPayment />} />
        <Route path="/joinmission" element={<JoinOurMission />} />
        <Route path="/admission" element={<SchoolForm />} />
        <Route path="/pre-registration" element={<PreRegistrationModal/>}/>
        <Route path="/work-progress" element={<WorkProgress/>}/>
        <Route path="/admission-process" element={<AdmissionProcess/>}/>
        <Route path="wel-kit" element={<WelcomeKit/>}/>

        {/*  Smart School Section */}
        <Route path="/smart-school" element={<SmartPage />} />
        <Route path="/classroom" element={<ClassroomPage />} />
        <Route path="/book-visit" element={<BookVisit />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/apply" element={<SmartSchoolForm/>}/>

        {/* Career Page Section */}
        <Route path="/careers" element={<CareerHome/>}/>
        <Route path="/careers-job" element={<Jobs/>}/>
        <Route path="/feature-career" element={<LearnMore/>}/>
       

        {/* Footter section page */}
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<TermsAndConditions/>}/>
        <Route path="/events" element={<EventsPage/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/quizevent" element={<RegistrationForm/>}/>

        {/*  Secret */}
        <Route path="/secret" element={<SecretPage />} />
        <Route path="/admin-events-secret" element={<AdminAddEvent/>}/>
        <Route path="/admin-notice-secret" element={<AdminNotice/>}/>

        {/* Sponser  */}
        <Route path="/printmedia" element={<DotPrintSponsorSection/>}/>

        {/* Initiatives */}
        <Route path="/initiatives/unnati/home" element={<UnnatiHome/>}/>
        <Route path="/unnati/student/enroll" element={<UnnatiForm/>}/>

        {/* Certificate */}
        <Route path="/orbis-89723d89sdf8878sdfjfb" element={<OrbisPage/>}/>
        <Route path="/certifications" element={<CertificateCardsPage/>}/>

        {/* Jobs */}
        <Route path="/teacher-apply/tuition/unnati/rural/students" element={<TeacherApply/>}/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;