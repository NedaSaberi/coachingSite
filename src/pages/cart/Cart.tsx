
export default function Cart() {
  return (
    <div className="cart">
      <div className="firstView">
        <div className="firstViewContent bg-orange">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="body">
        <div className="status col-11 col-xl-9">
          <p className='text-muted'>
            <i className="fa-regular fa-calendar m-3"></i>Your cart is currently empty.
          </p>
        <button className='shop-btn text-white bg-orange'>RETURN TO SHOP</button>
        </div>
      </div>
    </div>
  );
}
