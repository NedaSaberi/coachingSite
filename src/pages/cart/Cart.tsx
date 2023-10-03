import styles from './Cart.module.css';

export default function Cart() {
  return (
    <div>
      <div className="firstView">
        <div className="firstViewContent bg-orange">
          <h1>Cart</h1>
        </div>
      </div>
      <div>
        <div className={`${styles.status} col-11 col-xl-9`}>
          <p className='text-muted'>
            <i className="fa-regular fa-calendar m-3"></i>Your cart is currently empty.
          </p>
        <button className={`${styles.shopBtn} text-white bg-orange`}>RETURN TO SHOP</button>
        </div>
      </div>
    </div>
  );
}
