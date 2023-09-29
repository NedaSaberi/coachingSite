import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import './stylePages/StylePages.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import About from './pages/about/About';
import Aboutus from './pages/aboutUs/AboutUs';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkOut/CheckOut';
import Coaching from './pages/coaching/Coaching';
import Coachingsingle from './pages/coachingSingle/CoachingSingle';
import Contact from './pages/contact/Contact';
import HomeV1 from './pages/homeV1/HomeV1';
import HomeV2 from './pages/homeV2/HomeV2';
import ImportantDecisions from './pages/importantDecisions/ImportantDecisions';
import LostPass from './pages/lostPass/LostPass';
import Myaccount from './pages/myAccount/MyAccount';
import News from './pages/news/News';
import Oneononesession from './pages/oneOnOneSession/OneOnOneSession';
import Pages from './pages/pages/Pages';
import Pricingplans from './pages/pricingPlans/PricingPlans';
import Shop from './pages/shop/Shop';
import Worklifebalance from './pages/workLifeBalance/WorkLifeBalance';
import Footer from './components/footer/Footer';

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
          <Route path="/importantdecisions" element={<ImportantDecisions />} />
          <Route path="/oneononesession" element={<Oneononesession />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/lost-password" element={<LostPass />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
