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
import AboutPage from "./pages/About.page";
import { FloatingCards } from "./components/FloatingCards";


const cards = [
  {
    id: "one",
    content: <div style={{ padding: 24 }}>First card</div>,
  },
  {
    id: "two",
    alt: true,
    content: <div style={{ padding: 24 }}>Second card</div>,
  },
  {
    id: "three",
    content: <div style={{ padding: 24 }}>Third card</div>,
  },
];

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
        <Route path="/about" element={<AboutPage />} />
                <Route path="/light" element={<FloatingCards  cards={cards}
      gap={16}
      radius={12}
      floatDistance={10}
      speed={1.1}
      tilt={9} />} />
      </Routes>
    </>
  );
}

export default App;
