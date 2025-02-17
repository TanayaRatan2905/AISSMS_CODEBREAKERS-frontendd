import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Donate from "../pages/donate";
import NGO from "../pages/ngo";
import Login from "../pages/login";
import Feedback from "../pages/feedback";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import DonateForm from '../pages/doanteform';
import AboutUs from "../pages/aboutus";
import NGOAuth from "../pages/NGOAuth";
import DonorAuth from "../pages/donorAuth";
import DonorInfo from "../pages/donorInfo";

const AppRoutes = () => {
  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/NGOAuth" element={<NGOAuth />} />
        <Route path="/donorAuth" element={<DonorAuth />} />
        <Route path="/donateform" element={<DonateForm />} />
        <Route path="/donorInfo" element={<DonorInfo />} />
        <Route path="/ngo" element={<NGO />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer /> 
    </div>
  );
};

export default AppRoutes;


