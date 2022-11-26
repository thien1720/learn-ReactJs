import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles)

function Header() {
    return <div className={cx("header-main")}>

        <img src="./images/logo.webp" alt="logo" />

        <div className={cx("box-route")}>
            <div className={cx("navbar")}>
                <ul>
                    <li>Introduction</li>
                    <li>Solution</li>
                    <li>Tateplan</li>
                </ul>
            </div>
            <div className={cx("apply-login")}>
                <ul>
                    <li>Login</li>
                    <li>Applyforfreeuse</li>

                </ul>
            </div>
        </div>
    </div>;

}

export default Header;