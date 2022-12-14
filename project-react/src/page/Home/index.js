import clsx from "clsx";
// import Header from "../../component/Header/Header";
import Banner from "../../component/Baner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/bundle";

import Service from "../../component/Service"
import CardIteam from "../../component/Card";
import CardFlash from "../../component/FlashSale";
import Footer from "../../component/Footer";
import { BsFillLightningFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import styles from "./Home.module.css";

// import sale from '../../../public/image/sale/iphone-11.png';
function Home() {
  const [cards, setCard] = useState([]);
  const [laps, setLap] = useState([]);

  useEffect(() => {
    fetch("https://webreacts.herokuapp.com/fashSale", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((card) => setCard(card));
  }, []);

  useEffect(() => {
    fetch("https://webreacts.herokuapp.com/products")
      .then((res) => res.json())
      .then((laps) => setLap(laps));
  }, []);



  return (
    <>

      <Swiper
        // loop={false}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}

      >
        <SwiperSlide>
          <Banner image="/image/slice/web-macbook-air-01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Banner image="/image/slice/web-realme-9-pro-01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Banner image="/image/slice/menu-slice.png" />
        </SwiperSlide>
      </Swiper>

      <h1 className={clsx(styles.flashSale)}>
        Flash Sale
        <BsFillLightningFill className={clsx(styles.FlashIcon)} />
      </h1>

      {/* flash sale */}

      <div className="contai-center container">

        <Swiper
          // loop={false}
          slidesPerView={4}
          spaceBetween={4}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}

        >
          {cards.map((card, index) => {
            // console.log(cards);
            return (
              <SwiperSlide key={card.id} virtualIndex={index}>
                <CardFlash
                  key={card.id}
                  sale={card.sale}
                  image={card.image}
                  title={card.title}
                  coins={card.coins}
                  saleCoin={card.saleCoin}
                  description={card.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>

      {/* iteamLap */}
      <div id="iteamlap">
        <div className={clsx(styles.lapHead)}>
          <h5>Laptop</h5>
          <ul>
            <li>
              <Link to="#">Apple</Link>
            </li>
            <li>
              <Link to="#">Asus</Link>
            </li>
            <li>
              <Link to="#">Dell</Link>
            </li>
            <li>
              <Link to="#">Hp</Link>
            </li>
            <li>
              <Link to="#">Lenovo</Link>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="row">
            <div className={clsx(styles.iteamBrand)}>
              <ul>
                <li>
                  <Link to="#">Apple</Link>
                </li>
                <li>
                  <Link to="#">Asus</Link>
                </li>
                <li>
                  <Link to="#">Dell</Link>
                </li>
                <li>
                  <Link to="#">Hp</Link>
                </li>
                <li>
                  <Link to="#">Lenovo</Link>
                </li>
              </ul>
            </div>

            {laps.map((lap) => {
              return (
                <CardIteam
                  id={lap.id}
                  key={lap.id}
                  image={lap.image}
                  title={lap.title}
                  coins={lap.coins}
                  saleCoin={lap.saleCoin}
                  description={lap.description}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* iteamTap */}
      <div id="iteamlap">
        <div className={clsx(styles.lapHead)}>
          <h5>Taplet</h5>
          <ul>
            <li>
              <Link to="#">Apple</Link>
            </li>
            <li>
              <Link to="#">SamSung</Link>
            </li>
            <li>
              <Link to="#">Lenovo</Link>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="row">

            <div className={clsx(styles.iteamBrand)}>
              <ul>
                <li>
                  <Link to="#">Apple</Link>
                </li>
                <li>
                  <Link to="#">SamSung</Link>
                </li>
                <li>
                  <Link to="#">Lenovo</Link>
                </li>
              </ul>
            </div>

            <CardIteam
              image="image/Tab/samsungtab-s7plus.jpg"
              title="Samsung Galaxy Tab S7 Plus"
              coins={21000000}
              saleCoin={23900000}
              description=" T???ng Bao da ki??m b??n ph??m Galaxy Tab S7+/Tab S7 Fe"
            />

            <CardIteam
              image="image/Tab/tabMac.jpg"
              title=" iPad 10.2 2021 WiFi 64GB | Ch??nh h??ng Apple Vi???t Nam"
              coins={9900000}
              saleCoin={10250000}
              description="T???ng phi???u mua h??ng : 150.000??"
            />

            <CardIteam
              image="image/Tab/xioamiPad5.jpg"
              title="Xiaomi Pad 5 (6GB/256GB)"
              coins={9890000}
              //   saleCoin={00000}
              description="T???ng phi???u mua h??ng : 150.000??"
            />

            <CardIteam
              image="image/Tab/ipad-mini-6.jpg"
              title="Apple iPad mini 6 4G 256GB | Ch??nh h??ng Apple Vi???t Nam"
              coins={22890000}
              saleCoin={24100000}
              description=" T???ng Bao da ki??m b??n ph??m Galaxy Tab S7+/Tab S7 Fe"
            />
          </div>
        </div>
      </div>

      {/* iteamPhone */}
      <div id="iteamlap">
        <div className={clsx(styles.lapHead)}>
          <h5>??i???n Tho???i</h5>
          <ul>
            <li>
              <Link to="#">Apple</Link>
            </li>
            <li>
              <Link to="#">SamSung</Link>
            </li>
            <li>
              <Link to="#">Xiaomi</Link>
            </li>
            <li>
              <Link to="#">Oppo</Link>
            </li>
            <li>
              <Link to="#">Vivo</Link>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="row">

            <div className={clsx(styles.iteamBrand)}>
              <ul>
                <li>
                  <Link to="#">Apple</Link>
                </li>
                <li>
                  <Link to="#">SamSung</Link>
                </li>
                <li>
                  <Link to="#">Xiaomi</Link>
                </li>
                <li>
                  <Link to="#">Oppo</Link>
                </li>
                <li>
                  <Link to="#">Vivo</Link>
                </li>
              </ul>
            </div>

            <CardIteam
              image="image/menuPhone/flip-3.webp"
              title="Samsung Galaxy Z Flip3 5G - 128GB - Ch??nh h??ng"
              coins={21990000}
              saleCoin={24990000}
              description="Voi ch??? gi???m gia l??n ?????n :4.000.000?? khi thu c?? ?????i m???i."
            />

            <CardIteam
              image="image/menuPhone/ip13.png"
              title="Apple iPhone 13 - Ch??nh h??ng VN/A"
              coins={28700000}
              saleCoin={312000000}
              description="Voi ch??? gi???m gia l??n ?????n :4.000.000?? khi thu c?? ?????i m???i."
            />

            <CardIteam
              image="image/menuPhone/oppoReno6.png"
              title="OPPO Reno6 5G - Ch??nh H??ng"
              coins={11900000}
              saleCoin={12900000}
              description="T???ng phi???u mua h??ng tr??? gi?? 300.000??"
            />

            <CardIteam
              image="image/menuPhone/xiaomi11life.png"
              title="Xiaomi 11 Lite 5G NE - 8GB/128GB - Ch??nh h??ng DGW"
              coins={8450000}
              saleCoin={9000000}
              description="T???ng Tai nghe Xiaomi Mi Earphone Basic"
            />
          </div>
        </div>
      </div>

      {/* iteamAcces */}
      <div id="iteamlap">
        <div className={clsx(styles.lapHead)}>
          <h5>Ph??? Ki???n</h5>

        </div>

        <div className="container">
          <div className="row">
            <CardIteam
              image="image/Acccers/airpods-2.jpg"
              title="Tai nghe Bluetooth Apple AirPods 2 VN/A"
              coins={3100000}
              saleCoin={3900000}
              description="Nh???n g??i 6 th??ng Apple Music mi???n ph??"
            />

            <CardIteam
              image="image/Acccers/camera-ip-wifi.jpg"
              title="Camera IP h???ng ngo???i Wifi Ezviz C6N 1080p 2MP"
              coins={590000}
              saleCoin={740000}
              description="Nh???n g??i 6 th??ng mi???n ph??"
            />

            <CardIteam
              image="image/Acccers/sac-nhanhAnker.jpg"
              title="Tai nghe Bluetooth Apple AirPods 2 VN/A"
              coins={300000}
              saleCoin={450000}
              description="Nh???n g??i 6 th??ng mi???n ph??"
            />

            <CardIteam
              image="image/Acccers/chuot-logitech.jpg"
              title="Chu???t kh??ng d??y Logitech M331"
              coins={300000}
              saleCoin={400000}
              description="Nh???n g??i 6 th??ng mi???n ph??"
            />
          </div>
        </div>
      </div>

      <Service />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default Home;
