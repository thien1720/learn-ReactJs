import { Link,NavLink } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useSelector} from "react-redux"; 
import { cartTotalSelector } from "../store/selector/selector";

const Header = (props) =>{
  const total = useSelector(cartTotalSelector)
  return(
    <header id="header">
      <div className="container">
        <div className="logo">
          Logo
        </div>
        <ul className="nav-menu d-flex">
          <NavLink to="/">
            <li>Trang chủ</li>
          </NavLink>
          <NavLink to="/product">
            <li>Sản phẩm</li>
          </NavLink>
        </ul>
        <div className="cart-icon">
          <Link to="/cart">
            <i className="bi bi-cart"></i>
            {total}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;