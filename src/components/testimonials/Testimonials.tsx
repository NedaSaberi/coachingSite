import './Testimonials.css';

export default function Testimonials() {
  return (
      <div className="testimonials p-5">
        <h5 className="text-orange my-3 text-center">OUR TESTIMONIALS</h5>
        <h1 className="text-center">What People Are Saying</h1>
        <div className="comments d-flex justify-content-around my-5">
          <div className="people">
            <i className="fa-solid fa-quote-left text-orange"></i>
            <p>
              Duis rhoncus orci utedn metus rhoncus, non is dictum purus
              bibendum. Suspendisse id orci sit amet justo interdum hendrerit
              sagittis. Nulla semper pharetra lacinia. Maecenas gravida dapibus
              neque id dictum.
            </p>
            <div className="autho">
              <img src="/images/Meghdad.jpg" alt="" />
              <div className="name">Meghdad Hadidi</div>
              <div className="position">CEO</div>
            </div>
          </div>
          <div className="people">
            <i className="fa-solid fa-quote-left text-orange"></i>
            <p>
              Duis rhoncus orci utedn metus rhoncus, non is dictum purus
              bibendum. Suspendisse id orci sit amet justo interdum hendrerit
              sagittis. Nulla semper pharetra lacinia. Maecenas gravida dapibus
              neque id dictum.
            </p>
            <div className="autho">
              <img src="/images/Meghdad.jpg" alt="" />
              <div className="name">Meghdad Hadidi</div>
              <div className="position">CEO</div>
            </div>
          </div>
          <div className="people">
            <i className="fa-solid fa-quote-left text-orange"></i>
            <p>
              Duis rhoncus orci utedn metus rhoncus, non is dictum purus
              bibendum. Suspendisse id orci sit amet justo interdum hendrerit
              sagittis. Nulla semper pharetra lacinia. Maecenas gravida dapibus
              neque id dictum.
            </p>
            <div className="autho">
              <img src="/images/Meghdad.jpg" alt="" />
              <div className="name">Meghdad Hadidi</div>
              <div className="position">CEO</div>
            </div>
          </div>
        </div>
      </div>
  );
}
