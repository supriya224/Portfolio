import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import Header from "./components/shared/header/Header";
import WorkPage from "./pages/Work.Project";
import CustomCursor from "./components/shared/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
    </>
  );
}

export default App;
