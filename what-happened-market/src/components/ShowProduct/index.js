import Product from "./Product"

import classNames from "classnames/bind";
import styles from "./ShowProduct.module.scss";
const cx = classNames.bind(styles)

function ShowProduct() {
    const listItem = [
        { image: "./images/img-01.jpg" },
        { image: "./images/img-02.jpg" },
        { image: "./images/img-03.jpg" },
        { image: "./images/img-04.jpg" },
        { image: "./images/img-05.jpg" },
        { image: "./images/img-06.jpg" },
        { image: "./images/img-07.jpg" },
        { image: "./images/img-08.jpg" },
        { image: "./images/img-09.jpg" },
        { image: "./images/img-10.jpg" },
        { image: "./images/img-11.jpg" },
        { image: "./images/img-12.jpg" },
        { image: "./images/img-13.jpg" },
        { image: "./images/img-14.jpg" },
        { image: "./images/img-15.jpg" },
        { image: "./images/img-16.jpg" },
        { image: "./images/img-17.jpg" },
        { image: "./images/img-18.jpg" },
        { image: "./images/img-19.jpg" },
        { image: "./images/img-20.jpg" },
        { image: "./images/img-21.jpg" },
        { image: "./images/img-22.jpg" },
        { image: "./images/img-23.jpg" },
        { image: "./images/img-24.jpg" },
        { image: "./images/img-25.jpg" },
    ]

    return <div className={cx("list-product", "container")}>
        <div className={cx("row", "row-cols-lg-5" ,"row-cols-md-3" ,"row-cols-2")}>
            {listItem.map((iteam, index) => {
                // console.log(iteam)
                return <Product
                    image={iteam.image}
                    key={index}
                />
            })}

        </div>

        <div className={cx("btn-more")}> 
            <button>See more</button>
        </div>
    </div>
}

export default ShowProduct;