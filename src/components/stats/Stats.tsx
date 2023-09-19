import './Stats.css';

export default function Stats() {
  return (
    <div className="stats-back w-100 position-relative">
        <img src="/images/stats.jpg" alt="" className="w-100 h-100" />
        <div className="stats-front position-absolute fixed-top w-100 h-100 text-center p-5">
            <h5 className="text-orange mt-3 mb-5">LATEST NUMBERS</h5>
            <h1 className="text-white">Leadership Stats</h1>
            <div className="numbers-wrapper d-flex justify-content-around my-5 p-5">
            <div className="numbers">
                <div className="num">26</div>
                <div className="sub">Years of Working</div>
            </div>
            <div className="numbers">
                <div className="num">30</div>
                <div className="sub">Reliable Clients</div>
            </div>
            <div className="numbers">
                <div className="num">48</div>
                <div className="sub">Success Stories</div>
            </div>
            <div className="numbers">
                <div className="num">12</div>
                <div className="sub">Expert Advisors</div>
            </div>
            </div>
        </div>
    </div>

  )
}
