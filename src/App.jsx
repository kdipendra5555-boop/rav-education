import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpiPayment from "./UpiPayment";
import Home from "./pages/Home";
import JoinOurMission from "./component/JoinOurMission";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<UpiPayment />} />
        <Route path="/joinmission" element={<JoinOurMission />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;