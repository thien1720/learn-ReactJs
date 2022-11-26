
import { FaHeart } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "./ShowProduct.module.scss";
const cx = classNames.bind(styles)

function Product({image}) {
    return <div className={cx("style-item")}>
        <img src={image} alt="Product" />
        <div className={cx("detail-item")}>
            <p className={cx("description")}>[what happen] How to create </p>

            <div className={cx("detail-mon")}>
                <p>2,500 won</p>
                <span>
                    <FaHeart className={cx("love-icon")} />
                    236
                </span>
            </div>
        </div>
    </div>;
}

export default Product;