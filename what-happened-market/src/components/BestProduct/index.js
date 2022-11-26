import BoxProductShow from "./BoxProductShow";

import classNames from "classnames/bind";
import styles from "./BestProduct.module.scss";
const cx = classNames.bind(styles)

function BestProduct() {


    const dataProduct=[
        {
            image:"./images/best-image-01.jpg",
            number: 1,
        },
        {
            image:"./images/best-image-02.jpg",
            number: 2,
        },
        {
            image:"./images/best-image-03.jpg",
            number: 3,
        },
        
    ]

    return <div className={cx("view-product")}>
        <div className={cx("head-product")}>
            <h1>Best Product</h1>
            <p>
                How to create mobile-optimized videos in minutes. Not a designer,
                every team makes a lot of videos Can be trimmed. Take the first
            </p>
        </div>

        <div className={cx("iteam-show")}>
            {dataProduct.map((iteam, index) =>{
                return <BoxProductShow 
                            key={index}
                            image={iteam.image} 
                            number={iteam.number}    
                        />
             })}
        </div>
    </div >;
}

export default BestProduct;