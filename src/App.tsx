import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import Header from "./components/shared/header/Header";
import WorkPage from "./pages/Work.Project";
import CustomCursor from "./components/shared/CustomCursor";
import Fire from "./components/Fire";
import EduHire from "./components/Eduhire";
import Finora from "./components/Finora";
import SelectedWork from "./pages/Selected.Page";
import FoodSafety from "./components/Food";

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/selected-work" element={<SelectedWork />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/eduhire" element={<EduHire />} />
        <Route path="/finora" element={<Finora />} />
        <Route path="/food" element={<FoodSafety />} />
      </Routes>
    </>
  );
}

export default App;
