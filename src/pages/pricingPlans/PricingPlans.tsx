import "./PricingPlans.css";
import Logoipsum from "../../components/logoipsum/Logoipsum";
import FreeConsulation from "../../components/freeCons/FreeConsulation";
import PricesChart from "../../components/pricesChart/PricesChart";

export default function PricingPlans() {
  // let cards = document.querySelectorAll("priceCards");
  // cards.forEach((card) => {
  //   if(card instanceof HTMLElement){
  //     card.style.transition = "all 2s ease-in-out";
  //   }
  // })
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
