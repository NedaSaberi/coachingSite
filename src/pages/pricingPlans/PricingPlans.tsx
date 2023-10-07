import "./PricingPlans.css";
import Logoipsum from "../../components/logoipsum/Logoipsum";
import FreeConsulation from "../../components/freeCons/FreeConsulation";
import PricesChart from "../../components/pricesChart/PricesChart";

export default function PricingPlans() {
  return (
    <div className="pricing-plans">
      <div className="firstView">
        <div className="firstViewContent bg-orange">
          <h1>Pricing Plans</h1>
          <p>Excelling Your Professional Career</p>
        </div>
      </div>
      <PricesChart />
      <Logoipsum />
      <FreeConsulation />
    </div>
  );
}
