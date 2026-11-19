import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/Home.page";
import Header from "./components/shared/header/Header";
import WorkPage from "./pages/Work.Project";
import CustomCursor from "./components/shared/CustomCursor";
import Fire from "./components/Fire";
import EduHire from "./components/Eduhire";
import Finora from "./components/Finora";
import SelectedWork from "./pages/Selected.Page";
import FoodSafety from "./components/Food";
import AboutPage from "./pages/About.page";
import VolvoPartnerConnect from "./components/Volvo";
import Car3DDesign from "./components/Car3D";
import AdvitiixPlatform from "./components/Advitiix";
import ModelPipeline from "./components/ModelPipeline";
import Audire from "./components/Audire";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/selected-work" element={<SelectedWork />} />
        <Route path="/volvo" element={<VolvoPartnerConnect />} />
        <Route path="/car-3d" element={<Car3DDesign />} />
        <Route path="/advitiix" element={<AdvitiixPlatform />} />
        <Route path="/model-pipeline" element={<ModelPipeline />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/eduhire" element={<EduHire />} />
        <Route path="/finora" element={<Finora />} />
        <Route path="/food" element={<FoodSafety />} />
        <Route path="/audire" element={<Audire />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
