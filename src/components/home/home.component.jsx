import React from "react";
import Product from "../product/product.component";

import "./home.style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home__image"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id={1013}
          title="Harry Potter and the Deathly Hallows (Book 7)"
          price={9.19}
          image="https://images-na.ssl-images-amazon.com/images/I/51jyI6lYi1L._SX342_BO1,204,203,200_.jpg"
          rating={5}
        />
        <Product
          id={1002}
          title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
          price={349.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SX679_.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id={1001}
          title="Google Nest WiFi Router (2nd Generation) – 4x4 AC2200 Mesh Wi-Fi Router with 2200 Sq Ft Coverage"
          price={169.5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnLmQbeTIt4NKH3KIbTFQrDPJldS-vkQ7Q5Q&usqp=CAU"
          rating={3}
        />
        <Product
          id={1003}
          title="New Apple MacBook Air (13-inch, 8GB RAM, 512GB SSD Storage) - Silver with AppleCare+ Bundle"
          price={1498.99}
          image="https://images-na.ssl-images-amazon.com/images/I/419qSzafmeL._AC_.jpg"
          rating={5}
        />
        <Product
          id={1004}
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
          price={400}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_SY200_.jpg"
          rating={3}
        />
      </div>

      <div className="home__row">
        <Product
          id={1005}
          title="Samsung UN55RU7300FXZA Curved 55-Inch 4K UHD 7 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)"
          price={799.89}
          image="https://images-na.ssl-images-amazon.com/images/I/91o08DsRplL._AC_SX522_.jpg"
          rating={3}
        />
      </div>
    </div>
  );
};

export default Home;
