import classNames from "classnames/bind";
import styles from "./Outstanding.module.scss";
const cx = classNames.bind(styles)

function Outstanding() {
    return <div className={cx("outstanding")}>
        <div className={cx("outstanding-head")}>
            <div className={cx("outstanding-detail")}>
                <h6>Happened’s issue</h6>
                <p>
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 <br />
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </p>

                <button type="button" >See more</button>
            </div>

            <div className={cx("image-head-out")}>
                <img src="./images/news-object-03.png" alt="new" />
                <img src="./images/news-object-02.png" alt="new" />

            </div>
        </div>


        <div className={cx("list-brand", "row", "row-cols-lg-5")}>
            <div className={cx("brand-1", "col")}>
                <h6>Whpn <br />
                    issue
                </h6>

                <img src="./images/news-img-01.webp"   alt="cx" />
            </div>
            <div className={cx("brand", "col")}>
                <div className={cx("brand-head-text")}>
                    <img src="./images/news-object-04.webp" className={cx("brand-hot")} alt="cx" />
                    <h6>B Brand
                    </h6>
                </div>

                <img src="./images/news-img-03.jpg" className={cx("brand-main")} alt="cx" />
            </div>
            <div className={cx("brand", "col")}>
                <div className={cx("brand-head-text")}>
                    <h6> C Brand
                    </h6>

                </div>
                <img src="./images/news-img-03.jpg" className={cx("brand-main")} alt="cx" />
            </div>
            <div className={cx("brand", "col")}>
                <div className={cx("brand-head-text-orange")}>
                    <h6>D brand
                    </h6>
                </div>

                <img src="./images/news-img-04.jpg" className={cx("brand-main")} alt="cx" />
            </div>
            <div className={cx("brand", "col")}>
                <div className={cx("brand-head-text")}>
                    <h6>E brand
                    </h6>
                </div>

                <img src="./images/news-img-05.jpg" className={cx("brand-main")} alt="cx" />
            </div>
        </div>
        
        <div className={cx("line-image")}>
            <div>
                <img  src="./images/news-object-03.webp" className={cx("foot-outstan")} alt="foot-outstan"/>
            </div>
            <div>
                <img src="./images/news-object-05.png" className={cx("foot-outstan1")} alt="foot-outstan1"/>
            </div>
        </div>
    </div>
}

export default Outstanding;