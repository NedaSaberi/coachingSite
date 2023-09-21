import Footer from '../../components/footer/Footer';
import './Checkout.css';
import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <div>
      <div className="first-view">
        <div className="first-view-content bg-orange">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="body">
        <div className="status col-11 col-xl-9">
          <p className="text-muted">
            <i className="fa-regular fa-calendar m-3"></i>Your cart is currently
            empty.
          </p>
        </div>
        <div className="status col-11 col-xl-9">
          <p className="text-muted mb-5">
            <i className="fa-regular fa-calendar m-3"></i>Checkout is not
            available whilst your cart is empty.
          </p>
          <Link to='/shop' className="link shop-btn text-white bg-orange">
            RETURN TO SHOP
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
