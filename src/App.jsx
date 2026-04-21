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

        {/*  Smart School Section */}
        <Route path="/smart-school" element={<SmartPage />} />
        <Route path="/classroom" element={<ClassroomPage />} />
        <Route path="/book-visit" element={<BookVisit />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/why-us" element={<WhyUs />} />

        {/* Footter section page */}
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<TermsAndConditions/>}/>
        <Route path="/events" element={<EventsPage/>}/>
        <Route path="/contact" element={<ContactUs/>}/>

        {/*  Secret */}
        <Route path="/secret" element={<SecretPage />} />
        <Route path="/admin-events-secret" element={<AdminAddEvent/>}/>
        <Route path="/admin-notice-secret" element={<AdminNotice/>}/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;