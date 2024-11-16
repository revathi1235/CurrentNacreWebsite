import React, { useState } from "react";

import "./landingapge.css"; // Add your styles here or convert the inline styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const [items, setItems] = useState([
    
    {
        title: "Purvey",
        mainTitle: "WMS",
        subheading: "Warehouse Management System",
        description:
          "Ensure 100% traceability of Goods",
        description2: "Empower Your Business With Real-Time Inventory Insights",
        description3:  "Accomplish 100% Same Day Delivery",
        image: "https://i.redd.it/tc0aqpv92pn21.jpg"
      },
    {
      title: "One of Its Kind",
      mainTitle: "Apora",
      subheading: "AI POWERED FULFILLMENT AUTOMATION",
      description:
        "Save 60% Fulfillment Cost",
      description2: "Achieve 50 % - 60 % Increase In Efficiency",
      description3:  "Accomplish 100% Same Day Delivery",
      image: "https://i.redd.it/tc0aqpv92pn21.jpg"
    },
    // {
    //   title: "The Gate Keeper",
    //   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    //   image: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg"
    // },
    {
      title: "Delivery Management system",
      description: "Route optimization is a critical component in logistics and transportation, where the goal is to find the most efficient routes for vehicles to reduce costs and delays. By leveraging smart algorithms, businesses can optimize routes by considering various factors like traffic conditions, delivery priorities, and proximity.",
      image: "https://images7.alphacoders.com/878/878663.jpg"
    },
    {
      title: "Yard Management",
      description: "Effective yard management is critical to warehouse operations. Without clear zone definitions, and proper labeling of aisles, racks, and totes, warehouses face numerous challenges",
      image: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg"
    },
    
  ]);

  const handleNext = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handlePrev = () => {
    setItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
  };

  return (
    <div className="new-div">
    <main>
      <ul className="slider">
        {items.map((item, index) => (
          <li
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="content">
              <h2 className="title">{item.title}</h2>
              <h3 className="title">{item.mainTitle}</h3>
              <h2 className="title-subheading">{item.subheading}</h2>
              <p className="description">{item.description}</p>
              <p className="description">{item.description2}</p>
              <p className="description">{item.description3}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav-homepage">
       
        <FontAwesomeIcon icon={faLeftLong} className="btn next" name="arrow-forward-outline" onClick={handleNext}/>
        <FontAwesomeIcon icon={faRightLong} className="btn prev" name="arrow-back-outline" onClick={handlePrev}/>
      </nav>
    </main>
    </div>
  );
};

export default Slider;
