import classNames from "classnames/bind";
import styles from "./WhatDetail.module.scss";
const cx = classNames.bind(styles)

function WhatDetail() {
    return <div className={cx("what-back-main")}>

        <div className={cx("what-back-nav1")}>
            <img src="./images/video-object-05.webp" alt="back-1" />
        </div>
        <div className={cx("what-back-nav2")}>
            <img src="./images/video-object-07.webp" className={cx("what-back-nav2-item")} alt="back-1" />
            <img src="./images/video-object-06.png" className={cx("what-back-nav2-item2")} alt="back-1" />
        </div>

        <div className={cx("content-detail")}>
            <div className={cx("detail")}>
                <h6>What Happened</h6>
                <p>
                    How to create mobile-optimized videos in minutes. Not a designer, <br></br>
                    every team makes a lot of videos Can be trimmed. Take the first
                </p>

                <button>See more</button>
            </div>
        </div>

        <div className={cx("what-back-videomain")}>
            <div className={cx("what-back-video1", "what-style-sides")}>
                <img src="./images/video-object-04.jpg" className={cx("what-back-nav3-item")} alt="back-2" />
            </div>

            <div className={cx("what-back-video2", "what-style-sides")}>
                <img src="./images/video-object-09.webp" className={cx("what-back-nav3-item1")} alt="back-2" />
                <img src="./images/video-object-08.jpg" className={cx("what-back-nav3-item2")} alt="back-2" />
            </div>

            <img src="./images/video.jpg" className={cx("what-back-nav3-item")} alt="back-2" />
            <div className={cx("what-back-videomain-nav")}>
                <div className={cx("what-back-videomain-nav-1")}>
                    <img src="./images/video-object-03.webp" className={cx("what-back-videomain-img1")} alt="nav-main" />
                    <img src="./images/video-object-01.jpg" className={cx("what-back-videomain-img2")} alt="nav-main" />
                </div>
                <div className={cx("what-back-videomain-nav-2")}>
                    <img src="./images/video-object-02.jpg" alt="nav-main" />

                </div>
            </div>
        </div>


    </div>;
}

export default WhatDetail