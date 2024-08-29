import React from "react";
import "./Places.css";
import "../../src/App.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../src/utils/slider.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { sliderSettings } from "../../src/utils/sliderproperties";
function Places() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        
        <Swiper {...sliderSettings}>
        <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="" />

                <span className="secondryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Places;

function SliderButtons() {
  const swiper = useSwiper();
  return (
  <div className="r-button flexCenter">
    <button onClick={()=>swiper.slidePrev()}>&lt;</button>
    <button onClick={()=>swiper.slideNext()}>&gt;</button>
  </div>
)};