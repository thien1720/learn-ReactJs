import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
const cx = classNames.bind(styles)

function Banner() {
    return <div className={cx("banner")}>
        <div>
            <img src="./images/main-banner.jpg" alt="banner" />
        </div>

        <div className={cx("introduce")}>
            <div className={cx("intro-text")}>
                <h6>What Happened!</h6>
                <p>
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                    step to your brand's success. How to create <br></br>
                    mobile-optimized videos in minutes.
                </p>
            </div>

        </div>
    </div>;
}

export default Banner;