import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Explore from "../Pages/Explore";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

import SolutionLableShow from "../Pages/LablesInside/SolutionLableShow";
import SupportShow from "../Pages/LablesInside/SupportShow";
import WhyAekSecShow from "../Pages/LablesInside/WhyAekSecShow";
import ProductShow from "../Pages/LablesInside/ProducAndServiceLableShow";
import LearnAekSecShow from "../Pages/LablesInside/LearnLableShow";
import About from "../Pages/About";

import RefreshRedirect from "../Pages/RefreshRedirect";

export default function AppRouter() {
  return (
        <RefreshRedirect>

    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="/explore" element={<Explore />} />
     
      <Route path="/login" element={<Login />} />
     
      <Route path="/register" element={<Register />} />
     
      <Route path="/solutions/solution-lab" element={<SolutionLableShow />} /> 
      
      <Route path="/learn/learnAekSec" element={<LearnAekSecShow />} /> 

      <Route path="/products/product-service" element={<ProductShow />} /> 

      <Route path="/support/support-lab" element={<SupportShow />} /> 

      <Route path="/why/whyAekSec" element={<WhyAekSecShow />} /> 

      <Route path="/about" element={<About />} /> 


      
    </Routes>
    </RefreshRedirect>
  );
}
