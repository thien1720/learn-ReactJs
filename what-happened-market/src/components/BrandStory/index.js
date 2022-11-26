import classNames from "classnames/bind";
import styles from "./BrandStory.module.scss";
const cx = classNames.bind(styles)

function BrandStory() {
    return <div className={cx("brand")}>
        <div className={cx('images-style1')}>
            <img src="./images/object-02.webp" className={cx("images-02")} alt="box" />
            <img src="./images/object-03.webp" className={cx("images-03")} alt="box" />

        </div>
        <div className={cx("head-brand")}>
            <h1>Brand Story</h1>
            <p>
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 <br></br>
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
        </div>


        <div className={cx("story-brand")}>

            <div className={cx("story-set1")}>
                <img src="./images/object-06.webp" className={cx("story-list-book")} alt="set-1" />
                <div className={cx("story-nav")}>
                    <img src="./images/object-01.webp" className={cx("story-note")} alt="d" />
                    <img src="./images/object-07.webp" className={cx("story-book")} alt="d" />

                </div>
            </div>

            <div className={cx("box-story")}>
                <img src="./images/window.jpg" alt="brand" />
                <div className={cx("detail-story")}>
                    <h6>What Happened’s Brand story</h6>
                    <p>
                        청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                        봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                        긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                        인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                        아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. 
                    </p>
                    <button>See More</button>
                </div>
            </div>


            <div className={cx("story-set3")}>
                <img src="./images/object-05.webp" className={cx("story-year")} alt="brand" />
                <img src="./images/object-04.webp" className={cx("story-flower")} alt="brand" />

            </div>
        </div>

    </div>;
}

export default BrandStory;