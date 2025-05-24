import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css"; // optional reset
// import "./App.css"; // styles used below

const tabItems = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];

const TabCarousel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef();

  const handleTabClick = (index) => {
    setActiveTab(index);
    carouselRef.current?.goTo(index);
  };

  const handleBeforeChange = (from, to) => {
    setActiveTab(to);
  };

  return (
    <div className="tab-carousel-container">
      <div className="tabs">
        {tabItems.map((label, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {label}
          </div>
        ))}
        <div
          className="tab-indicator"
          style={{ transform: `translateX(${activeTab * 100}%)` }}
        />
      </div>

      <Carousel
        ref={carouselRef}
        beforeChange={handleBeforeChange}
        dots={false}
        swipe
      >
        {tabItems.map((label, index) => (
          <div className="carousel-content" key={index}>
            <h3>{label} Content</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TabCarousel;
