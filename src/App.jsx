import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/slimmomsApp/" element={<Home />} />
        <Route path="/slimmomsApp/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
