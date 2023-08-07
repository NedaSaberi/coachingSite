import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeV1 from "./pages/home-v1/Home-v1";
import HomeV2 from "./pages/home-v2/Home-v2";
import About from "./pages/about/About";
import News from "./pages/news/News";
import Shop from "./pages/shop/Shop";
import Pages from "./pages/pages/Pages";
import Coaching from "./pages/coaching/Coaching";
import Contact from "./pages/contact/Contact";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <Navbar />

        </ThemeProvider>

        <Routes>
          <Route path="/" element={<HomeV1 />} />
          <Route path="/home-v2" element={<HomeV2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
