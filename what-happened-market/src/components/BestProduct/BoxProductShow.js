import classNames from "classnames/bind";
import styles from "./BestProduct.module.scss";
const cx = classNames.bind(styles)

function BoxProductShow({image, number}) {
    return <div className={cx("list-product")}>

        <div className={cx("style-image-iteam")}>
            <div className={cx("style-number")}>
                <img src="./images/producticon-bg.webp" alt="number-product" />
                <p className={cx("number-iteam")}>0{number}</p>
            </div>
            <img src={image} alt="show-product" />
            <div className={cx("optimeied")}>
                <p>
                    How to create
                    mobile-optimized
                </p>
                <img src="./images/go-icon.webp" alt="go" />
            </div>
        </div>


    </div>;
}

export default BoxProductShow;