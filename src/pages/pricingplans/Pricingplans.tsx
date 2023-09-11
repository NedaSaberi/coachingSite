import './Pricingplans.css';
import Pricesplans from "../../components/pricesplans/Pricesplans";
import Logoipsum from '../../components/logoipsum/Logoipsum';
import FreeConsulation from '../../components/freeCons/FreeConsulation';
import Footer from '../../components/footer/Footer';

export default function Pricingplans() {
  return (
    <div className="pricing-plans">
      <div className="first-view">
        <div className="first-view-content bg-orange">
          <h1>Pricing Plans</h1>
          <p>Excelling Your Professional Career</p>
        </div>
      </div>
      <Pricesplans/>
      <Logoipsum/>
      <FreeConsulation/>
      <Footer/>
    </div>
  );
}
