import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeV1 from "./pages/home-v1/Home-v1";
import HomeV2 from "./pages/home-v2/Home-v2";
import About from "./pages/about/About";
import Aboutus from "./pages/aboutus/Aboutus";
import News from "./pages/news/News";
import Shop from "./pages/shop/Shop";
import Pages from "./pages/pages/Pages";
import Coaching from "./pages/coaching/Coaching";
import Coachingsingle from "./pages/coachingsingle/Coachingsingle";
import Contact from "./pages/contact/Contact";
import Pricingplans from "./pages/pricingplans/Pricingplans";
import Worklifebalance from "./pages/worklifebalance/Worklifebalance";
import { ThemeProvider } from "./context/ThemeContext";
import Importantdecisions from "./pages/importantdecisions/Importantdecisions";
import Oneononesession from "./pages/oneononesession/Oneononesession";
import Myaccount from "./pages/myaccount/Myaccount";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import LostPass from "./pages/lost-pass/Lost-pass";


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
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/coachingsingle" element={<Coachingsingle />} />
          <Route path="/pricingplans" element={<Pricingplans />} />
          <Route path="/worklifebalance" element={<Worklifebalance />} />
          <Route path="/importantdecisions" element={<Importantdecisions />} />
          <Route path="/oneononesession" element={<Oneononesession />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/lost-password" element={<LostPass />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
