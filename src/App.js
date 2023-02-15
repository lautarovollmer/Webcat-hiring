import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
