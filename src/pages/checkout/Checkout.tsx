import styles from '../cart/Cart.module.css';

import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <div>
      <div className="firstView">
        <div className="firstViewContent bg-orange">
          <h1>Cart</h1>
        </div>
      </div>
      <div>
        <div className={`${styles.status} col-11 col-xl-9`}>
          <p className="text-muted">
            <i className="fa-regular fa-calendar m-3"></i>Your cart is currently
            empty.
          </p>
        </div>
        <div className={`${styles.status} col-11 col-xl-9`}>
          <p className="text-muted mb-5">
            <i className="fa-regular fa-calendar m-3"></i>Checkout is not
            available whilst your cart is empty.
          </p>
          <Link to='/shop' className={`${styles.link} ${styles.shopBtn} text-white bg-orange`}>
            RETURN TO SHOP
          </Link>
        </div>
      </div>
    </div>
  );
}
