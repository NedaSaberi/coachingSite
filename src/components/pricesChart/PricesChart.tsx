import './PricesChart.css';

export default function PricesChart() {
  return (
        <div className="row prices-wrapper">
          <div className="col-12 col-md-4 p-3">
            <div className="card">
              <div className="title">SINGLE SESSION</div>
              <h1 className="price">$200</h1>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>ipsum dolor svit elit</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Piscing elit sed eiusi et</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Mepor indunt ut labor</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Unt sit randome</span>
                </li>
              </ul>
              <button>CONTACT US</button>
            </div>
          </div>
          <div className="col-12 col-md-4 p-3">
            <div className="card mid">
              <div className="title text-orange">RECOMMENDED</div>
              <h1 className="price text-orange">$650</h1>
              <ul>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>ipsum dolor svit elit</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Piscing elit sed eiusi et</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Mepor indunt ut labor</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Unt sit randome</span>
                </li>
                <li>
                  <i className="text-orange fa-solid fa-check"></i>
                  <span>Piscing elit sed eius</span>
                </li>
              </ul>
              <button>CONTACT US</button>
            </div>
          </div>
          <div className="col-12 col-md-4 p-3">
            <div className="card">
              <div className="title">PREMIERE PACKAGE</div>
              <h1 className="price">$1,200</h1>
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>ipsum dolor svit elit</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Piscing elit sed eiusi et</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Mepor indunt ut labor</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Unt sit randome</span>
                </li>
              </ul>
              <button>CONTACT US</button>
            </div>
          </div>
          
        </div>
  );
}
