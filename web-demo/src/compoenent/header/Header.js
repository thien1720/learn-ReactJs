import { Routes, Route, Link, NavLink } from "react-router-dom";

function Header(){
    return (
        <>
            <div className="img-logo">
                <image src="" alt="" />
            </div>

            <div className="page-list-container">
                <ul className="page-iteam">
                    <li>
                        <NavLink to="/" >Trang Chủ</NavLink>
                    </li>
                    <li><NavLink to="/laptop" >Danh sách sản phẩm</NavLink></li>
                    
                    
                </ul>
                    
            </div>

            <div className="cart-shops">
                <p className="cart"></p>

                <p className="login"></p>
            </div>
        </>
    )
}

export default Header