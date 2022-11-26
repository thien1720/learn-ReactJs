import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {clear,decrement,increament,removeFromCart} from "../../store/reducers/cart.slice";
import { cartTotalPriceSelector,cartTotalSelector  } from "../../store/selector/selector";


const Cart = () =>{
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const dispatch = useDispatch();
  return (
    <main className="container">
      <p>Giỏ hàng</p>
    {cartTotalSelector ===0 ? <p>Không có sản phẩm trong giỏ hàng</p> :
          cartItems.map((e)=>{
            return (
          <div className="cart-item" key={e.id}>
            <div className="product-img">
              <img src={e.image} alt={e.title} />
            </div>
            <div className="product-info">
              <h6 className="name">{e.title}</h6>
              <h6 className="price">${e.price}</h6>
              <button href="#" className="btn-remove btn"  onClick={()=>dispatch(removeFromCart(e))}>remove</button>
            </div>
            <div className="quantity">
              <i className="bi bi-chevron-up"  onClick={()=>dispatch(increament(e.id))}></i>
                <span>{e.quantity}</span>
              <button className="btn" disabled = {e.quantity === 1 ? 'disabled' : ""}>
                <i className="bi bi-chevron-down"  onClick={()=>dispatch(decrement(e.id))}></i>
              </button>
            </div>
          </div>)
      })
    }
      <div className="cart-footer">

          <div className="text-center">
            {cartItems.length === 0 ? 
            <div>
              <p>Không có sản phẩm nào trong giỏ hàng</p>
              <button className="btn-primary btn" > 
                <Link to="/product">
                  Tiếp tục mua hàng
                </Link>
              </button> 
            </div>:
            <>
            <h4>Total <span>${totalPrice.toFixed(2)}</span></h4>
            <button className="btn btn-outline-danger mt-5" onClick={()=>dispatch(clear())}>Clear ALL</button> 
            </>
            }
          </div>
     </div>
    </main>
    )
}

export default Cart;


